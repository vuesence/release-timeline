import { defineComponent as $, openBlock as i, createElementBlock as c, createElementVNode as a, toDisplayString as d, ref as S, Fragment as _, renderList as v, normalizeClass as D, createCommentVNode as g, createVNode as k, pushScopeId as C, popScopeId as z, onMounted as L, nextTick as M, normalizeStyle as j, createStaticVNode as N } from "vue";
const O = ["href"], H = { class: "avatar" }, V = ["src"], A = { class: "username" }, E = /* @__PURE__ */ $({
  __name: "UserBadge",
  props: {
    username: {}
  },
  setup(e) {
    return (n, s) => (i(), c("a", {
      href: `https://github.com/${n.username}`,
      rel: "noopener noreferrer",
      target: "_blank",
      class: "user"
    }, [
      a("span", H, [
        a("img", {
          src: `https://github.com/${n.username}.png`,
          alt: ""
        }, null, 8, V)
      ]),
      a("span", A, d(n.username), 1)
    ], 8, O));
  }
}), w = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [t, l] of n)
    s[t] = l;
  return s;
}, F = /* @__PURE__ */ w(E, [["__scopeId", "data-v-2982cceb"]]), U = { class: "issue-tabs" }, q = ["onClick"], P = { key: 0 }, Y = { key: 0 }, G = ["innerHTML"], J = { key: 1 }, K = ["href"], Q = { key: 2 }, W = ["href"], X = /* @__PURE__ */ $({
  __name: "TimelineItemIssues",
  props: {
    release: {},
    options: {}
  },
  setup(e) {
    const n = e, s = S(""), t = [
      {
        name: "desc",
        title: "Desc",
        show: n.options.display.release.desc
      },
      {
        name: "pulls",
        title: "Pull Requests",
        show: n.options.display.release.pulls
      },
      {
        name: "commits",
        title: "Commits",
        show: n.options.display.release.commits
      }
    ];
    n.options.display.release.defaultOpenTab && (s.value = n.options.display.release.defaultOpenTab);
    function l(o) {
      s.value = o === s.value ? "" : o;
    }
    return (o, h) => (i(), c(_, null, [
      a("div", U, [
        (i(), c(_, null, v(t, (r) => a("button", {
          key: r.name,
          class: D(["tab", { active: s.value === r.name }]),
          onClick: (T) => l(r.name)
        }, [
          r.show ? (i(), c("span", P, d(r.title), 1)) : g("", !0)
        ], 10, q)), 64))
      ]),
      a("div", {
        class: D(["issues", [{ open: s.value !== "" }, s.value]])
      }, [
        s.value === "desc" && o.release.desc ? (i(), c("div", Y, [
          a("div", {
            class: "issue",
            innerHTML: o.release.desc
          }, null, 8, G)
        ])) : g("", !0),
        s.value === "pulls" ? (i(), c("div", J, [
          (i(!0), c(_, null, v(o.release.pulls, (r) => (i(), c("div", {
            key: r.number,
            class: "issue-wrapper"
          }, [
            a("a", {
              href: `https://github.com/${o.options.github.owner}/${o.options.github.repo}/pull/${r.number}`,
              rel: "noopener noreferrer",
              target: "_blank",
              class: "issue"
            }, [
              a("p", null, "#" + d(r.number) + " " + d(r.title) + " - @" + d(r.author), 1)
            ], 8, K)
          ]))), 128))
        ])) : g("", !0),
        s.value === "commits" ? (i(), c("div", Q, [
          (i(!0), c(_, null, v(o.release.commits, (r) => (i(), c("div", {
            key: r.url,
            class: "issue-wrapper"
          }, [
            a("a", {
              href: r.url,
              rel: "noopener noreferrer",
              target: "_blank",
              class: "issue"
            }, [
              a("p", null, d(r.title) + " - @" + d(r.author), 1)
            ], 8, W)
          ]))), 128))
        ])) : g("", !0)
      ], 2)
    ], 64));
  }
}), Z = /* @__PURE__ */ w(X, [["__scopeId", "data-v-37a279f4"]]), R = (e) => (C("data-v-b0bc72c4"), e = e(), z(), e), x = { class: "timeline-item" }, ee = /* @__PURE__ */ R(() => /* @__PURE__ */ a("div", { class: "circle" }, null, -1)), te = { class: "content" }, se = ["datetime"], ne = ["href"], ae = {
  key: 0,
  class: "release-name"
}, oe = /* @__PURE__ */ R(() => /* @__PURE__ */ a("ul", { class: "notes" }, [
  /* @__PURE__ */ a("li", { class: "note" })
], -1)), re = /* @__PURE__ */ $({
  __name: "TimelineItem",
  props: {
    release: {},
    options: {}
  },
  setup(e) {
    function n(s) {
      return new Date(s).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    }
    return (s, t) => (i(), c("div", x, [
      ee,
      a("div", te, [
        a("time", {
          datetime: s.release.published_at
        }, d(n(s.release.published_at)), 9, se),
        a("a", {
          href: `https://github.com/${s.options.github.owner}/${s.options.github.repo}/releases/tag/${s.release.tag_name}`,
          rel: "noopener noreferrer",
          target: "_blank",
          class: "tag-name"
        }, d(s.release.tag_name), 9, ne),
        s.options.display.releaseName ? (i(), c("h2", ae, d(s.release.name), 1)) : g("", !0),
        k(F, {
          username: s.release.author
        }, null, 8, ["username"]),
        k(Z, {
          release: s.release,
          options: s.options
        }, null, 8, ["release", "options"]),
        oe
      ])
    ]));
  }
}), le = /* @__PURE__ */ w(re, [["__scopeId", "data-v-b0bc72c4"]]);
function ie(e, n) {
  return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function ce(e, n) {
  const s = [], t = new Date(e);
  for (t.setHours(0, 0); t <= n; )
    s.push(new Date(t)), t.setDate(t.getDate() + 1);
  return s;
}
async function ue(e) {
  let n = {};
  const s = /* @__PURE__ */ new Map();
  for (const u in ["releases", "pulls", "commits"]) {
    const p = ["releases", "pulls", "commits"][u];
    let m;
    e.github[p].feedType === "github" ? (m = `https://api.github.com/repos/${e.github.owner}/${e.github.repo}/${p}?per_page=${e.github.size}`, e.github.token && (n = {
      Authorization: `token ${e.github.token}`
    })) : m = e.github[p].url;
    const b = await fetch(m, { headers: n }).then((y) => y.json());
    s.set(p, b);
  }
  const t = s.get("releases"), l = s.get("pulls"), o = s.get("commits"), h = t[t.length - 1], r = ce(new Date(h.published_at), /* @__PURE__ */ new Date()), T = new Date(t[0].published_at).getTime() - new Date(t[t.length - 1].published_at).getTime(), I = r.reverse().map((u) => ({
    day: u,
    release: t.find(
      (p) => ie(new Date(p.published_at), u)
    )
  })).filter((u) => u.release).map((u, p) => {
    const m = new Date(u.release.published_at), b = p === t.length - 1 ? new Date(1980, 1) : new Date(t[p + 1].published_at), y = p === 0 ? null : new Date(t[p - 1].published_at), B = p === 0 ? e.timeline.paddingTop : p < t.length - 1 ? (y.getTime() - m.getTime()) / T : 0;
    return {
      day: u.day,
      release: {
        name: u.release.name,
        tag_name: u.release.tag_name,
        published_at: u.release.published_at,
        author: u.release.author.login,
        desc: pe(u.release.body),
        pulls: de(b, m, l),
        commits: he(b, m, o)
      },
      diff: B
    };
  });
  return console.log(I), I;
}
function pe(e) {
  if (!e)
    return "";
  e = e.replaceAll("</samp>", "").replaceAll("<samp>", "");
  const n = /\[([^\]]+)\]\(([^)]+)\)/g;
  e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(n, '<a href="$2" target="_blank">$1</a>');
  const s = /^(#+)\s(.+)/gm;
  return e = e.replace(s, (t, l, o) => {
    const h = l.length;
    return `<h${h}>${o}</h${h}>`;
  }), e = `<p>${e}`, e = e.split(`\r
`).filter((t) => t).map((t) => t.trim()).join("</p><p>"), e += "</p>", e;
}
function de(e, n, s) {
  return s.filter((t) => {
    const l = new Date(t.closed_at);
    return l >= e && l <= n;
  }).map((t) => ({
    title: t.title,
    number: t.number,
    author: t.user.login
  }));
}
function he(e, n, s) {
  return s.filter((t) => {
    const l = new Date(t.commit.author.date);
    return l >= e && l <= n;
  }).map((t) => ({
    title: t.commit.message,
    url: t.commit.url,
    author: t.author.login
  }));
}
const f = (e) => (C("data-v-1257209b"), e = e(), z(), e), me = { class: "release-timeline dark1" }, _e = /* @__PURE__ */ f(() => /* @__PURE__ */ a("div", { id: "stars" }, null, -1)), ge = /* @__PURE__ */ f(() => /* @__PURE__ */ a("div", { id: "stars2" }, null, -1)), fe = /* @__PURE__ */ f(() => /* @__PURE__ */ a("div", { id: "stars3" }, null, -1)), be = { class: "header" }, ve = /* @__PURE__ */ f(() => /* @__PURE__ */ a("h1", null, "Releases", -1)), $e = ["href"], we = /* @__PURE__ */ N('<div class="github-link" data-v-1257209b><div class="github-icon" aria-hidden="true" data-v-1257209b><svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-v-1257209b><path fill="currentColor" d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z" data-v-1257209b></path></svg></div><div class="github-title" data-v-1257209b>View on GitHub</div></div>', 1), ye = [
  we
], De = { class: "timeline" }, ke = /* @__PURE__ */ f(() => /* @__PURE__ */ a("div", { class: "line" }, null, -1)), Te = /* @__PURE__ */ $({
  __name: "ReleaseTimeline",
  props: {
    options: {}
  },
  setup(e) {
    const n = e, s = S();
    return L(async () => {
      s.value = await ue(n.options);
      const t = new IntersectionObserver((l) => {
        l.forEach((o) => {
          o.isIntersecting && (o.target.style.opacity = "1");
        });
      }, {
        threshold: 0.5
      });
      M(() => {
        document.querySelectorAll(".timeline .rt-tr-el").forEach((o) => {
          t.observe(o);
        });
      });
    }), (t, l) => (i(), c("section", me, [
      _e,
      ge,
      fe,
      a("header", be, [
        ve,
        a("a", {
          href: `https://github.com/${t.options.github.owner}/${t.options.github.repo}/releases`,
          rel: "noopener noreferrer",
          target: "_blank"
        }, ye, 8, $e)
      ]),
      a("div", De, [
        (i(!0), c(_, null, v(s.value, (o, h) => (i(), c("section", {
          key: o.day.getUTCDate(),
          class: "timeline-record rt-tr-el",
          style: j({ paddingTop: `${o.diff * t.options.timeline.span}px` })
        }, [
          ke,
          k(le, {
            release: o.release,
            options: t.options,
            class: D(h % 2 === 1 ? "left" : "right")
          }, null, 8, ["release", "options", "class"])
        ], 4))), 128))
      ])
    ]));
  }
}), Se = /* @__PURE__ */ w(Te, [["__scopeId", "data-v-1257209b"]]), Ce = {
  github: {
    owner: "vuejs",
    repo: "vitepress",
    token: "",
    // feedType: github or url
    releases: {
      feedType: "github",
      // feedType: "url",
      url: "/releases.json",
      size: 20
    },
    pulls: {
      feedType: "github",
      // feedType: "url",
      url: "pulls.json",
      size: 20
    },
    commits: {
      feedType: "github",
      // feedType: "url",
      url: "commits.json",
      size: 30
    }
  },
  timeline: {
    paddingTop: 0.1,
    span: 200
  },
  display: {
    releaseName: !0,
    animatedBackground: !0,
    animatedBackgroundForLightTheme: !1,
    release: {
      desc: !0,
      pulls: !0,
      commits: !0
      // defaultOpenTab: "pulls",
    }
  }
};
export {
  Ce as DefaultOptions,
  Se as ReleaseTimeline
};
