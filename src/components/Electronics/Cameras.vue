<template>
  <!-- Navigation bar component -->
  <NavBar />

  <!-- Main camera section -->
  <section class="container">
    <h1 class="heading">Cameras 📸</h1>
    <p class="subheading">Capture your moments with these high-performance cameras.</p>

    <!-- Grid of camera products -->
    <div class="products-grid">
      <!-- Loop through each product and display its details -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <img :src="product.image" :alt="product.title" class="product-image" />
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
// Import the NavBar component and cart store
import NavBar from '../NavBar.vue';
import { useCartStore } from '@/store/cartStore';

export default {
  name: "CameraS",
  components: {
    NavBar,
  },
  data() {
    return {
      // Array of camera products with details
      products: [
        { title: "Canon EOS 1500D", price: 36999, rating: 4.5, image: require('@/assets/subItems/Cameras/canon-eos-1500d.jpg') },
        { title: "Nikon D5600", price: 50999, rating: 4.6, image: require('@/assets/subItems/Cameras/nikon-d5600.jpg') },
        { title: "Sony Alpha ILCE-6400", price: 84999, rating: 4.8, image: require('@/assets/subItems/Cameras/sony-alpha-6400.jpg') },
        { title: "Fujifilm X-T200", price: 59999, rating: 4.4, image: require('@/assets/subItems/Cameras/fujifilm-xt200.jpg') },
        { title: "GoPro HERO11", price: 41999, rating: 4.7, image: require('@/assets/subItems/Cameras/gopro-hero11.jpg') },
        { title: "Canon PowerShot G7 X Mark II", price: 53999, rating: 4.5, image: require('@/assets/subItems/Cameras/canon-g7x.jpg') },
        { title: "Sony ZV-E10", price: 66999, rating: 4.6, image: require('@/assets/subItems/Cameras/sony-zve10.jpg') },
        { title: "DJI Osmo Pocket 3", price: 52999, rating: 4.3, image: require('@/assets/subItems/Cameras/dji-osmo-pocket3.jpg') },
        { title: "Panasonic Lumix G7", price: 48999, rating: 4.4, image: require('@/assets/subItems/Cameras/lumix-g7.jpg') },
        { title: "Olympus OM-D E-M10", price: 45999, rating: 4.2, image: require('@/assets/subItems/Cameras/olympus-em10.jpg') }
      ]
    };
  },
  methods: {
    // Method to add product to cart using Pinia store
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },

    // Method to navigate to order page with GST-calculated price
    buyNow(product) {
      const gstRate = 0.18; // 18% GST
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Navigate to order page with product details in query string
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
/* Container padding and width */
.container {
  padding: 2rem;
  width: 100%;
}

/* Section heading styling */
.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

/* Subheading under main heading */
.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

/* Grid layout for product cards */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Styling for each product card */
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

/* Lift card slightly on hover */
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

/* Product title */
.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Product rating */
.product-rating {
  font-size: 0.95rem;
  color: #f39c12;
  margin-bottom: 0.4rem;
}

/* Product price */
.product-price {
  font-size: 1rem;
  color: #e91e63;
  margin-bottom: 1rem;
}
</style>
