<template>
  <!-- Navigation Bar Component -->
  <NavBar />

  <!-- Main Section Container -->
  <section class="container">
    <!-- Page Title -->
    <h1 class="heading">Headphones & Earbuds 🎧</h1>
    <!-- Subtitle/Description -->
    <p class="subheading">Experience high-quality sound with the latest audio gear!</p>

    <!-- Product Grid Display -->
    <div class="products-grid">
      <!-- Loop through each product and display it -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <!-- Product Image -->
        <img :src="product.image" :alt="product.title" class="product-image" />
        <!-- Product Title -->
        <h3 class="product-title">{{ product.title }}</h3>
        <!-- Product Rating -->
        <p class="product-rating">⭐ {{ product.rating }} / 5</p>
        <!-- Product Price -->
        <p class="product-price">₹{{ product.price }}</p>

        <!-- Action Buttons -->
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import the NavBar component and the cart store
import NavBar from '../NavBar.vue';
import { useCartStore } from '@/store/cartStore';

export default {
  name: "HeadphonesEarbuds",
  components: {
    NavBar,
  },
  data() {
    return {
      // Array of product data (title, price, rating, image)
      products: [
        { title: "Sony WH-1000XM5", price: 29990, rating: 4.8, image: require('@/assets/subItems/HeadphonesEarbuds/sony-wh1000xm5.jpg') },
        { title: "Apple AirPods Pro (2nd Gen)", price: 24990, rating: 4.7, image: require('@/assets/subItems/HeadphonesEarbuds/airpods-pro2.jpg') },
        { title: "Samsung Galaxy Buds2 Pro", price: 17999, rating: 4.6, image: require('@/assets/subItems/HeadphonesEarbuds/galaxy-buds2pro.jpg') },
        { title: "boAt Nirvana 751 ANC", price: 3999, rating: 4.3, image: require('@/assets/subItems/HeadphonesEarbuds/boat-nirvana751.jpg') },
        { title: "JBL Tune 770NC", price: 6999, rating: 4.4, image: require('@/assets/subItems/HeadphonesEarbuds/jbl-tune770nc.jpg') },
        { title: "Realme Buds Air 5 Pro", price: 4999, rating: 4.2, image: require('@/assets/subItems/HeadphonesEarbuds/realme-buds-air5pro.jpg') },
        { title: "OnePlus Buds Pro 2", price: 11999, rating: 4.5, image: require('@/assets/subItems/HeadphonesEarbuds/oneplus-buds-pro2.jpg') },
        { title: "Noise Cancelling Headphones 700", price: 29990, rating: 4.6, image: require('@/assets/subItems/HeadphonesEarbuds/bose-700.jpg') },
        { title: "Sennheiser Momentum 4", price: 34990, rating: 4.7, image: require('@/assets/subItems/HeadphonesEarbuds/sennheiser-momentum4.jpg') },
        { title: "Nothing Ear (2)", price: 9999, rating: 4.3, image: require('@/assets/subItems/HeadphonesEarbuds/nothing-ear2.jpg') }
      ]
    };
  },
  methods: {
    // Method to add selected product to cart
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },

    // Method to handle "Buy Now" functionality
    buyNow(product) {
      const gstRate = 0.18; // GST is 18%
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      // Create a product object including GST details
      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Redirect to OrderPage and pass product details via query string
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
/* Container Styling */
.container {
  padding: 2rem;
  width: 100%;
}

/* Heading Styles */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

/* Subheading Style */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Grid Layout for Products */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Product Card Styles */
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

/* Hover Effect on Card */
.product-card:hover {
  transform: translateY(-5px);
}

/* Product Image Styling */
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

/* Product Title */
.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Product Rating */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

/* Product Price */
.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
