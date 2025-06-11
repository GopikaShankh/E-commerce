<template>
  <div>
    <NavBar />
    <div class="search-results">
      <h2>Search Results for "{{ searchQuery }}"</h2>

      <div v-if="loading">Loading...</div>

      <div v-else-if="filteredProducts.length > 0" class="product-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
        >
          <img :src="product.thumbnail" :alt="product.title" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <p><strong>₹{{ product.price }}</strong></p>
        </div>
      </div>

      <div v-else>
        <p>No products found matching "{{ searchQuery }}"</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "SearchResults",
  components: { NavBar },
  data() {
    return {
      allProducts: [],
      filteredProducts: [],
      searchQuery: "",
      loading: true,
    };
  },
  created() {
    this.fetchAndFilterProducts();
  },
  watch: {
    "$route.query.q": "fetchAndFilterProducts",
  },
  methods: {
    async fetchAndFilterProducts() {
      this.searchQuery = this.$route.query.q?.toLowerCase() || "";
      this.loading = true;

      try {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        this.allProducts = data.products;

        this.filteredProducts = this.allProducts.filter((product) =>
          product.title.toLowerCase().includes(this.searchQuery) ||
          product.description.toLowerCase().includes(this.searchQuery) ||
          product.category.toLowerCase().includes(this.searchQuery)
        );
      } catch (error) {
        console.error("Error fetching products:", error);
        this.filteredProducts = [];
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.search-results {
  padding: 6rem 2rem 2rem;
  min-height: 100vh;
  background-color: #f7f9fa;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
  width: 220px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  max-width: 100%;
  height: 160px;
  object-fit: cover;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .product-card {
    width: 100%;
  }
}
</style>
