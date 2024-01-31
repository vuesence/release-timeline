export const DefaultOptions = {
  github: {
    owner: "vuejs",
    repo: "vitepress",
    token: "",
    // feedType: github or url
    releases: {
      // feedType: "github",
      feedType: "url",
      url: "/releases.json",
      size: 20,
    },
    pulls: {
      // feedType: "github",
      feedType: "url",
      url: "pulls.json",
      size: 20,
    },
    commits: {
      // feedType: "github",
      feedType: "url",
      url: "commits.json",
      size: 30,
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
      desc: true,
      pulls: true,
      commits: true,
      defaultOpenTab: "pulls",
    },
  },
};
