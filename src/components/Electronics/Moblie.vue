<template>
  <NavBar />
  <section class="container">
    <h1 class="heading">Mobile Phones 📱</h1>
    <p class="subheading">Find the latest smartphones at the best prices!</p>

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
  name: "MobilePhones",
  components: {
    NavBar,
  },
  data() {
    return {
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
  width: 100%;
}

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

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

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

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

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
