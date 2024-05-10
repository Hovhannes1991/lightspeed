<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Message from "primevue/message";
import Button from "primevue/button";

import {useRouter} from "vue-router";
import type {IProduct} from '@/types/types.ts';
import {useCartStore} from "@/stores/cart.ts";

const cart_store = useCartStore()

const router = useRouter();

interface IProps {
  products: IProduct[];
  loading: boolean;
  error: null | string;
}

const props = defineProps<IProps>();


const openProductPage = (e: { data: IProduct }) => {
  router.push({name: "product", params: {id: e.data.id}});
}
</script>

<template>
  <Message v-if="props.error" severity="error">{{ props.error }}</Message>
  <div v-else class="products-list">
    <DataTable :value="props.products"
               selectionMode="single"
               dataKey="id"
               @rowSelect="openProductPage"
               tableStyle="min-width: 50rem; min-height: 80vh"
               :loading="props.loading" scrollable
               scrollHeight="80vh">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-4xl text-900 font-bold">Products</span>
        </div>
      </template>
      <Column field="name" header="Name"></Column>
      <Column header="Image">
        <template #body="slotProps">
          <img :src="slotProps.data.imageUrl" :alt="slotProps.data.imageUrl" class="w-6rem border-round"/>
        </template>
      </Column>
      <Column field="price" header="Price">
      </Column>
      <Column header="Add to Cart">
        <template #body="slotProps">
          <Button @click="cart_store.addToCart(slotProps.data)" label="Add to Cart"/>
        </template>
      </Column>
    </DataTable>
  </div>
</template>


<style lang="scss">
.products-list {
  padding: 10px 20px;
}

td {
  cursor: pointer;
}
</style>