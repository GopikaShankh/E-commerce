<template>
  <!-- Navigation bar component -->
  <NavBar />

  <!-- Main section containing all hair care products -->
  <section class="container">
    <!-- Page heading -->
    <h1 class="heading">Hair Care Products</h1>
    <p class="subheading">Nourish your hair with our premium products 🌿</p>

    <!-- Grid to display all products -->
    <div class="products-grid">
      <!-- Looping through each product in the products array -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <!-- Product image -->
        <img :src="product.image" :alt="product.title" class="product-image" />

        <!-- Product details -->
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-rating">⭐ {{ product.rating }} / 5</p>
        <p class="product-price">₹{{ product.price }}</p>

        <!-- Buttons for actions -->
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importing the NavBar component
import NavBar from '../NavBar.vue'

// Importing Pinia cart store for managing cart state
import { useCartStore } from '@/store/cartStore';

export default {
  name: "HairCare", // Component name
  components: { NavBar }, // Register NavBar as a local component

  data() {
    return {
      // Array of hair care products with details
      products: [
        { title: "Hair Mask - Repair & Shine", price: 499, rating: 4.6, image: require('@/assets/subItems/HairCare/hair-mask.jpg') },
        { title: "Coconut Hair Oil", price: 199, rating: 4.5, image: require('@/assets/subItems/HairCare/coconut-oil.jpg') },
        { title: "Onion Hair Oil", price: 349, rating: 4.3, image: require('@/assets/subItems/HairCare/onion-oil.jpg') },
        { title: "Keratin Shampoo", price: 299, rating: 4.4, image: require('@/assets/subItems/HairCare/keratin-shampoo.jpg') },
        { title: "Anti-Dandruff Shampoo", price: 249, rating: 4.2, image: require('@/assets/subItems/HairCare/dandruff-shampoo.jpg') },
        { title: "Hair Conditioner", price: 279, rating: 4.1, image: require('@/assets/subItems/HairCare/conditioner.jpg') },
        { title: "Hair Serum", price: 399, rating: 4.4, image: require('@/assets/subItems/HairCare/hair-serum.jpg') },
        { title: "Argan Oil", price: 599, rating: 4.5, image: require('@/assets/subItems/HairCare/argan-oil.jpg') },
        { title: "Hair Growth Oil", price: 459, rating: 4.3, image: require('@/assets/subItems/HairCare/growth-oil.jpg') },
        { title: "Aloe Hair Gel", price: 189, rating: 4.2, image: require('@/assets/subItems/HairCare/aloe-gel.jpg') }
      ]
    }
  },

  methods: {
    // Function to add selected product to the cart
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },

    // Function to handle Buy Now action with GST calculation and redirection
    buyNow(product) {
      const gstRate = 0.18; // GST rate is 18%
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      // Creating a product object with GST details
      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Redirect to order page with product data in query string
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
}
</script>

<style scoped>
/* Container for the entire product section */
.container {
  padding: 2rem;
  width: 100%;
}

/* Main heading styling */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

/* Subheading text */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Grid layout for displaying products */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

/* Each product card */
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

/* On hover, lift the card slightly */
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

/* Product title text */
.product-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Product rating text */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

/* Product price text */
.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
