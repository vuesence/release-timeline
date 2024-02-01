<script setup>
import ReleaseTimeline from "./ReleaseTimeline.vue";

defineProps({
  options: String,
});

let options = window.rt_options;

if (!options) {
  options = JSON.parse(props.options);
}
</script>

<template>
  <ReleaseTimeline :options="options" />
</template>

<style lang="scss">
@import "./css/user-badge.css";
@import "./css/timeline-item.css";
@import "./css/timeline-item-issues.css";
@import "./css/release-timeline.css";
</style>
