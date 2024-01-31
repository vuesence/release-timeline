<script setup lang="ts">
import ReleaseTimeline from "./ReleaseTimeline.vue";
import { DefaultOptions as options } from "./options";

// import "./style.css";
// import "release-timeline/dist/animated-background.css";
import "./animated-background.css";

// configure options
options.github.owner = "vuesence";
options.github.repo = "arty-crafty";
</script>

<template>
  <ReleaseTimeline :options="options" />
</template>

<style>
:root {
  --rt-c-text-1: #3c3c43;
  --rt-c-text-2: #3c3c43c7;
  --rt-c-text-3: #3c3c438f;
  --rt-c-border: #e2e2e3;
  --rt-c-bg-alt: #f6f6f7;
  --rt-c-brand-1: #3451b2;
  --rt-c-brand-2: #3a5ccc;
}
</style>
