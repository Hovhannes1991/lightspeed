<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import {useCartStore} from "@/stores/cart.ts";

const cart_store = useCartStore();

window.addEventListener("beforeunload", () => {
  localStorage.setItem("cart-data", JSON.stringify(cart_store.items));
})
</script>

<template>
  <TheHeader/>
  <RouterView/>
</template>

<style scoped>
</style>
