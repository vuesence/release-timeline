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
@import "./css/user-badge.scss";
@import "./css/timeline-item.scss";
@import "./css/timeline-item-issues.scss";
@import "./css/release-timeline.scss";
</style>
