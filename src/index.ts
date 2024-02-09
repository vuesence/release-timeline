import { createApp, defineCustomElement } from "vue";
import { DefaultOptions } from "./options";
import ReleaseTimelineCE from "./ReleaseTimeline.ce.vue";
import ReleaseTimeline from "./ReleaseTimeline.vue";
import App from "./App.vue";

if (globalThis.window) {
  window.customElements.define("release-timeline", defineCustomElement(ReleaseTimelineCE));
}

function mountRT(initOptions) {
  const app = createApp(App, { initOptions });
  app.mount("#release-timeline");
}

export { ReleaseTimeline, DefaultOptions, mountRT };

export {};
