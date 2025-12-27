<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { gudang } from "../store";
import DashCard from "../components/DashCard.vue";

const store = gudang();

onMounted(() => {
  store.fetchProducts();
});

const totalProduct = computed(() => store.products.length);

const totalAssets = computed(() => {
  return store.products.reduce((total, item) => {
    return total + item.price * item.stock;
  }, 0);
});

const stokKurang = computed(() => {
  return store.products.filter((item) => item.stock < 15).length;
});

const sku = computed(() => {
  return store.products.filter((item) => item.sku).length;
})

const formatUang = (angka) => {
  // return new Intl.NumberFormat("id-ID", {
  return new Intl.NumberFormat("en-US", {
    style: "currency", //pakai 'currency' bisa ada 'Rp'
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(angka);
};

// APEX CHART
const series = [
  {
    name: "Total Aset",
    data: [120, 135, 128, 145, 150, 165, 150],
  },
];

const chartOptions = {
  chart: {
    id: "vuechart-example",
    toolbar: { show: false },
  },
  colors: ["#4F46E5"],
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: ["Sen", "Sel", "Rab", "Kam", "jum", "Sab", "Min"],
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.5,
      opacitiTo: 0,
    },
  },
};

// Masih Static
const transactions = computed(() => {
  // Cek apakah produk sudah dimuat (minimal ada isinya)
  if (store.products.length === 0) {
    return []; // Kembalikan array kosong jika belum siap
  }
  return [
    {
      id: 1,
      name: store.products[4].title,
      date: "Hari ini, 10:00",
      amount: "+ 50",
      status: "Masuk",
    },
    {
      id: 2,
      name: store.products[7].title,
      date: "Hari ini, 09:30",
      amount: "- 2",
      status: "Keluar",
    },
    {
      id: 3,
      name: store.products[13].title,
      date: "Kemarin, 16:45",
      amount: "- 5",
      status: "Keluar",
    },
    {
      id: 4,
      name: store.products[21].title,
      date: "Kemarin, 14:20",
      amount: "+ 100",
      status: "Masuk",
    },
    {
      id: 5,
      name: store.products[27].title,
      date: "12 Mei, 11:00",
      amount: "- 1",
      status: "Keluar",
    },
  ];
});

// --- Data Timeline Aktivitas ---
const activities = ref([
  {
    id: 1,
    text: "Stok iPhone 9 tersisa 5 unit",
    time: "5 menit lalu",
    type: "warning",
  },
  {
    id: 2,
    text: "Admin menambahkan stok Laptop",
    time: "30 menit lalu",
    type: "info",
  },
  {
    id: 3,
    text: "Pesanan baru #ORD-998 masuk",
    time: "1 jam lalu",
    type: "success",
  },
  {
    id: 4,
    text: "Update harga Samsung Universe 9",
    time: "2 jam lalu",
    type: "edit",
  },
  { id: 5, text: "Stok Parfum habis!", time: "4 jam lalu", type: "error" },
  {
    id: 6,
    text: "Login terdeteksi dari IP baru",
    time: "5 jam lalu",
    type: "info",
  },
  { id: 7, text: "Backup database otomatis", time: "Kemarin", type: "system" },
]);

// Helper simpel untuk warna dot (titik)
const getDotColor = (type) => {
  switch (type) {
    case "warning":
      return "bg-yellow-400";
    case "success":
      return "bg-green-500";
    case "error":
      return "bg-red-500";
    default:
      return "bg-blue-400";
  }
};

// Fungsi helper untuk warna status
const getStatusClass = (status) => {
  return status === "Masuk"
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700";
};

// --- Config Donut Chart (Kategori) ---
const donutSeries = [44, 55, 13, 33]; // Mockup data: Smartphone, Laptop, Fragrance, Skincare

const donutOptions = {
  chart: {
    type: "donut",
  },
  labels: ["Smartphones", "Laptops", "Fragrances", "Skincare"],
  colors: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"], // Biru, Hijau, Kuning, Merah
  dataLabels: { enabled: false }, // Biar tidak penuh angka di dalam donat
  plotOptions: {
    pie: {
      donut: {
        size: "65%", // Ketebalan donat
        labels: {
          show: true,
          total: {
            show: true,
            label: "Total",
            color: "#374151",
          },
        },
      },
    },
  },
  legend: {
    position: "bottom",
    fontSize: "12px",
    markers: { radius: 12 },
  },
};
</script>

<template>
  <div
    class="w-full grid grid-cols-4 grid-rows-10 gap-4 font-geom overflow-hidden"
  >
    <div class="bg-white rounded-xl row-span-2 p-3">
      <DashCard
        title="Total Asset"
        :value="formatUang(totalAssets)"
        icon="https://img.icons8.com/?size=100&id=lUsHI7uugM9N&format=png&color=000000"
      />
    </div>
    <div class="bg-white p-3 rounded-xl row-span-2">
      <DashCard
        title="Total SKU"
        :value="sku"
        icon="https://img.icons8.com/?size=100&id=I8EMO0x9C323&format=png&color=000000"
      />
    </div>
    <div class="bg-white p-3 rounded-xl row-span-2">
      <DashCard
        title="Stok Menipis"
        :value="stokKurang"
        icon="https://img.icons8.com/?size=100&id=uLm3PLTDHMVu&format=png&color=000000"
      />
    </div>
    <div
      class="bg-white p-5 rounded-xl row-span-10 flex flex-col shadow-sm overflow-hidden"
    >
      <h3 class="font-bold text-gray-700 mb-5 text-lg">Aktivitas Terkini</h3>

      <div class="overflow-y-auto pr-2 flex flex-col grow h-0">
        <div
          v-for="(act, index) in activities"
          :key="act.id"
          class="flex gap-4 mb-6 relative group shrink-0"
        >
          <div
            v-if="index !== activities.length - 1"
            class="absolute left-1.25 top-2 -bottom-6 w-0.5 bg-gray-100 group-hover:bg-gray-200 transition"
          ></div>

          <div class="relative z-10 mt-1.5">
            <div
              class="w-3 h-3 rounded-full ring-4 ring-white"
              :class="getDotColor(act.type)"
            ></div>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-700 leading-snug">
              {{ act.text }}
            </p>
            <p class="text-xs text-gray-400 mt-1">{{ act.time }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 rounded-xl col-span-3 row-span-4 flex flex-col">
      <h3 class="font-bold text-lg text-gray-700">
        Tren Nilai Aset (7 Hari Terakhir)
      </h3>
      <apexchart
        width="100%"
        height="90%"
        type="area"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <div
      class="bg-white p-4 rounded-xl col-span-2 row-span-4 overflow-hidden flex flex-col"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-gray-700 text-lg">Transaksi Terbaru</h3>
        <!-- <button class="text-sm text-blue-500 font-medium hover:underline">
          Lihat Semua
        </button> -->
      </div>

      <div class="overflow-y-auto h-full pr-2">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="text-xs text-gray-400 border-b border-gray-100">
              <th class="pb-2 font-medium">Nama Barang</th>
              <th class="pb-2 font-medium">Waktu</th>
              <th class="pb-2 font-medium text-center">Jml</th>
              <th class="pb-2 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr
              v-for="tr in transactions"
              :key="tr.id"
              class="border-b border-gray-50 last:border-0 hover:bg-gray-50"
            >
              <td class="py-3 font-medium text-gray-700">{{ tr.name }}</td>
              <td class="py-3 text-gray-500 text-xs">{{ tr.date }}</td>
              <td
                class="py-3 text-center font-bold"
                :class="
                  tr.status === 'Masuk' ? 'text-green-600' : 'text-red-600'
                "
              >
                {{ tr.amount }}
              </td>
              <td class="py-3 text-right">
                <span
                  class="px-2 py-1 rounded-full text-xs font-semibold"
                  :class="getStatusClass(tr.status)"
                >
                  {{ tr.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bg-white p-4 rounded-xl row-span-4 flex flex-col">
      <h3 class="font-bold text-gray-700 mb-2 text-sm">Komposisi Kategori</h3>
      <div class="grow flex items-center justify-center">
        <apexchart
          width="100%"
          type="donut"
          :options="donutOptions"
          :series="donutSeries"
        ></apexchart>
      </div>
    </div>
    <!-- <div class="bg-white p-4 rounded-xl row-span-3 flex flex-col">
      <h3 class="font-bold text-gray-700 mb-3 text-sm">Aksi Cepat</h3>

      <div class="grid grid-cols-2 gap-3 h-full">
        <button
          class="flex flex-col items-center justify-center bg-blue-50 text-blue-600 rounded-lg p-2 hover:bg-blue-100 transition duration-200 cursor-pointer group"
        >
          <div
            class="p-2 bg-white rounded-full mb-1 group-hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <span class="text-xs font-semibold">Tambah</span>
        </button>

        <button
          class="flex flex-col items-center justify-center bg-purple-50 text-purple-600 rounded-lg p-2 hover:bg-purple-100 transition duration-200 cursor-pointer group"
        >
          <div
            class="p-2 bg-white rounded-full mb-1 group-hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
          </div>
          <span class="text-xs font-semibold">Scan</span>
        </button>
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>
