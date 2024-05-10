<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner';

</script>

<template>
  <div class="loader">
    <ProgressSpinner/>
  </div>
</template>

<style scoped lang="scss">
.loader {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}
</style>