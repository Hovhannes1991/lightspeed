<script setup lang="ts">
import CartItem from "@/components/CartItem.vue";
import {useCartStore} from "@/stores/cart.ts";
import {storeToRefs} from "pinia";

const card_store = useCartStore();
const {items: cart_items} = storeToRefs(card_store);
</script>

<template>
  <div class="cart">
    <div v-if="!cart_items.length" class="empty-cart">
      <h1>Cart is empty</h1>
      <RouterLink :to="{name: 'home'}">Go to Home Page</RouterLink>
    </div>
    <div class="cart-items">
      <CartItem v-for="cart_item in cart_items" :cart-item="cart_item" :key="cart_item.id"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  position: relative;
  background-color: white;
  min-height: 100vh;
  height: 100%;
  padding: 10px 20px;

  .empty-cart {
    a {
      color: #0b825a;
    }
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>