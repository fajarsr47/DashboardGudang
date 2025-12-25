import {createRouter, createMemoryHistory, createWebHistory} from 'vue-router'
import About from "../view/About.vue";
import Dashboard from "../view/Dashboard.vue";
import Side from '../components/Side.vue';
import Header from '../components/Header.vue';
import Products from '../view/Products.vue';

const routes = [
    {
        path: '/',
        components:{
            side: Side,
            top: Header,
            default: Dashboard,
        }
    },
    {
        path: '/about',
        components:{
            side: Side,
            top: Header,
            default: About,
        }
    },
    {
        path: '/products',
        components:{
            side: Side,
            top: Header,
            default: Products
        }
    }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})