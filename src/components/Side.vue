<script setup>
import { ref } from "vue";

const menus = ref([
  {
    name: "Dashboard",
    path: "/",
    icon: "https://files.svgcdn.io/material-symbols-light/dashboard-outline.svg",
  },
  {
    name: "Products",
    path: "/products",
    icon: "https://files.svgcdn.io/material-symbols-light/inventory-2-outline.svg",
  },
  // {
  //     name: 'Transaksi',
  //     path: '/transactions',
  //     icon: 'https://files.svgcdn.io/material-symbols-light/receipt-long-outline.svg'
  // },
  {
    name: "About",
    path: "/About",
    icon: "https://files.svgcdn.io/material-symbols-light/bar-chart.svg",
  },
]);
</script>

<template>
  <div
    class="min-h-full w-60 bg-[#ffffff] rounded-xl mr-3 p-2 flex flex-col justify-between"
  >
    <div class="h-fit w-full flex flex-col">
      <div class="h-fit w-full flex flex-row items-end gap-2.5">
        <img src="../assets/logo/logo.svg" alt="GS" class="size-15" />
        <h2 class="text-2xl font-josefin font-bold text-[#133555] pb-2">
          Gudang
        </h2>
      </div>
      <div class="h-0.5 w-full bg-[#ebebeb] rounded-full mb-3"></div>
      <div class="h-fit w-full flex flex-col gap-1.5">
        <RouterLink
          v-for="item in menus"
          :key="item.name"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium text-sm"
          active-class="bg-yellow-500 text-white shadow-lg shadow-blue-500/30"
          :class="
            $route.path === item.path
              ? ''
              : 'text-gray-500 hover:bg-blue-50 hover:text-yellow-600'
          "
        >
          <img
            :src="item.icon"
            class="w-5 h-5 transition-all duration-200"
            :class="
              $route.path === item.path
                ? 'brightness-0 invert'
                : 'opacity-50 group-hover:opacity-100'
            "
            alt="icon"
          />
          <span>{{ item.name }}</span>
        </RouterLink>
      </div>
    </div>
    <div class="h-fit w-full flex flex-row">
      <!-- <div class="h-fit w-full flex flex-row items-end rounded-xl gap-3">
        <div class="w-10 h-10 rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md cursor-pointer">
          AD
        </div>
        <h2 class="text-2xl font-josefin font-bold text-[#133555]">Admin</h2>
      </div> -->
      <div class="border-t border-gray-100 pt-6 flex w-full">
        <button
          class="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-red-50 text-gray-500 hover:text-red-600 transition-all duration-200 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 opacity-50 group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span class="font-medium text-sm">Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
