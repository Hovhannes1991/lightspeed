<script setup lang="ts">
import ProductsItem from "@/components/ProductsItem.vue";

import {useRoute} from "vue-router";
import {useFetch} from "@/composables/useFetch.ts";
import type {IProduct} from "@/types/types.ts";

const route = useRoute();
const id = route.params.id as string;

const {data: product, error, loading} = useFetch<IProduct>("/products/" + id);
</script>

<template>
  <ProductsItem :product="product" :error="error" :loading="loading"/>
</template>

<style scoped lang="scss">

</style>