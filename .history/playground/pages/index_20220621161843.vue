<template>
  <div>
    homepage
    <div>
      <NuxtLink to="/about" @click="fathom.trackGoal('SBQRBMEV', 0)"
        >go to about</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const fathom = useFathom();
});
</script>
