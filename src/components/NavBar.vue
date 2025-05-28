<template>
  <div class="mobile-nav-wrapper">
    <!-- Top Navbar for Mobile -->
    <div class="mobile-top-bar">
      <input type="text" placeholder="Search products..." class="search-bar" />
      <router-link to="/cart" class="icon-link" title="Cart">🛒</router-link>
    </div>

    <!-- Full Navbar for Desktop -->
    <nav class="navbar desktop-only">
      <div class="nav-left">
        <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/order">Order</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <div class="nav-right">
        <input type="text" placeholder="Search products..." class="search-bar" />
        <router-link to="/cart" class="icon-link" title="Cart">🛒</router-link>
        <router-link to="/login" class="login-btn">Login</router-link>
      </div>
    </nav>

    <!-- Bottom Navbar for Mobile -->
    <footer class="mobile-bottom-nav">
      <router-link to="/" title="Home">🏠</router-link>
      <router-link to="/products" title="Products">🛍️</router-link>
      <router-link to="/order" title="Order">🛒</router-link>
      <router-link to="/contact" title="Contact">📞</router-link>
      <router-link to="/login" title="Login">👤</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
/* Reset margin/padding globally */
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

.desktop-only {
  display: flex;
}

.nav-left ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.nav-left a {
  font-weight: 600;
  transition: color 0.3s;
}

.nav-left a:hover {
  color: #42b983;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-bar {
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  width: 200px;
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
  transition: background-color 0.3s, color 0.3s;
}

.login-btn {
  background-color: #42b983;
}

.icon-link:hover,
.login-btn:hover {
  background-color: #368e6d;
  color: #fff;
}

.mobile-top-bar {
  display: none;
}

.mobile-bottom-nav {
  display: none;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%; /* changed from min-height: 100vh */
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
