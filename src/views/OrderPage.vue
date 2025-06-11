<template>
  <NavBar />
  <div class="order-container">
    <h1 v-if="!showHistory">Order Page</h1>

    <!-- Selected Product Display -->
    <div v-if="product && !showHistory" class="product-card">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <h2>{{ product.title }}</h2>
      <p class="price">Price: ₹{{ product.price }}</p>
      <p class="gst">GST: ₹{{ product.gstAmount }}</p>
      <p class="total">Total Price: ₹{{ product.priceWithGst }}</p>

      <button class="buy-now-btn" @click="buyNow">Buy Now</button>
    </div>

    <div v-else-if="!product && !showHistory" class="no-product">
      <p>No product selected.</p>
    </div>

    <!-- Order History Section -->
    <div v-if="orderHistory.length && showHistory" class="history">
      <h2>🧾 Order History</h2>
      <ul>
        <li v-for="(order, index) in orderHistory" :key="index" class="order-item">
          <img :src="order.image" alt="product image" class="history-image" />
          <div class="history-details">
            <p><strong>{{ order.title }}</strong></p>
            <p>Price: ₹{{ order.price }}</p>
            <p>GST: ₹{{ order.gstAmount }}</p>
            <p>Total: ₹{{ order.priceWithGst }}</p>
          </div>
        </li>
      </ul>
      <button @click="clearHistory" class="clear-btn">Clear Order History</button>
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
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'OrderPage',
  components: { NavBar },
  data() {
    return {
      product: null,
      showPopup: false,
      orderHistory: [],
      showHistory: false
    };
  },
  created() {
    const productQuery = this.$route.query.product;

    if (productQuery) {
      this.product = JSON.parse(productQuery);

      const existingOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];

      existingOrders.push({
        title: this.product.title,
        image: this.product.image,
        price: this.product.price,
        gstAmount: this.product.gstAmount,
        priceWithGst: this.product.priceWithGst
      });

      localStorage.setItem('orderHistory', JSON.stringify(existingOrders));
      localStorage.setItem('selectedProduct', JSON.stringify(this.product));
      this.showHistory = false;
    } else {
      const savedProduct = localStorage.getItem('selectedProduct');
      if (savedProduct) {
        this.product = JSON.parse(savedProduct);
        this.showHistory = false;
      } else {
        this.showHistory = true; // 🔥 Show order history if no product
      }
    }

    const savedOrders = localStorage.getItem('orderHistory');
    if (savedOrders) {
      this.orderHistory = JSON.parse(savedOrders);
    }
  },
  methods: {
    buyNow() {
      this.showPopup = true;
      this.showHistory = false;
    },
    handleOk() {
      this.showPopup = false;
      localStorage.removeItem('selectedProduct');
      this.product = null;
      this.showHistory = true;
    },
    clearHistory() {
      localStorage.removeItem('orderHistory');
      this.orderHistory = [];
    }
  }
};
</script>

<style scoped>
.order-container {
  padding: 0 3rem;
  max-width: 1000px;
  margin: 4rem auto;
  font-family: 'Poppins', sans-serif;
  border-radius: 20px;
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

h1 {
  text-align: center;
  font-size: 2.8rem;
  margin-top: 2rem;
  color: #2d3436;
  font-weight: 700;
  animation: fadeUp 0.6s ease-in;
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.product-card {
  background: linear-gradient(135deg, #ffffff, #ecf0f1);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: zoomIn 0.6s ease;
}

@keyframes zoomIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.product-card:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  max-width: 320px;
  height: 20rem;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 12px;
  border: 4px solid #dfe6e9;
}

.price, .gst, .total {
  font-size: 1.2rem;
  margin: 0.4rem 0;
  color: #2f3542;
}

.total {
  font-weight: bold;
  color: #e17055;
}

.buy-now-btn {
  margin-top: 1rem;
  padding: 0.9rem 2.2rem;
  background: linear-gradient(to right, #00b894, #00cec9);
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.buy-now-btn:hover {
  background: linear-gradient(to right, #00cec9, #00b894);
  transform: scale(1.05);
}

.no-product {
  text-align: center;
  font-size: 1.3rem;
  color: #636e72;
  margin-top: 3rem;
}

.history {
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  margin-bottom: 3rem;
  margin-top: 4rem;
  animation: fadeIn 0.6s ease;
}

.history h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2d3436;
  text-align: center;
}

.history ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  flex-direction: row;
}

.order-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
  background: #f1f2f6;
  transition: all 0.3s ease;
   flex: 1 1 250px
}

.order-item:hover {
  background: #dfe6e9;
}

.history-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 8px;
  border: 3px solid #b2bec3;
}

.history-details p {
  margin: 0.2rem 0;
  font-size: 0.95rem;
}

.clear-btn {
  display: block;
  margin: 2rem auto 0;
  background-color: #d63031;
  color: white;
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.clear-btn:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}

.popup-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup-box {
  background: linear-gradient(135deg, #ffffff, #ecf0f1);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
  animation: pop 0.3s ease;
}

@keyframes pop {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.ok-btn {
  margin-top: 1.2rem;
  background: linear-gradient(to right, #6c5ce7, #a29bfe);
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.ok-btn:hover {
  background: linear-gradient(to right, #a29bfe, #6c5ce7);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .product-image {
    height: auto;
  }

  .order-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .history ul {
    flex-direction: column;
    align-items: center;
  }

  .buy-now-btn,
  .clear-btn,
  .ok-btn {
    width: 100%;
  }
}
</style>
