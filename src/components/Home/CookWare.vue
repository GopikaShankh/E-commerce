<template>
  <NavBar />
  <section class="container">
    <h1 class="heading">Cookware Collection</h1>
    <p class="subheading">Make your cooking easier with our premium cookware 🧑‍🍳</p>

    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
      >
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-rating">⭐ {{ product.rating }} / 5</p>
        <p class="product-price">₹{{ product.price }}</p>
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../NavBar.vue'; 
import { useCartStore } from '@/store/cartStore';

export default {
  name: "CookWare",
    components: {
    NavBar,
  },
 
  data() {
    return {
      products: [
        { title: "Non-Stick Frying Pan", price: 999, rating: 4.6, image: require('@/assets/subItems/CookWare/frying-pan.jpg') },
        { title: "Pressure Cooker", price: 1899, rating: 4.7, image: require('@/assets/subItems/CookWare/pressure-cooker.jpg') },
        { title: "Stainless Steel Kadai", price: 1399, rating: 4.4, image: require('@/assets/subItems/CookWare/kadai.jpg') },
        { title: "Induction Cooktop", price: 2999, rating: 4.5, image: require('@/assets/subItems/CookWare/induction.jpg') },
        { title: "Cookware Set", price: 3499, rating: 4.8, image: require('@/assets/subItems/CookWare/cookware-set.jpg') },
        { title: "Tadka Pan", price: 499, rating: 4.2, image: require('@/assets/subItems/CookWare/tadka-pan.jpg') },
        { title: "Grill Pan", price: 1099, rating: 4.3, image: require('@/assets/subItems/CookWare/grill-pan.jpg') },
        { title: "Idli Maker", price: 1299, rating: 4.5, image: require('@/assets/subItems/CookWare/idli-maker.jpg') },
        { title: "Dutch Oven", price: 2599, rating: 4.6, image: require('@/assets/subItems/CookWare/dutch-oven.jpg') },
        { title: "Deep Fryer Pot", price: 1499, rating: 4.5, image: require('@/assets/subItems/CookWare/deep-fryer.jpg') },
      ]
    };
  },
  methods: {
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);
    },
    buyNow(product) {
      const gstRate = 0.18; 
      const gstAmount = product.price * gstRate;
      const priceWithGst = product.price + gstAmount;

      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>

.container {
  padding: 2rem;
}

.heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-size: 2.2rem;
}

.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.product-title {
  font-size: 1.2rem;
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
