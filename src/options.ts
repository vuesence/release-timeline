export const DefaultOptions = {
  github: {
    owner: "vuejs",
    repo: "vitepress",
    token: "",
    // feedType: github or url
    releases: {
      feedType: "github",
      // feedType: "url",
      url: "/releases.json",
      size: 20,
    },
    pulls: {
      feedType: "github",
      // feedType: "url",
      url: "pulls.json",
      size: 100,
    },
    commits: {
      feedType: "github",
      // feedType: "url",
      url: "commits.json",
      size: 200,
    },
  },
  timeline: {
    paddingTop: 0.1,
    span: 200,
  },
  display: {
    releaseName: true,
    animatedBackground: true,
    animatedBackgroundForLightTheme: false,
    release: {
      name: true,
      username: true,
      desc: true,
      pulls: true,
      commits: true,
      hidePullUsername: true,
      hideCommitUsername: false,
      hideMergeCommits: true,
      // defaultOpenTab: "pulls",
    },
  },
};
