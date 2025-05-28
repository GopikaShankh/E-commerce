<template>
  <NavBar />
  <section class="container">
    <h1 class="heading">Home Appliances</h1>
    <p class="subheading">Upgrade your home with the latest appliances ⚙️</p>

    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card animate-fade"
      >
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-rating">⭐ {{ product.rating }} / 5</p>
        <p class="product-price">₹{{ product.price }}</p>
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "../NavBar.vue";
import { useCartStore } from '@/store/cartStore';

export default {
  name: "AppliancesItem",
  components: {
    NavBar,
  },
  data() {
    return {
      products: [
        { title: "Microwave Oven", price: 6999, rating: 4.5, image: require('@/assets/subItems/Appliances/microwave.jpg') },
        { title: "Refrigerator", price: 19999, rating: 4.7, image: require('@/assets/subItems/Appliances/fridge.jpg') },
        { title: "Washing Machine", price: 15999, rating: 4.6, image: require('@/assets/subItems/Appliances/washing-machine.jpg') },
        { title: "Air Conditioner", price: 28999, rating: 4.8, image: require('@/assets/subItems/Appliances/ac.jpg') },
        { title: "Electric Kettle", price: 1199, rating: 4.3, image: require('@/assets/subItems/Appliances/kettle.jpg') },
        { title: "Hand Blender", price: 999, rating: 4.2, image: require('@/assets/subItems/Appliances/blender.jpg') },
        { title: "Coffee Maker", price: 3499, rating: 4.4, image: require('@/assets/subItems/Appliances/coffee-maker.jpg') },
        { title: "Induction Cooktop", price: 2499, rating: 4.5, image: require('@/assets/subItems/Appliances/induction.jpg') },
        { title: "Room Heater", price: 1899, rating: 4.1, image: require('@/assets/subItems/Appliances/heater.jpg') },
        { title: "Vacuum Cleaner", price: 4999, rating: 4.6, image: require('@/assets/subItems/Appliances/vacuum.jpg') }
      ]
    };
  },
  methods: {
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },
    buyNow(product) {
      const gstRate = 0.18; 
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
}

.heading {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 0.5rem;
  animation: fadeInDown 1s ease;
}

.subheading {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
  animation: fadeInDown 1.2s ease;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.product-card {
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  display: flex;
  flex-direction: column;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  transition: transform 0.4s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #2e3b55;
}

.product-rating {
  font-size: 0.95rem;
  color: #ff9800;
  margin-bottom: 0.4rem;
}

.product-price {
  font-size: 1rem;
  color: #e91e63;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
