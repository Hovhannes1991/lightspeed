<script setup lang="ts">
import ProductsList from "@/components/ProductsList.vue";
import {useRoute} from "vue-router";
import {useFetch} from "@/composables/useFetch.ts";
import type {IProductsResponse} from "@/types/types.ts";

const route = useRoute()
const {id, name} = route.params as { id: string, name: string };

const {data: products, error, loading} = useFetch<IProductsResponse>("/products?categories=" + id);
</script>

<template>
  <div class="category-data">
    <h1>Items for category: {{ name }}</h1>
    <ProductsList :products="products.items || []" :error="error" :loading="loading"/>
  </div>
</template>

<style scoped lang="scss">
.category-data {
  background-color: black;
  h1 {
    margin: 0;
    padding: 16px;
    color: #03A9F4;
  }
}
</style>