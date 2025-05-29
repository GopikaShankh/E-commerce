<template>
  <!-- Navigation Bar Component -->
  <NavBar />

  <!-- Main Container Section -->
  <section class="container">
    <h1 class="heading">Perfume Collection</h1>
    <p class="subheading">Find your signature scent with our finest fragrances 💐</p>

    <!-- Grid layout for displaying perfume products -->
    <div class="products-grid">
      <!-- Loop through each product and render a card -->
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
// Importing NavBar component
import NavBar from '../NavBar.vue';

// Importing the cart store to manage cart state
import { useCartStore } from '@/store/cartStore';

export default {
  name: "PerfumesItems",
  components: {
    NavBar, // Registering NavBar component
  },
  data() {
    return {
      // Array of perfume product objects
      products: [
        { title: "Dior Sauvage", price: 6999, rating: 4.8, image: require('@/assets/subItems/Perfumes/dior.jpg') },
        { title: "Chanel No. 5", price: 8499, rating: 4.7, image: require('@/assets/subItems/Perfumes/chanel.jpg') },
        { title: "Gucci Bloom", price: 5599, rating: 4.5, image: require('@/assets/subItems/Perfumes/gucci.jpg') },
        { title: "Versace Eros", price: 6399, rating: 4.6, image: require('@/assets/subItems/Perfumes/versace.jpg') },
        { title: "Calvin Klein Eternity", price: 4999, rating: 4.4, image: require('@/assets/subItems/Perfumes/ck.jpg') },
        { title: "Davidoff Cool Water", price: 3199, rating: 4.3, image: require('@/assets/subItems/Perfumes/davidoff.jpg') },
        { title: "Burberry London", price: 5799, rating: 4.5, image: require('@/assets/subItems/Perfumes/burberry.jpg') },
        { title: "Armani Code", price: 7299, rating: 4.6, image: require('@/assets/subItems/Perfumes/armani.jpg') },
        { title: "Nautica Voyage", price: 2999, rating: 4.2, image: require('@/assets/subItems/Perfumes/nautica.jpg') },
        { title: "Skinn by Titan", price: 1899, rating: 4.1, image: require('@/assets/subItems/Perfumes/skinn.jpg') }
      ]
    };
  },
  methods: {
    // Method to add product to cart using the store
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },

    // Method to handle buy now action and navigate to order page with GST calculation
    buyNow(product) {
      const gstRate = 0.18; // 18% GST
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      // New product object including GST details
      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Navigate to the order page with product details in query
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
/* Main container styling */
.container {
  padding: 2rem;
  width: 100%;
}

/* Heading style */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

/* Subheading style */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Grid layout for products */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

/* Product card styling */
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

/* Image styling */
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

/* Title styling */
.product-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Rating styling */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

/* Price styling */
.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
