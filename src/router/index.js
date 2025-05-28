import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import ContactPage from '@/views/ContactPage.vue';
import OrderPage from '@/views/OrderPage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import CartPage from '@/views/CartPage.vue';
import MensWear from '@/components/Fashion/MensWear.vue';
import WomenWear from '@/components/Fashion/WomenWear.vue';
import EthnicWear from '@/components/Fashion/EthnicWear.vue';
import KidsWear from '@/components/Fashion/KidsWear.vue';
import FootWear from '@/components/Fashion/FootWear.vue';
import SportsWear from '@/components/Fashion/SportsWear.vue';
import HomeDecor from '@/components/Home/HomeDecor.vue';
import Furnicure from '@/components/Home/Furniture.vue';
import CookWare from '@/components/Home/CookWare.vue';
import Cleaning from '@/components/Home/Cleaning.vue';
import Appliances from '@/components/Home/Appliances.vue';
import KitchenTools from '@/components/Home/KitchenTool.vue';
import SkinCare from '@/components/Beauty/SkinCare.vue';
import HairCare from '@/components/Beauty/HairCare.vue';
import MakeUp from '@/components/Beauty/MakeUp.vue';
import Perfumes from '@/components/Beauty/Perfumes.vue';
import Soaps from '@/components/Beauty/Soaps.vue';
import NailCare from '@/components/Beauty/NailCare.vue';
import Moblie from '@/components/Electronics/Moblie.vue';
import Headphones from '@/components/Electronics/Headphones.vue';
import SmartWatches from '@/components/Electronics/SmartWatches.vue';
import Laptops from '@/components/Electronics/LapTop.vue';
import Cameras from '@/components/Electronics/Cameras';
import Computer from '@/components/Electronics/Computer.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/order/:id', name: 'Order', component: OrderPage },
  { path: '/products', name: 'Products', component: ProductsPage },
  { path: '/cart', component: CartPage },
  { path: '/mens-wear', name: 'MensWear', component: MensWear},
  { path: '/women-wear', name: 'WomenWear', component: WomenWear},
  { path: '/ethnic-wear', name: 'EthonicWear', component: EthnicWear},
  { path: '/kids-wear', name: 'KidsWear', component: KidsWear},
  { path: '/footwear', name: 'FootWear', component: FootWear},
  { path: '/sportswear', name: 'SportsWear', component: SportsWear},
  { path: '/home-decor', name: 'Home-Decor', component: HomeDecor},
  { path: '/furniture', name: 'Furnicure', component: Furnicure},
  { path: '/cookware', name: 'Cookware', component: CookWare},
  { path: '/cleaning-supplies', name: 'CleaningSupplie', component: Cleaning},
  { path: '/appliances', name: 'Appliances', component: Appliances},
  { path: '/kitchen-tools', name: 'KitchenTools', component: KitchenTools},
  { path: '/skincare', name: 'SkinCare', component: SkinCare},
  { path: '/haircare', name: 'HairCare', component: HairCare},
  { path: '/makeup', name: 'MakeUp', component: MakeUp},
  { path: '/perfume', name: 'Perfumes', component: Perfumes},
  { path: '/soaps', name: 'Soaps', component: Soaps},
  { path: '/nail-care', name: 'NailCare', component: NailCare},
  { path: '/mobiles', name: 'Mobile', component: Moblie},
  { path: '/headphones', name: 'Headphones', component: Headphones},
  { path: '/watches', name: 'SmartWatches', component: SmartWatches},
  { path: '/laptops-tablets', name: 'Laptops', component: Laptops},
  { path: '/cameras', name: 'Cameras', component: Cameras},
  { path: '/computer-accessories', name: 'Computer', component: Computer},
  { path: '/order', name: 'OrderPage', component: () => import('@/views/OrderPage.vue')}

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
