<template>
  <NavBar />
  <div class="order-container">
    <h1>Order Page</h1>

    <div v-if="product" class="product-card">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <h2>{{ product.title }}</h2>
      <p class="price">Price: ₹{{ product.price }}</p>
      <p class="gst">GST: ₹{{ product.gstAmount }}</p>
      <p class="total">Total Price: ₹{{ product.priceWithGst }}</p>

      <button class="buy-now-btn" @click="showPopup = true">Buy Now</button>
    </div>

    <div v-else class="no-product">
      <p>No product selected.</p>
    </div>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-box">
        <h3>🎉 Order Confirmed!</h3>
        <p>Your order for <strong>{{ product.title }}</strong> has been placed successfully.</p>
        <button class="ok-btn" @click="handleOk">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: "HairCare",
  components: { NavBar },
  data() {
    return {
      product: null,
      showPopup: false,
    };
  },
  created() {
    const productQuery = this.$route.query.product;

    if (productQuery) {
      // If product is passed through route, parse and save it
      this.product = JSON.parse(productQuery);
      localStorage.setItem('selectedProduct', JSON.stringify(this.product));
    } else {
      // Otherwise, try to load from localStorage
      const savedProduct = localStorage.getItem('selectedProduct');
      if (savedProduct) {
        this.product = JSON.parse(savedProduct);
      }
    }
  },
  methods: {
    handleOk() {
      // Hide popup and clear product from localStorage
      this.showPopup = false;
      localStorage.removeItem('selectedProduct');
      this.product = null;
    }
  }
};
</script>

<style scoped>
/* General Layout */
.order-container {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: "Segoe UI", sans-serif;
  border-radius: 12px;
}

/* Headings */
h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #1e272e;
  font-size: 2.2rem;
  font-weight: bold;
  margin-top: 4rem;
}

/* Product Card */
.product-card {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  text-align: center;
  transition: transform 0.3s;
}
.product-card:hover {
  transform: scale(1.01);
}

.product-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 auto 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* Product Info */
h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}
.price,
.gst,
.total {
  font-size: 1.1rem;
  margin: 0.5rem 0;
  color: #555;
}
.total {
  font-weight: bold;
  color: #000;
}

/* Buy Now Button */
.buy-now-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  background: linear-gradient(to right, #4caf50, #388e3c);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
}
.buy-now-btn:hover {
  background: linear-gradient(to right, #43a047, #2e7d32);
}

/* No Product Message */
.no-product {
  text-align: center;
  font-size: 1.1rem;
  color: #999;
  padding: 2rem;
}

/* Popup Modal Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Animation Keyframe */
@keyframes popup-zoom {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.popup-box {
  background-color: #fff;
  padding: 2rem 2.5rem;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  max-width: 90%;
  width: 400px;
  animation: popup-zoom 0.4s ease;
}

.popup-box h3 {
  margin-bottom: 1rem;
  color: #27ae60;
  font-size: 1.6rem;
}

.popup-box p {
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.5rem;
}

/* OK Button in Modal */
.ok-btn {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.ok-btn:hover {
  background-color: #219653;
}
</style>
