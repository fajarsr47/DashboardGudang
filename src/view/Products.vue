<script setup>
import { onMounted } from "vue";
import { gudang } from "../store";

const store = gudang();

onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <div class="w-full h-full">
    <div v-if="store.loading" class="flex justify-center items-center h-64">
      <p class="text-xl font-bold text-gray-500 animate-pulse">
        Sedang Memuat Data Barang...
      </p>
    </div>
    <div
      v-else-if="store.error"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    >
      <strong class="font-bold">Terjadi Kesalahan!</strong>
      <span class="block sm:inline"> {{ store.error }}</span>
    </div>
    <div v-else class="w-full h-full overflow-y-scroll">
      <div v-for="product in store.products" :key="product.id" class="">
        <img :src="product.thumbnail" :alt="product.title" />
        <div class="">
          <h3>{{ product.title }}</h3>
          <p>{{ product.category }}</p>
          <p>{{ product.price }}</p>
          <p>{{ product.rating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
