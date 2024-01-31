import { eachDayOfInterval, isSameDay } from "./date-utils";

// export interface Release {
//   published_at: string
//   release?: object
// }

export async function loadReleases(options) {
  let headers = {};
  const data = new Map();

  for (const index in ["releases", "pulls", "commits"]) {
    const type = ["releases", "pulls", "commits"][index];
    let url;
    if (options.github[type].feedType === "github") {
      url = `https://api.github.com/repos/${options.github.owner}/${options.github.repo}/${type}?per_page=${options.github[type].size}&state=closed`;
      if (options.github.token) {
        headers = {
          Authorization: `token ${options.github.token}`,
        };
      }
    } else {
      url = options.github[type].url;
    }
    const res = await fetch(url, { headers }).then(res => res.json());
    data.set(type, res);
  }

  const releases = data.get("releases");
  const pulls = data.get("pulls");
  const commits = data.get("commits");

  const firstDay = releases[releases.length - 1];
  const days = eachDayOfInterval(new Date(firstDay.published_at), new Date());
  const totalDiff
    = new Date(releases[0].published_at).getTime()
    - new Date(releases[releases.length - 1].published_at).getTime();
  // console.log(days);
  const dates = days
    .reverse()
    .map((day) => {
      return {
        day,
        release: releases.find(release =>
          isSameDay(new Date(release.published_at), day),
        ),
      };
    })
    .filter(date => date.release)
    .map((date, index) => {
      const curDate = new Date(date.release.published_at);
      const prevDate
        = index === releases.length - 1
          ? new Date(1980, 1)
          : new Date(releases[index + 1].published_at);
      const nextDate
        = index === 0 ? null : new Date(releases[index - 1].published_at);
      const diff
        = index === 0
          ? options.timeline.paddingTop
          : index < releases.length - 1
            ? (nextDate.getTime() - curDate.getTime()) / totalDiff
            : 0;

      // date.release.pulls = findPullRequests(prevDate, curDate, pulls);
      // date.release.commits = findCommits(prevDate, curDate, commits);

      return {
        day: date.day,
        release: {
          name: date.release.name,
          tag_name: date.release.tag_name,
          published_at: date.release.published_at,
          author: date.release.author.login,
          desc: formatDesc(date.release.body),
          pulls: findPullRequests(prevDate, curDate, pulls),
          commits: findCommits(prevDate, curDate, commits),
        },
        diff,
      };
    });

  console.log(dates);

  return dates;
}

function formatDesc(str) {
  if (!str) {
    return "";
  }
  str = str.replaceAll("</samp>", "").replaceAll("<samp>", "");
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  // Replace Markdown links with HTML links
  str = str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  str = str.replace(markdownLinkRegex, "<a href=\"$2\" target=\"_blank\">$1</a>");
  // Regular expression to match Markdown headers
  const markdownHeaderRegex = /^(#+)\s(.+)/gm;
  // Replace Markdown headers with HTML headers
  str = str.replace(markdownHeaderRegex, (match, level, text) => {
    const headerLevel = level.length;
    return `<h${headerLevel}>${text}</h${headerLevel}>`;
  });
  // console.log(str);
  str = `<p>${str}`;
  str = str
    .split("\r\n")
    .filter(str => str)
    .map(str => str.trim())
    .join("</p><p>");
  str += "</p>";
  return str;
}

function findPullRequests(startDate, endDate, pulls) {
  return pulls
    .filter((pull) => {
      const pullDate = new Date(pull.closed_at);
      return pullDate >= startDate && pullDate <= endDate;
    })
    .map((pull) => {
      return {
        title: pull.title,
        number: pull.number,
        author: pull.user.login,
      };
    });
}
function findCommits(startDate, endDate, commits) {
  return commits
    .filter((commit) => {
      const date = new Date(commit.commit.author.date);
      return date >= startDate && date <= endDate;
    })
    .map((commit) => {
      return {
        title: commit.commit.message,
        url: commit.commit.url,
        author: commit.author.login,
      };
    });
}
