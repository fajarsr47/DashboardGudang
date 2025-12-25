<script setup>
  defineProps({
    title: {
      type: String,
      default: 'Judul Card',
    },
    value: {
      type: [String,Number],
      default: '470.000.000',
    },
    icon: {
      type: String,
      default: 'https://img.icons8.com/?size=100&id=lUsHI7uugM9N&format=png&color=000000',
    }
  })
</script>

<template>
  <div class="w-full h-full flex flex-row gap-2 items-center px-3">
    <img :src="icon" alt="icon" class="size-16">
    <div class="w-full h-fit flex flex-col gap-0.5">
      <h3 class="text-3xl font-semibold">{{ value }}</h3>
      <h2 class="font-bold text-lg text-gray-700">{{ title }}</h2>
    </div>
  </div>
</template>

<style scoped></style>
