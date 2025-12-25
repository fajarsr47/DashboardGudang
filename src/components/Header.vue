<script setup></script>

<template>
  <div
    class="w-full h-20 bg-white rounded-xl py-3 px-4 flex flex-row justify-between items-center font-geom"
  >
    <!-- <img src="https://files.svgcdn.io/material-symbols-light/search.svg" alt="src" class="h-full"> -->
    <div class="h-full w-fit flex flex-row items-center gap-3">
        <img src="https://files.svgcdn.io/wpf/search.svg" alt="src" class="h-1/2">
        <input type="text" placeholder="cari..." class="border-0 outline-none h-full text-xl font-thin">
    </div>
    <div class="w-fit h-full flex flex-row items-center gap-6">
      <div class="">
        <img
          src="https://files.svgcdn.io/material-symbols-light/notifications-outline-rounded.svg"
          alt="notif"
          class="size-10"
        />
      </div>
      <div class="">
        <img
          src="https://files.svgcdn.io/material-symbols-light/mail-outline.svg"
          alt="mail"
          class="size-10"
        />
      </div>
      <div class="w-1 h-full bg-[#ebebeb] rounded-full"></div>

      <div class="w-fit h-full flex flex-row items-center gap-3">
        <div class="w-fit h-fit flex flex-row items-center gap-4">
          <div class="w-fit h-full flex flex-col justify-around items-end">
            <h2 class="font-semibold">Asnawi Ahmad</h2>
            <h3 class="text-sm"><span>💚</span> Online</h3>
          </div>
          <img src="../assets/icon/profile.svg" alt="akun" class="size-10" />
        </div>
        <div class="">
          <img
            src="https://files.svgcdn.io/material-symbols-light/settings-outline-rounded.svg"
            alt="setting"
            class="size-10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
