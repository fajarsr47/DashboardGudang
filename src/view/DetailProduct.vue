<script setup>
import { useRoute, useRouter } from 'vue-router';
import { gudang } from '../store';
import { computed } from 'vue';

  const route = useRoute()
  const router = useRouter()
  const store = gudang();
  const product = route.params.id

  const detail = computed(() => {
  return store.products.find(item => item.id == product);
});

const goBack = () => router.back();
</script>

<template>
  <div class="w-full h-full overflow-y-auto p-6 bg-[#f7f8fa]">
    
    <button 
      @click="goBack" 
      class="mb-6 flex items-center text-gray-500 hover:text-gray-900 transition-colors font-medium"
    >
      <span class="mr-2 text-xl">←</span> Kembali ke Gudang
    </button>

    <div v-if="store.loading || !detail" class="flex flex-col items-center justify-center h-96 text-gray-400">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
      <p>Sedang mengambil data produk...</p>
    </div>

    <div v-else class="bg-white rounded-3xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up">
      
      <div class="space-y-4">
        <div class="aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100 relative group">
          <img 
            :src="detail.thumbnail" 
            :alt="detail.title" 
            class="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
          >
          <div class="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
             ⭐ {{ detail.rating }}
          </div>
        </div>
        
        <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <img 
                v-for="(img, index) in detail.images" 
                :key="index" 
                :src="img" 
                class="w-20 h-20 object-cover rounded-xl border-2 border-transparent hover:border-gray-900 cursor-pointer transition-all bg-gray-50"
            >
        </div>
      </div>

      <div class="flex flex-col justify-center">
        
        <div>
          <span class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
            {{ detail.category }}
          </span>
          <h1 class="text-4xl font-black text-gray-900 mt-4 leading-tight">{{ detail.title }}</h1>
        </div>

        <p class="text-gray-500 leading-relaxed text-lg mt-6">
          {{ detail.description }}
        </p>

        <div class="mt-auto pt-8 border-t border-gray-100">
          <div class="flex items-end gap-3 mb-8">
            <span class="text-4xl font-black text-gray-900">${{ detail.price }}</span>
            <span class="text-gray-400 line-through text-lg mb-1">${{ (detail.price * 1.25).toFixed(2) }}</span>
            <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mb-2">Diskon Spesial</span>
          </div>

          <div class="flex gap-4">
            <button class="flex-1 bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform active:scale-95 shadow-xl shadow-gray-200">
              Beli Sekarang
            </button>
            <button class="px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all">
              ❤️
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
  /* Sedikit animasi agar munculnya halus */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
}
/* Menyembunyikan scrollbar di galeri kecil tapi tetap bisa discroll */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
