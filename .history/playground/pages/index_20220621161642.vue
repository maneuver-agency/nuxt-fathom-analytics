<template>
  <div>
    homepage
    <div>
      <NuxtLink to="/about" @click="fathom?.trackGoal('SBQRBMEV', 0)"
        >go to about</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
// const fathom = useFathom();
onMounted(() => {
  console.log(window.fathom);

  // console.log(fathom);
});
</script>
