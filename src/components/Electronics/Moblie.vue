<template>
  <!-- Include the navigation bar component at the top -->
  <NavBar />

  <!-- Main container for the mobile phones section -->
  <section class="container">
    <!-- Heading for the section -->
    <h1 class="heading">Mobile Phones 📱</h1>

    <!-- Subheading giving a brief description -->
    <p class="subheading">Find the latest smartphones at the best prices!</p>

    <!-- Grid container to display products -->
    <div class="products-grid">
      <!-- Loop through each product in products array and render a product card -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <!-- Product image -->
        <img :src="product.image" :alt="product.title" class="product-image" />

        <!-- Product title -->
        <h3 class="product-title">{{ product.title }}</h3>

        <!-- Product rating with a star icon -->
        <p class="product-rating">⭐ {{ product.rating }} / 5</p>

        <!-- Product price -->
        <p class="product-price">₹{{ product.price }}</p>

        <!-- Buttons for adding to cart or buying now -->
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import NavBar component to use in this component
import NavBar from '../NavBar.vue'; 

// Import the cart store composable for state management
import { useCartStore } from '@/store/cartStore';

export default {
  name: "MobilePhones", // Component name
  components: {
    NavBar, // Register NavBar component
  },
  data() {
    return {
      // Array of mobile phone products with title, price, rating, and image path
      products: [
        { title: "iPhone 14", price: 69999, rating: 4.7, image: require('@/assets/subItems/MobilePhones/iphone14.jpg') },
        { title: "Samsung Galaxy S23", price: 74999, rating: 4.6, image: require('@/assets/subItems/MobilePhones/galaxy-s23.jpg') },
        { title: "OnePlus 11", price: 56999, rating: 4.5, image: require('@/assets/subItems/MobilePhones/oneplus11.jpg') },
        { title: "Realme Narzo 60", price: 17999, rating: 4.3, image: require('@/assets/subItems/MobilePhones/realme-narzo.jpg') },
        { title: "Redmi Note 12", price: 16999, rating: 4.4, image: require('@/assets/subItems/MobilePhones/redmi-note12.jpg') },
        { title: "Vivo V27", price: 22999, rating: 4.3, image: require('@/assets/subItems/MobilePhones/vivo-v27.jpg') },
        { title: "POCO X5 Pro", price: 18999, rating: 4.4, image: require('@/assets/subItems/MobilePhones/poco-x5.jpg') },
        { title: "iQOO Z7", price: 15999, rating: 4.2, image: require('@/assets/subItems/MobilePhones/iqoo-z7.jpg') },
        { title: "Motorola Edge 40", price: 24999, rating: 4.5, image: require('@/assets/subItems/MobilePhones/moto-edge40.jpg') },
        { title: "Nothing Phone (1)", price: 27999, rating: 4.4, image: require('@/assets/subItems/MobilePhones/nothing-phone1.jpg') }
      ]
    };
  },
  methods: {
    // Method to add a product to the cart using the cart store
    addToCart(product) {
      const cartStore = useCartStore(); // Access the cart store
      cartStore.addToCart(product); // Add product to cart state
      alert(`${product.title} added to cart!`); // Notify user
    },

    // Method triggered when user clicks 'Buy Now'
    buyNow(product) {
      const gstRate = 0.18; // GST rate of 18%
      const gstAmount = product.price * gstRate; // Calculate GST amount
      const priceWithGst = product.price + gstAmount; // Calculate total price including GST

      // Create a new product object including GST details
      const productWithGst = {
        ...product, // Spread original product details
        gstAmount: gstAmount.toFixed(2), // GST amount formatted to 2 decimals
        priceWithGst: priceWithGst.toFixed(2), // Total price formatted to 2 decimals
      };

      // Navigate to OrderPage route and pass the product data as a query string
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
/* Container for padding and full width */
.container {
  padding: 2rem;
  width: 100%;
}

/* Section heading style */
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

/* Grid layout for products with responsive columns */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Individual product card styles */
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

/* Hover effect for product card */
.product-card:hover {
  transform: translateY(-5px);
}

/* Product image style */
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

/* Product rating style with gold color */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

/* Product price style with pink color */
.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
