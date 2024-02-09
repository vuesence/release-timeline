import { createApp, defineCustomElement } from "vue";
import { DefaultOptions } from "./options";
import ReleaseTimeline from "./ReleaseTimeline.vue";
import App from "./App.vue";

if (globalThis.window) {
  import("./ReleaseTimeline.ce.vue").then((module) => {
    window.customElements.define("release-timeline", defineCustomElement(module));
  });
}

function mountRT(initOptions) {
  const app = createApp(App, { initOptions });
  app.mount("#release-timeline");
}

export { ReleaseTimeline, DefaultOptions, mountRT };

export {};
