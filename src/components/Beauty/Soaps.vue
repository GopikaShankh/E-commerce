<template>
  <!-- Navigation Bar Component -->
  <NavBar />

  <!-- Main Container -->
  <section class="container">
    <h1 class="heading">Body Wash & Soaps 🛁</h1>
    <p class="subheading">Refresh your body and mind with our skin-friendly products!</p>

    <!-- Products Display Grid -->
    <div class="products-grid">
      <!-- Looping through each product -->
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

        <!-- Button Group: Add to Cart and Buy Now -->
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
import NavBar from '../NavBar.vue'; 

// Importing Pinia cart store
import { useCartStore } from '@/store/cartStore';

export default {
  name: "BodyWashAndSoap",

  // Registering components
  components: {
    NavBar,
  },

  // Local component data
  data() {
    return {
      // Array of product objects
      products: [
        { title: "Dove Body Wash", price: 299, rating: 4.5, image: require('@/assets/subItems/BodyCare/dove-wash.jpg') },
        { title: "Lux Velvet Touch Soap", price: 45, rating: 4.2, image: require('@/assets/subItems/BodyCare/lux.jpg') },
        { title: "Dettol Original Soap", price: 35, rating: 4.4, image: require('@/assets/subItems/BodyCare/dettol.jpg') },
        { title: "Nivea Men Body Wash", price: 319, rating: 4.3, image: require('@/assets/subItems/BodyCare/nivea-men.jpg') },
        { title: "Biotique Basil Soap", price: 99, rating: 4.1, image: require('@/assets/subItems/BodyCare/biotique.jpg') },
        { title: "Pears Pure & Gentle", price: 40, rating: 4.5, image: require('@/assets/subItems/BodyCare/pears.jpg') },
        { title: "Fiama Gel Bar", price: 55, rating: 4.2, image: require('@/assets/subItems/BodyCare/fiama.jpg') },
        { title: "Mamaearth Ubtan Body Wash", price: 349, rating: 4.6, image: require('@/assets/subItems/BodyCare/mamaearth.jpg') },
        { title: "Khadi Herbal Soap", price: 80, rating: 4.3, image: require('@/assets/subItems/BodyCare/khadi.jpg') },
        { title: "Palmolive Aroma Therapy", price: 275, rating: 4.4, image: require('@/assets/subItems/BodyCare/palmolive.jpg') }
      ]
    };
  },

  // Component methods
  methods: {
    // Add selected product to cart
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },

    // Navigate to order page with GST-calculated price
    buyNow(product) {
      const gstRate = 0.18; 
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      // Creating new object including GST details
      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Navigating to the OrderPage with product data in query
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
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

/* Heading styles */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #00695c;
}

/* Subheading styles */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #444;
}

/* Grid layout for product cards */
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

/* Hover effect on card */
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
