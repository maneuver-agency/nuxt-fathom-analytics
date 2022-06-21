<template>
  <div>
    homepage
    <div>
      <NuxtLink to="/about" @click="trackTest">go to about</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const trackTest = () => {
  const fathom = useFathom();
  fathom.trackGoal("SBQRBMEV", 0);
};
</script>
