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

<style scoped>
a {
  text-decoration: none;
  color: var(--rt-c-brand-1);
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-left: -9px;
  transform: translateX(50%);
  width: 50%;
  position: relative;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  &.left {
    transform: translateX(-50%);
    flex-direction: row-reverse;
    margin-left: 9px;

    .content {
      align-items: flex-end;
    }

    .release-name {
      text-align: end;
    }
  }

  .circle {
    border: 1px solid var(--rt-c-border);
    border-radius: 9999px;
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    margin-top: 0.5rem;
    box-shadow: var(--rt-c-text-2) 0px 0px 3px 1px;
    background-color: var(--rt-c-circle-bg);

  }

  .content {
    display: flex;
    flex-direction: column;

    time {
      font-weight: 600;
      font-size: .8rem;
      line-height: 1.5rem;
      color: var(--rt-c-text-3);
    }

    .tag-name {
      color: var(--rt-c-brand-1);
      width: fit-content;
      /* text-align: right; */
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: 0.5rem;
      transition: all 0.2s ease-in;

      &:hover {
        color: var(--rt-c-brand-2);
      }
    }

    .release-name {
      margin: 3px 0 3px 0;
      padding-top: 0;
      border-top: 1px solid var(--rt-c-border);
      color: var(--rt-c-text-2);
      font-size: 1.15rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      line-height: 1.4rem;
    }

    /* .issues { */
    .issue-tabs {
      display: flex;
      gap: 0.6rem;
    }

    /* } */

    .notes {
      list-style: none;
      margin: 0;
      padding: 0;

      .note {
        font-size: .875rem;
        line-height: 1.5rem;
      }
    }

  }
}
</style>
