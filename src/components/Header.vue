<script setup>
import { computed, ref } from "vue";
import { gudang } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();
const store = gudang();
const searchQuery = ref();

const filteredProducts = computed(() => {
  if (!searchQuery.value) return [];

  return store.products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function goToDetail(id) {
  router.push(`/product/${id}`);
  searchQuery.value = "";
}
</script>

<template>
  <div
    class="w-full h-20 bg-white rounded-xl py-3 px-4 flex flex-row justify-between items-center font-geom"
  >
    <!-- <img src="https://files.svgcdn.io/material-symbols-light/search.svg" alt="src" class="h-full"> -->
    <div class="h-full w-fit flex flex-row items-center gap-3 relative">
      <img
        src="https://files.svgcdn.io/wpf/search.svg"
        alt="src"
        class="h-1/2"
      />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="cari..."
        class="border-0 outline-none h-full text-xl font-thin"
      />

      <div
        v-if="filteredProducts.length > 0"
        class="absolute top-12 left-0 w-64 bg-white shadow-lg rounded-lg border border-gray-100 z-50 max-h-60 overflow-y-auto"
      >
        <ul>
          <li
            v-for="product in filteredProducts"
            :key="product.id"
            @click="goToDetail(product.id)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 border-b border-gray-50 last:border-none"
          >
            <img
              :src="product.thumbnail"
              alt=""
              class="w-8 h-8 rounded object-cover"
            />

            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-700">{{ product.title }}</span>
              <span class="text-xs text-gray-500">${{ product.price }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-fit h-full flex flex-row items-center gap-6">
      <a href="#" class="">
        <img
          src="https://files.svgcdn.io/material-symbols-light/notifications-outline-rounded.svg"
          alt="notif"
          class="size-10"
        />
      </a>
      <a href="#" class="">
        <img
          src="https://files.svgcdn.io/material-symbols-light/mail-outline.svg"
          alt="mail"
          class="size-10"
        />
      </a>
      <div class="w-1 h-full bg-[#ebebeb] rounded-full"></div>

      <div class="w-fit h-full flex flex-row items-center gap-3">
        <div class="w-fit h-fit flex flex-row items-center gap-4">
          <div class="w-fit h-full flex flex-col justify-around items-end">
            <h2 class="font-semibold">Fajar Setiawan</h2>
            <h3 class="text-sm"><span>💚</span> Online</h3>
          </div>
          <img
            src="../assets/foto.png"
            alt="akun"
            class="size-10 rounded-full"
          />
        </div>
        <a href="#" class="">
          <img
            src="https://files.svgcdn.io/material-symbols-light/settings-outline-rounded.svg"
            alt="setting"
            class="size-10"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
