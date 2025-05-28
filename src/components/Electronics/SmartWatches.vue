<template>
  <NavBar />
  <section class="container">
    <h1 class="heading">Smart Watches ⌚</h1>
    <p class="subheading">Track time, health, and style with the latest smartwatches!</p>

    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
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
import NavBar from '../NavBar.vue';
import { useCartStore } from '@/store/cartStore';

export default {
  name: "SmartWatches",
  components: {
    NavBar,
  },
  data() {
    return {
      products: [
        { title: "Apple Watch Series 9", price: 42999, rating: 4.8, image: require('@/assets/subItems/SmartWatches/apple-watch9.jpg') },
        { title: "Samsung Galaxy Watch 6", price: 32999, rating: 4.6, image: require('@/assets/subItems/SmartWatches/galaxy-watch6.jpg') },
        { title: "Noise ColorFit Ultra 3", price: 4999, rating: 4.3, image: require('@/assets/subItems/SmartWatches/noise-ultra3.jpg') },
        { title: "boAt Storm Call 2", price: 2299, rating: 4.2, image: require('@/assets/subItems/SmartWatches/boat-storm.jpg') },
        { title: "Fire-Boltt Visionary", price: 2999, rating: 4.4, image: require('@/assets/subItems/SmartWatches/fire-boltt.jpg') },
        { title: "Fastrack Reflex Vox", price: 4499, rating: 4.1, image: require('@/assets/subItems/SmartWatches/fastrack-vox.jpg') },
        { title: "Amazfit GTR 4", price: 16999, rating: 4.5, image: require('@/assets/subItems/SmartWatches/amazfit-gtr4.jpg') },
        { title: "Realme Watch 3 Pro", price: 4499, rating: 4.2, image: require('@/assets/subItems/SmartWatches/realme-watch3.jpg') },
        { title: "Pebble Cosmos Luxe", price: 3499, rating: 4.0, image: require('@/assets/subItems/SmartWatches/pebble-cosmos.jpg') },
        { title: "OnePlus Nord Watch", price: 4999, rating: 4.3, image: require('@/assets/subItems/SmartWatches/oneplus-nord.jpg') },
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
}

.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
