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
