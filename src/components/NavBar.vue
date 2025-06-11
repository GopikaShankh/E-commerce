<template>
  <div class="mobile-nav-wrapper">
    <!-- Top Navbar for Mobile -->
    <div class="mobile-top-bar">
      <input
        type="text"
        placeholder="Search products..."
        class="search-bar"
        v-model="searchText"
        @keydown.enter="performSearch"
      />
      <router-link to="/cart" class="icon-link" title="Cart">🛒</router-link>
    </div>

    <!-- Full Navbar for Desktop -->
    <nav class="navbar desktop-only">
      <!-- Logo Left -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
        </router-link>
      </div>

      <!-- Center Navigation Links -->
      <ul class="nav-center">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link :to="{ path: '/order', query: { showHistory: true } }">Order</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <!-- Right Side Search + Cart + Login -->
      <div class="nav-right">
        <input
          type="text"
          placeholder="Search products..."
          class="search-bar"
          v-model="searchText"
          @keydown.enter="performSearch"
        />
        <router-link to="/cart" class="icon-link" title="Cart">🛒</router-link>
        <router-link to="/login" class="login-btn">Login</router-link>
      </div>
    </nav>

    <!-- Bottom Navbar for Mobile -->
    <footer class="mobile-bottom-nav">
      <router-link to="/" title="Home">🏠</router-link>
      <router-link to="/products" title="Products">🛍️</router-link>
      <router-link :to="{ path: '/order', query: { showHistory: true } }" title="Order">🧾</router-link>
      <router-link to="/contact" title="Contact">📞</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    performSearch() {
      if (this.searchText.trim() !== "") {
        this.$router.push({ path: "/search", query: { q: this.searchText.trim() } });
        this.searchText = "";
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2d3d;
  padding: 1rem 2rem;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.logo {
  flex: 1;
}
.logo-img {
  height: 40px;
  border-radius: 50%;
}

.nav-center {
  flex: 2;
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;
}
.nav-center li a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s;
}
.nav-center li a:hover {
  color: #42b983;
}

.nav-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.search-bar {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  width: 180px;
  outline: none;
  transition: box-shadow 0.3s ease;
}
.search-bar:focus {
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.7);
}

.icon-link,
.login-btn {
  font-size: 1.1rem;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  background-color:rgb(246, 251, 249);
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.icon-link:hover,
.login-btn:hover {
  background-color:rgb(238, 246, 243);
  color: #fff;
}

/* Mobile Styles */
.mobile-top-bar {
  display: none;
}
.mobile-bottom-nav {
  display: none;
}

/* Responsive */
@media (max-width: 853px) {
  .desktop-only {
    display: none;
  }

  .mobile-nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .mobile-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    background-color: #1f2d3d;
    position: fixed;
    top: 0;
    z-index: 1001;
    width: 100%;
  }

  .mobile-top-bar .search-bar {
    width: 80%;
    font-size: 1rem;
  }

  .mobile-bottom-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    padding: 0.5rem 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
  }

  .mobile-bottom-nav a {
    font-size: 1.4rem;
    color: #1f2d3d;
    text-decoration: none;
  }
}
</style>
