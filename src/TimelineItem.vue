<script lang="ts" setup>
// import { onMounted, ref } from "vue";
import UserBadge from "./UserBadge.vue";
import TimelineItemIssues from "./TimelineItemIssues.vue";

defineProps<{
  release: any
  options: any
}>();

function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
</script>

<template>
  <div class="timeline-item">
    <div class="circle"></div>
    <div class="content">
      <time :datetime="release.published_at">{{ formatDate(release.published_at) }}</time>
      <a
        :href="`https://github.com/${options.github.owner}/${options.github.repo}/releases/tag/${release.tag_name}`"
        rel="noopener noreferrer" target="_blank" class="tag-name"
      >
        {{ release.tag_name }}
      </a>
      <h2 v-if="options.display.release.name" class="release-name">
        {{ release.name }}
      </h2>
      <UserBadge v-if="options.display.release.username" :username="release.author" />
      <TimelineItemIssues :release="release" :options="options" />
    </div>
  </div>
</template>

<style>
</style>
