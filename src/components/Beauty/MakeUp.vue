<template>
  <!-- Navigation bar at the top -->
  <NavBar />

  <!-- Main section for displaying makeup products -->
  <section class="container">
    <h1 class="heading">Makeup Products</h1>
    <p class="subheading">Shine bright with our top-rated makeup essentials ✨</p>

    <!-- Grid layout to display products -->
    <div class="products-grid">
      <!-- Loop through each product and display its details -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <!-- Product image -->
        <img :src="product.image" :alt="product.title" class="product-image" />

        <!-- Product title -->
        <h3 class="product-title">{{ product.title }}</h3>

        <!-- Product rating -->
        <p class="product-rating">⭐ {{ product.rating }} / 5</p>

        <!-- Product price -->
        <p class="product-price">₹{{ product.price }}</p>

        <!-- Action buttons -->
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
  name: "MakeUp",
  components: {
    NavBar,
  },
  data() {
    return {
      // Array of product objects with details
      products: [
        { title: "Liquid Foundation", price: 499, rating: 4.5, image: require('@/assets/subItems/Makeup/foundation.jpg') },
        { title: "Matte Lipstick", price: 299, rating: 4.6, image: require('@/assets/subItems/Makeup/lipstick.jpg') },
        { title: "Waterproof Mascara", price: 349, rating: 4.4, image: require('@/assets/subItems/Makeup/mascara.jpg') },
        { title: "Blush Palette", price: 399, rating: 4.3, image: require('@/assets/subItems/Makeup/blush.jpg') },
        { title: "Eyeliner Pen", price: 199, rating: 4.2, image: require('@/assets/subItems/Makeup/eyeliner.jpg') },
        { title: "Highlighter Stick", price: 299, rating: 4.5, image: require('@/assets/subItems/Makeup/highlighter.jpg') },
        { title: "Compact Powder", price: 259, rating: 4.1, image: require('@/assets/subItems/Makeup/compact.jpg') },
        { title: "Makeup Setting Spray", price: 349, rating: 4.3, image: require('@/assets/subItems/Makeup/spray.jpg') },
        { title: "Eyeshadow Palette", price: 499, rating: 4.6, image: require('@/assets/subItems/Makeup/eyeshadow.jpg') },
        { title: "Concealer Stick", price: 329, rating: 4.4, image: require('@/assets/subItems/Makeup/concealer.jpg') }
      ]
    };
  },
  methods: {
    // Adds a product to the cart using Pinia store
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product);
      alert(`${product.title} added to cart!`);
    },

    // Redirects to order page with GST-calculated price details
    buyNow(product) {
      const gstRate = 0.18; 
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Navigate to OrderPage with product details in query string
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
/* Container styles */
.container {
  padding: 2rem;
  width: 100%;
}

/* Heading styles */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

/* Subheading styles */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Product grid layout */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
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

/* Hover effect on product card */
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
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Product rating styling */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

/* Product price styling */
.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
