<template>
  <NavBar />
  <div>
    <h2 class="page-title">Our Top Products</h2>
    <div class="product-list">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card"
      >
        <img :src="product.thumbnail" :alt="product.title" />
        <div class="info">
          <h3>{{ product.title }}</h3>
          <p class="subtitle">{{ product.description }}</p>
          <div class="rating">
            <span 
              v-for="n in 5" 
              :key="n" 
              class="star" 
              :class="{ filled: n <= Math.round(product.rating) }"
            >
              &#9733;
            </span>
          </div>
          <p class="price">₹{{ (product.price * 83).toFixed(2) }}</p>
          <div class="buttons">
            <button @click="buyNow(product.id)">Buy Now</button>
            <button @click="addToCart(product.id)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    fetch('https://dummyjson.com/products?limit=100')  // 100 products fetch kar rahe hain
      .then(res => res.json())
      .then(data => {
        this.products = data.products;  // products array data se le rahe hain
      })
      .catch(err => console.error('Error fetching products:', err));
  },
  methods: {
    buyNow(id) {
      alert(`Buying product with ID: ${id}`);
      // real buy now logic yahan likh sakte hain
    },
    addToCart(id) {
      alert(`Added product with ID: ${id} to cart`);
      // real add to cart logic yahan likh sakte hain
    }
  }
}
</script>

<style scoped>
.page-title {
  text-align: center;
  margin: 5rem 0 1rem;
  font-size: 2.2rem;
  color: #333;
  font-weight: bold;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 0 2rem 2rem;
  max-width: 95%;
  margin: auto;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #f9f9f9;
}

.info {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.info h3 {
  font-size: 1.15rem;
  color: #333;
  margin: 0 0 0.4rem;
  flex-shrink: 0;
}

.subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.6rem;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.rating {
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.star {
  color: #ccc;
  font-size: 1.1rem;
}

.star.filled {
  color: #f39c12;
}

.price {
  font-size: 1.2rem;
  color: #27ae60;
  font-weight: bold;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  flex: 1;
  padding: 0.6rem 0;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:first-child {
  background-color: #e74c3c;
  color: white;
}

button:first-child:hover {
  background-color: #c0392b;
}

button:last-child {
  background-color: #3498db;
  color: white;
}

button:last-child:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 0 1rem 1rem;
  }

  .product-card img {
    height: 150px;
  }
}
</style>
