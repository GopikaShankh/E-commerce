<template>
  <!-- Navigation bar component -->
  <NavBar />
  
  <!-- Main section container -->
  <section class="container">
    <!-- Page heading -->
    <h1 class="heading">Smart Watches ⌚</h1>
    
    <!-- Subheading / description text -->
    <p class="subheading">Track time, health, and style with the latest smartwatches!</p>

    <!-- Grid container for product cards -->
    <div class="products-grid">
      <!-- Loop through products array and render each product card -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <!-- Product image -->
        <img :src="product.image" :alt="product.title" class="product-image" />
        
        <!-- Product title -->
        <h3 class="product-title">{{ product.title }}</h3>
        
        <!-- Product rating displayed with a star icon -->
        <p class="product-rating">⭐ {{ product.rating }} / 5</p>
        
        <!-- Product price in Indian Rupees -->
        <p class="product-price">₹{{ product.price }}</p>
        
        <!-- Button group: Add to Cart and Buy Now buttons -->
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../NavBar.vue';  // Import NavBar component
import { useCartStore } from '@/store/cartStore';  // Import Pinia store for cart

export default {
  name: "SmartWatches",
  components: {
    NavBar,  // Register NavBar component
  },
  data() {
    return {
      // Array of smartwatch products with title, price, rating, and image path
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
    // Method to add selected product to the cart
    addToCart(product) {
      const cartStore = useCartStore()  // Access the cart store
      cartStore.addToCart(product)      // Call addToCart action in the store
      alert(`${product.title} added to cart!`);  // Confirmation alert
    },

    // Method to handle buying product immediately
    buyNow(product) {
      const gstRate = 0.18;  // GST tax rate of 18%
      const gstAmount = product.price * gstRate;  // Calculate GST amount
      const priceWithGst = product.price + gstAmount;  // Calculate total price including GST

      // Create new product object including GST details
      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),    // GST amount rounded to 2 decimals
        priceWithGst: priceWithGst.toFixed(2),  // Price including GST rounded to 2 decimals
      };

      // Navigate to OrderPage with product details passed as query parameters (stringified)
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
/* Container padding and full width */
.container {
  padding: 2rem;
  width: 100%;
}

/* Heading style: larger font, centered, margin bottom */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

/* Subheading style: smaller font, centered, muted color */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Grid layout for product cards with responsive columns and gap */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Individual product card styling */
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

/* Hover effect on product card to lift slightly */
.product-card:hover {
  transform: translateY(-5px);
}

/* Product image styling */
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

/* Product title styling */
.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Product rating styling with star color */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

/* Product price styling with pinkish color */
.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
