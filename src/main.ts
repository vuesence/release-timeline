import { createApp } from "vue";
import App from "./App.vue";

// configure options
const initOptions = {
  github: {
    owner: "vuesence",
    repo: "release-timeline",
  },
};

const app = createApp(App, { initOptions });
app.mount("#release-timeline");
