<template>
    <!-- Navigation bar component -->
    <NavBar />
    <div class="ethnicwear-container">
        <!-- Page heading -->
        <h1 class="heading">Ethnic Wear Collection</h1>
        <!-- Grid container for product cards -->
        <div class="products-grid">
          <!-- Loop through ethnicProducts array and display each product -->
          <div v-for="(product, index) in ethnicProducts" :key="index" class="product-card">
            <!-- Product image -->
            <img :src="product.image" :alt="product.title" class="product-image" />
            <!-- Product title -->
            <h2 class="product-title">{{ product.title }}</h2>
            <!-- Product subtitle or description -->
            <p class="product-subtitle">{{ product.subtitle }}</p>
            <!-- Product rating with star symbol -->
            <div class="rating">⭐ {{ product.rating }} / 5</div>
            <!-- Product price -->
            <p class="product-price">₹{{ product.price }}</p>
            <!-- Buttons to add product to cart or buy now -->
            <div class="btn-group">
              <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
              <button class="buy-now" @click="buyNow(product)">Buy Now</button>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import NavBar from '../NavBar.vue'; 
import { useCartStore } from '@/store/cartStore';

export default {
  name: 'EthnicWear',
  components: {
    NavBar,  // Register NavBar component locally
  },
  data() {
    return {
      // Array of ethnic wear products with details
      ethnicProducts: [
        {
          title: 'Banarasi Saree',
          subtitle: 'Traditional | Silk',
          rating: 4.8,
          price: 2499,
          // Image imported via require to bundle correctly
          image: require('@/assets/subItems/EthinicWaer/banarasi_saree.jpg'),
        },
        // ...other products with similar structure
      ],
    };
  },
  methods: {
    // Adds selected product to the cart using Pinia store
    addToCart(product) {
      const cartStore = useCartStore()
      cartStore.addToCart(product)
      alert(`${product.title} added to cart!`);  // Confirmation alert
    },
    // Handles 'Buy Now' button click
    buyNow(product) {
      const gstRate = 0.18;  // GST percentage
      const gstAmount = product.price * gstRate;  // Calculate GST amount
      const priceWithGst = product.price + gstAmount;  // Total price including GST

      // Create product object including GST details
      const productWithGst = {
        ...product,
        gstAmount: gstAmount.toFixed(2),
        priceWithGst: priceWithGst.toFixed(2),
      };

      // Navigate to OrderPage passing product data as query string
      this.$router.push({
        name: 'OrderPage',
        query: { product: JSON.stringify(productWithGst) }
      });
    }
  }
};
</script>

<style scoped>
/* Container padding for ethnic wear page */
.ethnicwear-container {
  padding: 1.5rem;
}

/* Main heading styles */
.heading {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2c3e50;
}

/* Grid layout for product cards */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

/* Individual product card styling */
.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;
  transition: 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
}

/* Hover effect to lift card and add shadow */
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Product image styling with fixed height and rounded corners */
.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

/* Product title styling */
.product-title {
  margin: 0.8rem 0 0.3rem;
  font-size: 1.1rem;
  font-weight: 600;
}

/* Subtitle with smaller font and muted color */
.product-subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

/* Rating text color styled in orange */
.rating {
  font-size: 0.9rem;
  color: #ff9800;
  margin-bottom: 0.5rem;
}

/* Price styled with prominent color and bold */
.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 1rem;
}

/* Responsive Design for medium screens */
@media (max-width: 853px) {
    .product-image {
        height: 280px;  /* Slightly smaller image */
    }
    .products-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
}

/* Responsive Design for tablets and smaller screens */
@media (max-width: 768px) {
    .product-image {
        height: 250px;
    }
    .products-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .heading {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    .product-title {
        font-size: 1rem;
    }

    .product-subtitle,
    .rating,
    .product-price {
        font-size: 0.9rem;
    }

    /* Buttons (if class names cart-btn or buy-btn used) */
    .cart-btn,
    .buy-btn {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
}

/* Responsive Design for mobile phones */
@media (max-width: 480px) {
  .ethnicwear-container {
    padding: 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);  /* Two columns on small screens */
    gap: 0.5rem;
  }

  .product-image {
    height: 190px;  /* Smaller image height for mobile */
  }

  .heading {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .product-title {
    font-size: 1rem;
  }

  .product-subtitle,
  .rating,
  .product-price {
    font-size: 0.85rem;
  }

  /* Button group layout adjustment for small screens */
  .btn-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  /* Buttons take full width on mobile */
  .cart-btn,
  .buy-btn {
    width: 100%;
    font-size: 0.95rem;
    padding: 0.5rem 0;
  }
}
</style>
