<script setup lang="ts">
import { ref } from "vue";

import ReleaseTimeline from "./ReleaseTimeline.vue";
import { DefaultOptions as options } from "./options";

import "./css/animated-background.css";

const key = ref(0);

// configure options
options.github.owner = "vuesence";
options.github.repo = "release-timeline";

function changeRepo() {
  const url = prompt("Please enter Github Repo url", "https://github.com/vitejs/vite.git");
  const pathParts = url.split("/").filter(part => part); // Remove empty parts
  options.github.owner = pathParts[2];
  options.github.repo = pathParts[3].substring(0, pathParts[3].length - 4);
  key.value++;
}
</script>

<template>
  <div class="change-repo" @click="changeRepo">
    Change Repo
  </div>
  <ReleaseTimeline :key="key" :options="options" />
  <!-- <ReleaseTimeline :key="key" options="{&quot;github&quot;: {&quot;owner&quot;: &quot;vuesence&quot;, &quot;repo&quot;: &quot;release-timeline&quot;}}" /> -->
</template>

<style>
html {
  /* scrollbar fix */
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
body {
  margin: 0;
}
.change-repo {
  position: fixed;
  color: var(--rt-c-text-2);
  top: 20px;
  left: 20px;
  z-index: 2;
  cursor: pointer;
}
:root {
  --rt-c-text-1: #3c3c43;
  --rt-c-text-2: #3c3c43c7;
  --rt-c-text-3: #3c3c438f;
  --rt-c-border: #e2e2e3;
  --rt-c-bg: #ffffff;
  --rt-c-issues: #ffffff;
  --rt-c-bg-alt: #f6f6f7;
  --rt-c-brand-1: #3451b2;
  --rt-c-brand-2: #3a5ccc;
  --rt-c-circle-bg: #888;
  --rt-font-family-base: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dark {
  --rt-c-text-1: rgba(255, 255, 245, 0.86);
  --rt-c-text-2: rgba(235, 235, 245, 0.6);
  --rt-c-text-3: rgba(235, 235, 245, 0.38);
  --rt-c-border: #2e2e32;
  --rt-c-bg: #1b1b1f;
  --rt-c-bg-issues: #1b1b1f;
  --rt-c-bg-alt: #161618;
  --rt-c-brand-1: #5c73e7;
  --rt-c-brand-2: #a8b1ff;
  --rt-c-circle-bg: #888;
  --rt-font-family-base: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
