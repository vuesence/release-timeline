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
          <p class="issue-paragraph">
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
          <!-- <p>{{ commit.title }} - @{{ commit.author }}</p> -->
          <p class="issue-paragraph">
            <span v-html="commit.title" />
            <span v-if="!options.display.release.hideCommitUsername"> - @{{ commit.author }}</span>
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<style>
</style>
