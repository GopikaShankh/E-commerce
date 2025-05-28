<template>
  <NavBar />
  <section class="container">
    <h1 class="heading">Nail Care 💅</h1>
    <p class="subheading">Pamper your nails with top-quality care products!</p>

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
  name: "NailCare",
  components: {
    NavBar,
  },
  data() {
    return {
      products: [
        { title: "Lakme Nail Color Remover", price: 90, rating: 4.4, image: require('@/assets/subItems/NailCare/lakme-remover.jpg') },
        { title: "Colorbar Nail Polish Set", price: 499, rating: 4.5, image: require('@/assets/subItems/NailCare/colorbar-set.jpg') },
        { title: "Swiss Beauty Nail Polish", price: 129, rating: 4.3, image: require('@/assets/subItems/NailCare/swiss-polish.jpg') },
        { title: "VEGA Nail Clipper", price: 99, rating: 4.2, image: require('@/assets/subItems/NailCare/vega-clipper.jpg') },
        { title: "Faces Canada Nail Enamel", price: 199, rating: 4.4, image: require('@/assets/subItems/NailCare/faces-enamel.jpg') },
        { title: "Miniso Nail Buffer", price: 145, rating: 4.1, image: require('@/assets/subItems/NailCare/miniso-buffer.jpg') },
        { title: "Maybelline Nail Polish", price: 110, rating: 4.3, image: require('@/assets/subItems/NailCare/maybelline.jpg') },
        { title: "WOW Cuticle Oil", price: 220, rating: 4.5, image: require('@/assets/subItems/NailCare/wow-cuticle.jpg') },
        { title: "Nail File Set (6pc)", price: 179, rating: 4.2, image: require('@/assets/subItems/NailCare/nail-file.jpg') },
        { title: "Bella Voste Nail Lacquer", price: 139, rating: 4.4, image: require('@/assets/subItems/NailCare/bella-voste.jpg') }
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
