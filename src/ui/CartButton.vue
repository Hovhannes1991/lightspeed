<script setup lang="ts">
import Button from 'primevue/button';
import {useCartStore} from "@/stores/cart.ts";

const cart_store = useCartStore();

</script>

<template>
  <Button :label="String(cart_store.items.length)" icon="pi pi-shopping-cart" iconPos="left" class="cart-button"/>
</template>

<style lang="scss">
</style>