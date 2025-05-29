<template>
  <NavBar />
  <div class="cart">
    <h2>🛒 Your Cart</h2>
    <div v-if="cartItems.length === 0" class="empty-cart">Your cart is empty.</div>
    <div v-else class="cart-items">
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="cart-item"
      >
        <!-- ✅ Image fallback check -->
        <img
          :src="item?.image || 'https://via.placeholder.com/150'"
          alt="Product Image"
        />

        <div class="cart-details">
          <h3>{{ item?.title || 'No Title' }}</h3>
          <p>Price: ₹{{ item?.price || '0.00' }}</p>
          <p>Rating: ⭐ {{ item?.rating || 'N/A' }}</p>
          <button @click="removeFromCart(index)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/store/cartStore'
import { storeToRefs } from 'pinia'
import NavBar from '../components/NavBar.vue'

export default {
  components: { NavBar },
  name: 'CartPage',
  setup() {
    const cart = useCartStore()
    const { cartItems } = storeToRefs(cart)

    return {
      cartItems,
      removeFromCart: cart.removeFromCart
    }
  }
}
</script>

<style scoped>
.cart {
  margin: 50px auto;
  padding: 20px;
  border-radius: 12px;
}

.cart h2 {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #2c3e50;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  color: #888;
  margin-top: 20px;
}

.cart-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 0 10px;
}

.cart-item {
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.cart-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
}

.cart-item img {
  width: 100%;
  height: 140px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 12px;
}

.cart-details {
  text-align: center;
  width: 100%;
}

.cart-details h3 {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.cart-details p {
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
}

.cart-details button {
  margin-top: 12px;
  padding: 8px 16px;
  background: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
}

.cart-details button:hover {
  background: #16a085;
}

@media (max-width: 600px) {
  .cart h2 {
    font-size: 22px;
  }

  .cart-details h3 {
    font-size: 14px;
  }

  .cart-details p {
    font-size: 13px;
  }

  .cart-details button {
    font-size: 13px;
    padding: 6px 12px;
  }
}
</style>
