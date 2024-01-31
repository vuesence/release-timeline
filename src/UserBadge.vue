<script lang="ts" setup>

defineProps<{
  username: string
}>();
</script>

<template>
  <a :href="`https://github.com/${username}`" rel="noopener noreferrer" target="_blank" class="user">
    <span class="avatar">
      <img :src="`https://github.com/${username}.png`" alt="">
    </span>
    <span class="username">
      {{ username }}
    </span>
  </a>
</template>
<!-- 
<style>
@import "./variables.css";
</style> -->

<style scoped>
.user {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 2px 4px 2px 3px;
  /* gap: 0.25rem; */
  /* text-decoration: inherit; */
  /* border: 1px solid var(--rt-c-border); */
  font-weight: 500;
  font-size: .75rem;
  line-height: 1rem;
  /* border-radius: 9999px; */
  /* background-color: var(--rt-c-bg-alt); */
  /* vertical-align: middle; */

  .avatar {
    border-radius: 9999px;
    /* justify-content: center; */
    /* align-items: center; */
    /* flex-shrink: 0; */
    width: 1rem;
    /* height: 1rem; */
    /* display: inline-flex; */
    /* position: relative; */
    border: 1px solid var(--rt-c-border);

    img {
      border-radius: 9999px;
      width: 1rem;
    }
  }

  .username {
    padding: 0 0 2px 6px;
  }
}
</style>
