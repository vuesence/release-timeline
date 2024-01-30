<script lang="ts" setup>
import { onMounted, ref } from "vue";

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
  <div class="release-item">
    <div class="circle"></div>
    <div class="content">
      <time :datetime="release.published_at">{{ formatDate(release.published_at) }}</time>
      <a :href="`https://github.com/${options.github.owner}/${options.github.repo}/releases/tag/${release.tag_name}`"
        rel="noopener noreferrer" target="_blank" class="release-tag">
        {{ release.tag_name }}
      </a>
      <ul class="notes">
        <li class="note">
          <h4 v-if="options.display.releaseName" class="release-name">
            {{ release.name }}
          </h4>
          <a :href="`https://github.com/${release.author.login}`" rel="noopener noreferrer" target="_blank" class="user">
            <span class="avatar">
              <img class="" :src="`https://github.com/${release.author.login}.png`" alt="">
            </span>
            {{ release.author.login }}
          </a>

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

<style>
:root {
  --rt-c-text-1: var(--vp-c-text-1);
  --rt-c-text-2: var(--vp-c-text-2);
  --rt-c-text-3: var(--vp-c-text-3);
  --rt-c-divider: var(--vp-c-divider);
  --rt-c-bg-alt: var(--vp-c-bg-alt);
  --rt-c-brand-1: var(--vp-c-brand-1);
  --rt-c-brand-2: var(--vp-c-brand-2);
}
</style>

<style scoped>
.release-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-left: -8px;
  transform: translateX(50%);
  width: 50%;
  position: relative;

  &.left {
    transform: translateX(-50%);
    flex-direction: row-reverse;
    margin-left: 8px;

    .content {
      text-align: right;
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
    background-color: #888;

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

    .release-tag {
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

    .notes {
      list-style: none;
      margin: 0;
      padding: 0;

      .note {
        font-size: .875rem;
        line-height: 1.5rem;

        .user {
          display: inline-flex;
          align-items: center;
          padding: 0.125rem 0.2rem;
          gap: 0.25rem;
          text-decoration: inherit;
          border: 1px solid var(--rt-c-divider);
          border-radius: 9999px;
          font-weight: 500;
          font-size: .75rem;
          line-height: 1rem;
          background-color: var(--rt-c-bg-alt);
          vertical-align: middle;

          .avatar {
            border-radius: 9999px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            width: 1rem;
            height: 1rem;
            display: inline-flex;
            position: relative;

            img {
              border-radius: 9999px;
              width: 1rem;
            }
          }
        }
      }
    }

  }
}

.vp-doc a {
  text-decoration: none !important;
}
</style>
