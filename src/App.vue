<script setup></script>

<template>
  <RouterView name="side"></RouterView>
  <div class="min-h-full w-full flex flex-col gap-3">
    <RouterView name="top"/>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
