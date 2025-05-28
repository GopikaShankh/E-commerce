<template>
  <NavBar />
  <div>
    <h1>Order Page</h1>
    <div v-if="product">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <h2>{{ product.title }}</h2>
      <p>Price: ₹{{ product.price }}</p>
      <p>GST: ₹{{ product.gstAmount }}</p>
      <p>Total Price: ₹{{ product.priceWithGst }}</p>
    </div>
    <div v-else>
      <p>No product selected.</p>
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
    };
  },
  created() {
    const productQuery = this.$route.query.product;
    if (productQuery) {
      this.product = JSON.parse(productQuery);
    }
  }
}
</script>
<style scoped>


h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2rem;
}

.product-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  display: block;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.03);
}

h2 {
  text-align: center;
  color: #34495e;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin: 0.3rem 0;
}

p:last-of-type {
  color: #888;
  font-style: italic;
}
</style>
