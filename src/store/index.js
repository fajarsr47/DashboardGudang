import { defineStore } from "pinia";
import { ref } from "vue";

export const gudang = defineStore("barang",()=>{
    const products = ref([])
    const loading= ref(false)
    const error= ref(null)

    async function fetchProducts() {
        loading.value = true
        error.value = null
        
        try{
            const response = await fetch('https://dummyjson.com/products')
            if(!response.ok){
                throw new Error("Gagal ambil data")
            }

            const data = await response.json()

            products.value = data.products
        } catch(err){
            error.value = err.message
            console.error("Error fetching product:", err)
        } finally{
            loading.value = false
        }
    }

    return{
        products,
        loading,
        error,
        fetchProducts
    }
});