<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import TimelineItem from "./TimelineItem.vue";
import { type Release, loadReleases } from "./utils";

const props = defineProps<{
  options: any
}>();

// if (props.options.display.animatedBackground) {
//   import("./background.css");
// }

const releases = ref();

onMounted(async () => {
  releases.value = await loadReleases(props.options);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).style.opacity = "1";
      }
    });
  }, {
    threshold: 0.5,
  });

  nextTick(() => {
    const elements = document.querySelectorAll(".timeline .rt-tr-el");
    elements.forEach((element) => {
      observer.observe(element);
    });
  });
});

// console.log(dates);
</script>

<template>
  <section class="release-timeline dark1">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <header class="header">
      <h1>Releases</h1>
      <a :href="`https://github.com/${options.github.owner}/${options.github.repo}/releases`" rel="noopener noreferrer"
        target="_blank">
        <div class="github-link">
          <div class="github-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z" />
            </svg>
          </div>
          <div class="github-title">View on GitHub</div>
        </div>
      </a>
    </header>
    <div class="timeline">
      <section v-for="(release, index) in releases" :key="release.day.getUTCDate()" class="timeline-record rt-tr-el"
        :style="{ paddingTop: `${release.diff * options.timeline.span}px` }">
        <div class="line" />
        <TimelineItem :release="release.data" :options="options" :class="index % 2 === 1 ? 'left' : 'right'" />
      </section>
    </div>
  </section>
</template>

<style>
@import "./variables.css";
</style>

<style scoped>
.dark {
  /* background-color: var(--rt-c-bg-alt); */
}

.release-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .header {
    text-align: center;
    margin-bottom: 1rem;

    h1 {
      margin-bottom: 0.9rem;
    }

    a {
      width: fit-content;
      display: block;
      margin: auto;
      text-decoration: none;

      .github-link {
        display: flex;
        border: 1px solid var(--rt-c-border);
        border-radius: 0.3rem;
        padding: 8px;
        width: fit-content;
        color: var(--rt-c-text-2);
        font-size: 0.9;
        font-weight: 600;
        transition: color 0.3s ease-in-out;

        .github-icon {
          margin-right: 0.6em;
        }

        &:hover {
          color: var(--rt-c-text-1);
        }

      }
    }
  }

  .timeline {
    .timeline-record {
      padding-bottom: 0.75rem;
      padding-top: 0.75rem;
      justify-content: center;
      align-items: center;
      min-height: 24px;
      display: flex;
      position: relative;
      opacity: 0.2;
      transition: opacity 1.2s ease;

      .line {
        background-color: var(--rt-c-text-3);
        flex-shrink: 0;
        width: 0.125rem;
        height: 100%;
        margin-left: -1px;
        top: 0;
        left: 50%;
        right: 50%;
        position: absolute;
      }

    }
  }
}
</style>
