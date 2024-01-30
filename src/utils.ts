// import releases from "./data.json";

export interface Release {
  published_at: string
  release?: object
}

export async function loadReleases(options) {
  let releases: Release[] = [];
  let url = "";
  let headers = {};
  if (options.github.feedType === "github") {
    url = `https://api.github.com/repos/${options.github.owner}/${options.github.repo}/releases?per_page=${options.github.size}`;
    if (options.github.token) {
      headers = {
        Authorization: `token ${options.github.token}`,
      };
    }
  } else {
    url = options.github.url;
  }

  releases = await fetch(url, { headers }).then(res => res.json());

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
        data: releases.find(release =>
          isSameDay(new Date(release.published_at), day),
        ),
      };
    })
    .filter(date => date.data)
    .map((date, index) => {
      const diff
        = index > 0
          ? (new Date(releases[index - 1].published_at).getTime()
          - new Date(date.data.published_at).getTime())
          / totalDiff
          : options.linePaddingTop;
      return { ...date, diff };
    });
  return dates;
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate()
    && date1.getMonth() === date2.getMonth()
    && date1.getFullYear() === date2.getFullYear()
  );
}

export function eachDayOfInterval(startDate: Date, endDate: Date): Date[] {
  const days: Date[] = [];
  const currentDate = new Date(startDate);
  currentDate.setHours(0, 0);

  // eslint-disable-next-line no-unmodified-loop-condition
  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
}

export const DefaultOptions = {
  github: {
    owner: "vuejs",
    repo: "vitepress",
    size: 20,
    token: "",
    // feedType: github or url
    feedType: "github",
    url: "",
  },
  timeline: {
    paddingTop: 0.1,
    span: 200,
  },
  display: {
    releaseName: true,
    animatedBackground: true,
  },
};
