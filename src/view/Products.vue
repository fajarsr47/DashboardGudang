<script setup>
import { onMounted } from "vue";
import { gudang } from "../store";
import { useRoute, useRouter } from "vue-router";

const store = gudang();
const router = useRouter()

onMounted(() => {
  store.fetchProducts();
});

const formatUang = (angka) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(angka);
}

function goToDetail(id) {
  router.push(`/product/${id}`);
  // searchQuery.value = "";
}
</script>

<template>
  <div class="w-full h-full flex flex-col bg-white rounded-xl shadow-sm overflow-hidden">
    
    <div v-if="store.loading" class="flex-1 flex justify-center items-center">
       <div class="flex flex-col items-center gap-2">
          <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p class="text-gray-500 font-medium animate-pulse">Mengambil data gudang...</p>
       </div>
    </div>

    <div v-else-if="store.error" class="p-5">
      <div class="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">
        {{ store.error }}
      </div>
    </div>

    <div v-else class="flex-1 overflow-y-auto relative">
      <table class="w-full text-left border-collapse">
        
        <thead class="bg-gray-50 sticky top-0 z-10 shadow-sm">
          <tr>
            <th class="p-4 font-semibold text-gray-600 text-sm w-75">Produk</th>
            <th class="p-4 font-semibold text-gray-600 text-sm">Kategori</th>
            <th class="p-4 font-semibold text-gray-600 text-sm">Harga</th>
            <th class="p-4 font-semibold text-gray-600 text-sm text-center">Rating</th>
            <th class="p-4 font-semibold text-gray-600 text-sm text-right">Aksi</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-100">
          <tr v-for="product in store.products" :key="product.id" class="hover:bg-blue-50 transition duration-150">
            
            <td class="p-4">
              <div class="flex items-center gap-3">
                <img :src="product.thumbnail" class="w-12 h-12 rounded-lg object-cover bg-gray-200 border border-gray-200" alt="">
                <div>
                  <h3 class="font-bold text-gray-800 text-sm line-clamp-1">{{ product.title }}</h3>
                  <p class="text-xs text-gray-400">SKU: {{ product.id }}</p>
                </div>
              </div>
            </td>

            <td class="p-4">
               <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200 capitalize">
                 {{ product.category }}
               </span>
            </td>

            <td class="p-4 font-medium text-gray-700">
              {{ formatUang(product.price) }}
            </td>

            <td class="p-4 text-center">
              <div class="inline-flex items-center gap-1 text-orange-400 font-bold text-sm">
                <span>★</span> {{ product.rating }}
              </div>
            </td>

            <td class="p-4 text-right">
              <button @click="goToDetail(product.id)" class="text-gray-400 hover:text-gray-100 hover:bg-blue-400 rounded-xl p-1 cursor-pointer px-10 border border-blue-300">
                Detail
              </button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<style scoped></style>
