<script setup></script>

<template>
  <div class="min-h-full w-60 bg-[#ffffff] rounded-xl mr-3 p-2 flex flex-col justify-between">
    <div class="h-fit w-full flex flex-col">
      <div class="h-fit w-full flex flex-row items-end gap-2.5">
        <img src="../assets/logo/logo.svg" alt="GS" class="size-15" />
        <h2 class="text-2xl font-josefin font-bold text-[#133555] pb-2">Gudang</h2>
      </div>
      <div class="h-0.5 w-full bg-[#ebebeb] rounded-full"></div>
      <div class="h-fit w-full flex flex-col">
        <RouterLink to="/" class="mt-2.5 w-full h-fit px-3 py-1 rounded-xl hover:bg-blue-200">Dashboard</RouterLink>
        <RouterLink to="/products" class="mt-2.5 w-full h-fit px-3 py-1 rounded-xl hover:bg-blue-200">Produk</RouterLink>
        <RouterLink to="/about" class="mt-2.5 w-full h-fit px-3 py-1 rounded-xl hover:bg-blue-200">About</RouterLink>
      </div>
    </div>
    <div class="h-fit w-full flex flex-row">
      <!-- <div class="h-fit w-full flex flex-row items-end rounded-xl gap-3">
        <div class="w-10 h-10 rounded-full bg-linear-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md cursor-pointer">
          AD
        </div>
        <h2 class="text-2xl font-josefin font-bold text-[#133555]">Admin</h2>
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
