<script setup lang="ts">
import TheCart from "@/ui/CartButton.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const goToCartPage = () => {
  router.push({name: "cart"});
}
</script>

<template>
  <header>
    <NavigationMenu/>
    <TheCart @click="goToCartPage"/>
  </header>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-right: 20px;
  background-color: black;
}
</style>