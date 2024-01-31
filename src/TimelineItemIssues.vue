<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  release: any
  options: any
}>();

const curTab = ref("");

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
  <div class="issues" :class="[{ open: curTab !== '' }, curTab]">
    <div v-if="curTab === 'desc' && release.desc">
      <div class="issue" v-html="release.desc"></div>
    </div>
    <div v-if="curTab === 'pulls'">
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
    </div>
    <div v-if="curTab === 'commits'">
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
    </div>
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
  /* width: 100%; */
  text-align: left;
  border: solid 1px var(--rt-c-border);
  border-radius: 3px;
  /* outline: none; */
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

  /* &.active {
    font-weight: 700;
  } */
}

.issues {
  padding-top: 5px;
  background-color: var(--rt-c-bg);
  max-height: 0;
  opacity: 0.3;
  overflow: hidden;
  max-height: 0;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  &.open {
    opacity: 1;
    max-height: 1000px;
    transition: max-height 1s ease-in-out, opacity 0.4s ease-in-out;
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
