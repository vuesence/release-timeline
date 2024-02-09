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
    mobileTitle: "Desc",
    show: props.options.display.release.desc,
  },
  {
    name: "pulls",
    title: "Pull Requests",
    mobileTitle: "Pulls",
    show: props.options.display.release.pulls,
  },
  {
    name: "commits",
    title: "Commits",
    mobileTitle: "Commits",
    show: props.options.display.release.commits,
  },
];

if (props.options.display.release.defaultOpenTab) {
  toggle(props.options.display.release.defaultOpenTab);
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
        <span class="mobile-only tab-title">
          {{ tab.mobileTitle }}
        </span>
        <span class="not-mobile-only tab-title">
          {{ tab.title }}
        </span>
      </span>
    </button>
  </div>
  <div
    ref="issuesSection"
    class="issues"
    :class="curTab"
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
              #{{ pull.number }}:
            </span>
            <span v-html="pull.title" />
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
          <p>
            <span v-html="commit.title" />
            <span v-if="!options.display.release.hideCommitUsername"> - @{{ commit.author }}</span>
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "./css/timeline-item-issues.scss";
</style>
