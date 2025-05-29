<template>
  <!-- Navigation bar component -->
  <NavBar />

  <!-- Main container for computer accessories -->
  <section class="container">
    <!-- Section title and subtitle -->
    <h1 class="heading">Computer Accessories 💻🖱️</h1>
    <p class="subheading">Enhance your computing experience with these essential accessories.</p>

    <!-- Grid layout for displaying product cards -->
    <div class="products-grid">
      <!-- Loop through products and render each one -->
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

        <!-- Buttons to add to cart or buy now -->
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importing NavBar component and the cart store
import NavBar from '../NavBar.vue';
import { useCartStore } from '@/store/cartStore';

export default {
  name: "ComputerAccessories",

  // Registering components
  components: {
    NavBar,
  },

  // Component data: list of computer accessories
  data() {
    return {
      products: [
        { title: "Logitech MX Master 3 Mouse", price: 8999, rating: 4.8, image: require('@/assets/subItems/ComputerAccessories/mx-master-3.jpg') },
        { title: "Dell KM3322 Wireless Keyboard & Mouse", price: 2999, rating: 4.4, image: require('@/assets/subItems/ComputerAccessories/dell-km3322.jpg') },
        { title: "HP H2800 Wired Headset", price: 1499, rating: 4.2, image: require('@/assets/subItems/ComputerAccessories/hp-h2800.jpg') },
        { title: "Seagate 1TB External HDD", price: 3899, rating: 4.6, image: require('@/assets/subItems/ComputerAccessories/seagate-hdd.jpg') },
        { title: "Zebronics Zeb-Transformer Gaming Keyboard", price: 1299, rating: 4.5, image: require('@/assets/subItems/ComputerAccessories/zebronics-keyboard.jpg') },
        { title: "TP-Link AC750 Wi-Fi Range Extender", price: 2299, rating: 4.3, image: require('@/assets/subItems/ComputerAccessories/tplink-extender.jpg') },
        { title: "Portronics Toad 23 Wireless Mouse", price: 499, rating: 4.0, image: require('@/assets/subItems/ComputerAccessories/portronics-mouse.jpg') },
        { title: "Logitech Z313 Speaker System", price: 3499, rating: 4.4, image: require('@/assets/subItems/ComputerAccessories/logitech-z313.jpg') },
        { title: "WD Elements 2TB Portable HDD", price: 5699, rating: 4.6, image: require('@/assets/subItems/ComputerAccessories/wd-elements-2tb.jpg') },
        { title: "Cosmic Byte GS410 Gaming Headset", price: 1799, rating: 4.3, image: require('@/assets/subItems/ComputerAccessories/cosmic-byte-gs410.jpg') },
      ]
    };
  },

  methods: {
    // Add product to the cart using Pinia store
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },

    // Buy Now function: add GST and navigate to order page with product info
    buyNow(product) {
      const gstRate = 0.18; 
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Navigate to the OrderPage with product details passed as query
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

/* Heading and subheading */
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

/* Grid for products */
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

.product-card:hover {
  transform: translateY(-5px);
}

/* Product image styles */
.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

/* Product text styles */
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
