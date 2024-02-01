import { defineCustomElement } from "vue";
import ReleaseTimelineCE from "./ReleaseTimeline.ce.vue";
import ReleaseTimeline from "./ReleaseTimeline.vue";
import { DefaultOptions } from "./options";

export { ReleaseTimeline, DefaultOptions };

customElements.define("release-timeline", defineCustomElement(ReleaseTimelineCE));

export {};
