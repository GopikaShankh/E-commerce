<template>
    <NavBar />
    <section class="container">
    <h1 class="heading">Home Decor Collection</h1>
    <p class="subheading">Upgrade your home with elegant and stylish decor items ✨</p>

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
  name: "HomeDecor",
   components: {
    NavBar,
  },
  data() {
    return {
      products: [
        { title: "Modern Wall Clock", price: 799, rating: 4.5, image: require('@/assets/subItems/HomeDecor/clock.jpg') },
        { title: "Boho Cushion Cover", price: 349, rating: 4.2, image: require('@/assets/subItems/HomeDecor/cushion-cover.jpg') },
        { title: "Table Lamp", price: 1299, rating: 4.7, image: require('@/assets/subItems/HomeDecor/table-lamp.jpg') },
        { title: "Floral Wall Art", price: 1499, rating: 4.4, image: require('@/assets/subItems/HomeDecor/floral-wall.jpg') },
        { title: "Ceramic Vase", price: 599, rating: 4.3, image: require('@/assets/subItems/HomeDecor/ceramic.jpg') },
        { title: "Wooden Wall Shelf", price: 999, rating: 4.6, image: require('@/assets/subItems/HomeDecor/wooden-wall.jpg') },
        { title: "Mirror Set", price: 1899, rating: 4.8, image: require('@/assets/subItems/HomeDecor/mirror.jpg') },
        { title: "Macrame Wall Hanging", price: 699, rating: 4.1, image: require('@/assets/subItems/HomeDecor/macrame.jpg') },
        { title: "Plant Pot Set", price: 799, rating: 4.5, image: require('@/assets/subItems/HomeDecor/plant-pot.jpg') },
        { title: "Hanging Lantern", price: 1099, rating: 4.3, image: require('@/assets/subItems/HomeDecor/hanging-lantern.jpg') },
        { title: "Scented Candle", price: 399, rating: 4.2, image: require('@/assets/subItems/HomeDecor/scented-candle.jpg') },
        { title: "Wall Hanging Frame", price: 1299, rating: 4.6, image: require('@/assets/subItems/HomeDecor/hanging-frame.jpg') }
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
}

.subheading {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
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
  justify-content: space-between;
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
