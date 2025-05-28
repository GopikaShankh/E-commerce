<template>
  <NavBar />
  <section class="container">
    <h1 class="heading">Skin Care Products</h1>
    <p class="subheading">Glow up with these top skincare essentials ✨</p>

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
  name: "SkinCare",
  components: {
    NavBar,
  },
  data() {
    return {
      products: [
        { title: "Aloe Vera Gel", price: 249, rating: 4.6, image: require('@/assets/subItems/SkinCare/aloe-vera.jpg') },
        { title: "Vitamin C Serum", price: 599, rating: 4.7, image: require('@/assets/subItems/SkinCare/vitamin-c-serum.jpg') },
        { title: "Moisturizer Cream", price: 399, rating: 4.5, image: require('@/assets/subItems/SkinCare/moisturizer.jpg') },
        { title: "Sunscreen SPF 50", price: 299, rating: 4.4, image: require('@/assets/subItems/SkinCare/sunscreen.jpg') },
        { title: "Face Wash", price: 199, rating: 4.3, image: require('@/assets/subItems/SkinCare/face-wash.jpg') },
        { title: "Toner", price: 275, rating: 4.2, image: require('@/assets/subItems/SkinCare/toner.jpg') },
        { title: "Face Mask", price: 349, rating: 4.4, image: require('@/assets/subItems/SkinCare/face-mask.jpg') },
        { title: "Body Lotion", price: 499, rating: 4.1, image: require('@/assets/subItems/SkinCare/body-lotion.jpg') },
        { title: "Lip Balm", price: 99, rating: 4.6, image: require('@/assets/subItems/SkinCare/lip-balm.jpg') },
        { title: "Night Cream", price: 549, rating: 4.5, image: require('@/assets/subItems/SkinCare/night-cream.jpg') }
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
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
