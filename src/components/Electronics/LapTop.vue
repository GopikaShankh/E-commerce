<template>
  <!-- Navigation bar component -->
  <NavBar />

  <!-- Main section container -->
  <section class="container">
    <!-- Heading for the page -->
    <h1 class="heading">Laptops & Tablets 💻</h1>
    <!-- Subheading describing the section -->
    <p class="subheading">Browse top-rated laptops and tablets for all your needs!</p>

    <!-- Grid container to display the list of products -->
    <div class="products-grid">
      <!-- Loop through the products array and render each product -->
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
        <!-- Buttons to add the product to cart or buy immediately -->
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
// Importing cart store for managing cart state
import { useCartStore } from '@/store/cartStore';

export default {
  name: "LaptopTablet", // Component name
  components: {
    NavBar, // Registering NavBar component
  },
  data() {
    return {
      // List of laptop and tablet products with details
      products: [
        { title: "MacBook Air M2", price: 114999, rating: 4.9, image: require('@/assets/subItems/Laptops/macbook-air-m2.jpg') },
        { title: "Dell XPS 13", price: 99999, rating: 4.7, image: require('@/assets/subItems/Laptops/dell-xps-13.jpg') },
        { title: "HP Spectre x360", price: 87999, rating: 4.6, image: require('@/assets/subItems/Laptops/hp-spectre.jpg') },
        { title: "Lenovo IdeaPad Slim 5", price: 58999, rating: 4.4, image: require('@/assets/subItems/Laptops/ideapad-slim5.jpg') },
        { title: "Asus ROG Strix G15", price: 93999, rating: 4.5, image: require('@/assets/subItems/Laptops/asus-rog.jpg') },
        { title: "Acer Aspire 5", price: 47999, rating: 4.2, image: require('@/assets/subItems/Laptops/acer-aspire5.jpg') },
        { title: "Samsung Galaxy Tab S9", price: 71999, rating: 4.6, image: require('@/assets/subItems/Laptops/galaxy-tab-s9.jpg') },
        { title: "Apple iPad Air 5", price: 59999, rating: 4.7, image: require('@/assets/subItems/Laptops/ipad-air.jpg') },
        { title: "Lenovo Tab P11 Pro", price: 34999, rating: 4.3, image: require('@/assets/subItems/Laptops/lenovo-tab-p11.jpg') },
        { title: "Realme Pad X", price: 19999, rating: 4.1, image: require('@/assets/subItems/Laptops/realme-pad-x.jpg') }
      ]
    };
  },
  methods: {
    // Method to add a selected product to the shopping cart
    addToCart(product) {
      const cartStore = useCartStore(); // Access cart store instance
      cartStore.addToCart(product); // Call addToCart action to update cart state
      alert(`${product.title} added to cart!`); // Show confirmation alert
    },

    // Method to proceed directly to buying the product
    buyNow(product) {
      const gstRate = 0.18;  // GST rate (18%)
      const gstAmount = product.price * gstRate; // Calculate GST amount
      const priceWithGst = product.price + gstAmount; // Calculate total price including GST

      // Create a new product object with GST details added
      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2), // GST amount formatted to 2 decimal places
        priceWithGst: priceWithGst.toFixed(2), // Total price formatted to 2 decimal places
      };

      // Navigate to the OrderPage with product details passed as a query parameter
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) } // Pass product info as string
      });
    }
  }
};
</script>

<style scoped>
/* Container styling */
.container {
  padding: 2rem;
  width: 100%;
}

/* Main heading styling */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

/* Subheading styling */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Grid layout for products */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
  gap: 1.5rem; /* Space between product cards */
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

/* Hover effect for product card */
.product-card:hover {
  transform: translateY(-5px);
}

/* Product image styling */
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover; /* Crop image nicely */
  border-radius: 10px;
  margin-bottom: 1rem;
}

/* Product title styling */
.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Product rating styling */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12; /* Gold color for stars */
  margin-bottom: 0.4rem;
}

/* Product price styling */
.product-price {
  font-size: 1rem;
  color: #e91e63; /* Pinkish color */
  margin-bottom: 1rem;
}
</style>
