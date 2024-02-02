import { defineCustomElement } from "vue";
import ReleaseTimelineCE from "./ReleaseTimeline.ce.vue";
import ReleaseTimeline from "./ReleaseTimeline.vue";
import { DefaultOptions } from "./options";

// function initCE() {
window.customElements.define("release-timeline", defineCustomElement(ReleaseTimelineCE));
// }

export { ReleaseTimeline, DefaultOptions };

export {};
