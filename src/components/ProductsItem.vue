<script setup lang="ts">
import TheLoader from "@/components/TheLoader.vue";
import Message from 'primevue/message';
import Card from "primevue/card";
import Button from "primevue/button";

import type {IProduct} from "@/types/types.ts";

import {useCartStore} from "@/stores/cart.ts";
import {useToast} from "@/composables/useToast.ts";

const cart_store = useCartStore();
const {success} = useToast();

interface IProps {
  product: IProduct;
  error: null | string;
  loading: boolean;
}

const props = defineProps<IProps>();

const addToCart = (product: IProduct) => {
  cart_store.addToCart(product);
  success("Added to Cart!");
}
</script>

<template>
  <div class="single-product">
    <Message v-if="props.error" severity="error">{{ error }}</Message>
    <TheLoader v-else-if="props.loading"/>
    <Card v-else class="product-card">
      <template #header>
        <img :src="props.product.imageUrl" :alt="props.product.name"/>
      </template>
      <template #title>{{ props.product.name }}</template>
      <template #subtitle>
        <div v-html="props.product.description"></div>
      </template>
      <template #content>
        <p class="text-3xl m-0">{{ props.product.price }} &#8381;</p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button @click="addToCart(props.product)" label="Add to Cart" class="w-full"/>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.single-product {
  background-color: black;
  min-height: 100vh;
}

.product-card {
  max-width: 50vw;
  overflow: hidden;
  margin: 0 auto;

  @media screen and (max-width: 756px) {
    max-width: 400px;
    width: 80vw;
  }

  img {
    width: 100%;
    height: auto;
  }
}
</style>