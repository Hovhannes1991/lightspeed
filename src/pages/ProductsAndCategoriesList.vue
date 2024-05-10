<script setup lang="ts">
import {defineAsyncComponent} from 'vue'

import TheLoader from "@/components/TheLoader.vue";

const ProductsList = defineAsyncComponent(() =>
    import("@/components/ProductsList.vue")
)
const CategoriesList = defineAsyncComponent(() =>
    import("@/components/CategoriesList.vue")
)

import type {ICategoriesResponse, IProductsResponse} from "@/types/types.ts";
import {useFetch} from "@/composables/useFetch.ts";

const {
  data: categories,
  error: categories_error,
  loading: categories_loading
} = useFetch<ICategoriesResponse>("/categories");
const {data: products, error: products_error, loading: products_loading} = useFetch<IProductsResponse>("/products");
</script>

<template>
  <TheLoader v-if="categories_loading || products_loading"/>
  <template v-else>
    <CategoriesList :categories="categories.items" :error="categories_error" :loading="categories_loading"/>
    <ProductsList :products="products.items" :error="products_error" :loading="products_loading"/>
  </template>
</template>

<style scoped>

</style>