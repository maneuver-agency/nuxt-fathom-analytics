<template>
  <div>
    homepage
    <div>
      <NuxtLink to="/about" @click="fathom.trackGoal('test', 0)"
        >go to about</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const fathom = useFathom();
</script>
