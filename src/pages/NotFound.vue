<script setup lang="ts">

</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <RouterLink :to="{name: 'home'}">Go to Home Page</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ac524b;

  h1 {
    color: white;
    font-size: 50px;
    margin-bottom: 0;
  }

  h2 {
    color: white;
    font-size: 30px;
  }

  a {
    color: white;
  }
}
</style>