<script lang="ts" setup>
import { onMounted, ref } from "vue";
import UserBadge from "./UserBadge.vue";

defineProps<{
  release: any
  options: any
}>();

onMounted(async () => {

});

function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options as Intl.DateTimeFormatOptions);
}
</script>

<template>
  <div class="timeline-item">
    <div class="circle"></div>
    <div class="content">
      <time :datetime="release.published_at">{{ formatDate(release.published_at) }}</time>
      <a :href="`https://github.com/${options.github.owner}/${options.github.repo}/releases/tag/${release.tag_name}`"
        rel="noopener noreferrer" target="_blank" class="tag-name">
        {{ release.tag_name }}
      </a>
      <h2 v-if="options.display.releaseName" class="release-name">
        {{ release.name }}
      </h2>
      <UserBadge :username="release.author.login" />
      <ul class="notes">
        <li class="note">


          <!-- pushed
          <a
            :href="`https://github.com/${options.github.owner}/${options.github.repo}/pull/138`" rel="noopener noreferrer" target="_blank"
            class="details"
          >
            #138 feat: code
            #138 feat: code block and inline code components
          </a> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- <style>
@import "./variables.css";
</style> -->

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
  }

  .circle {
    border: 1px solid var(--rt-c-divider);
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
      /* width: fit-content; */
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
      margin: 2px 0 6px 0;
      font-size: 1.2rem;
      font-weight: 600;
    }

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
