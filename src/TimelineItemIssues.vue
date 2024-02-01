<script lang="ts" setup>
import { nextTick, ref } from "vue";

const props = defineProps<{
  release: any
  options: any
}>();

const curTab = ref("");
const issuesSection = ref();
const issuesMaxHeight = ref(0);

const tabs = [
  {
    name: "desc",
    title: "Desc",
    show: props.options.display.release.desc,
  },
  {
    name: "pulls",
    title: "Pull Requests",
    show: props.options.display.release.pulls,
  },
  {
    name: "commits",
    title: "Commits",
    show: props.options.display.release.commits,
  },
];

if (props.options.display.release.defaultOpenTab) {
  curTab.value = props.options.display.release.defaultOpenTab;
}

function toggle(_tab: string) {
  curTab.value = _tab === curTab.value ? "" : _tab;
  nextTick(() => {
    // console.log(issuesSection.value?.scrollHeight);
    issuesMaxHeight.value = issuesSection.value?.scrollHeight;
  });
}
</script>

<template>
  <div class="issue-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      class="tab"
      :class="{ active: curTab === tab.name }"
      @click="toggle(tab.name)"
    >
      <span v-if="tab.show">
        {{ tab.title }}
      </span>
    </button>
  </div>
  <div
    ref="issuesSection"
    class="issues"
    :style="{ maxHeight: curTab === '' ? 0 : `${issuesMaxHeight}px` }"
  >
    <section v-if="release.desc" :class="{ open: curTab === 'desc' }">
      <div class="issue" v-html="release.desc"></div>
    </section>
    <section :class="{ open: curTab === 'pulls' }">
      <div v-for="pull in release.pulls" :key="pull.number" class="issue-wrapper">
        <a
          :href="`https://github.com/${options.github.owner}/${options.github.repo}/pull/${pull.number}`"
          rel="noopener noreferrer" target="_blank" class="issue"
        >
          <p>
            <span>
              #{{ pull.number }}: {{ pull.title }}
            </span>
            <span v-if="!options.display.release.hidePullUsername"> - @{{ pull.author }}</span>
          </p>
        </a>
      </div>
    </section>
    <section :class="{ open: curTab === 'commits' }">
      <div v-for="commit in release.commits" :key="commit.url" class="issue-wrapper">
        <a
          v-if="!options.display.release.hideMergeCommits || !commit.title.startsWith('Merge ')"
          :href="commit.url"
          rel="noopener noreferrer"
          target="_blank"
          class="issue"
        >
          <!-- <p>{{ commit.title }} - @{{ commit.author }}</p> -->
          <p>
            <span>{{ commit.title }}</span>
            <span v-if="!options.display.release.hideCommitUsername"> - @{{ commit.author }}</span>
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--rt-c-brand-1);
}

.tab {
  text-wrap: nowrap;
  background-color: var(--rt-c-bg);
  color: var(--rt-c-text-3);
  cursor: pointer;
  padding: 2px 5px;
  text-align: left;
  border: solid 1px var(--rt-c-border);
  border-radius: 3px;
  transition: 0.4s;
  margin: 7px 7px 0 0;
  font-size: 0.7rem;
  text-transform: lowercase;
  letter-spacing: 0.3px;
  font-weight: 400;

  &.active,
  &:hover {
    color: var(--rt-c-text-2);
    border-color: var(--rt-c-text-2);
    background-color: var(--rt-c-bg-alt)
  }
}

.issues {
  padding-top: 5px;
  background-color: var(--rt-c-bg);
  overflow: hidden;
  max-height: 0;
  /* transition: all 0.5s cubic-bezier(0, 1, 0, 1); */
  transition: max-height 0.6s ease-in-out, opacity 0.4s ease-in-out;

  section {
    opacity: 0;
    display: none;
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
    &.open {
      opacity: 1;
      display: block;
      transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
    }
  }

  /* .issue-wrapper { */
    .issue {
      font-size: 0.8rem;
      letter-spacing: -0.3px;
      color: var(--rt-c-text-2);
      line-height: 0.8rem;
      display: block;
      border-style: dashed;
      border-width: 1px;
      padding: 3px 4px;
      border-color: var(--rt-c-border);
      margin-top: 5px;;

      :deep(a) {
        color: var(--rt-c-brand-1);
        font-weight: 500;
        text-decoration: none;
      }

      :deep(p) {
        margin: 1px 0 0 0;
        .left & {
          text-align: right;
        }
      }
      .desc & :deep(p) {
        margin-top: 8px;
      }
    /* } */
  }
}
</style>
