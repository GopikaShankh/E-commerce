<template>
  <NavBar />
  <div class="sportswear-container">
    <h1 class="heading">Sportswear Collection</h1>
    <div class="products-grid">
      <div v-for="(product, index) in sportsWearProducts" :key="index" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-subtitle">{{ product.subtitle }}</p>
        <div class="rating">⭐ {{ product.rating }} / 5</div>
        <p class="product-price">₹{{ product.price }}</p>
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
  components: {
    NavBar
  },
  data() {
    return {
      sportsWearProducts: [
        {
          title: 'Running Shoes',
          subtitle: 'Lightweight | Breathable',
          rating: 4.5,
          price: 1599,
          image: require('@/assets/subItems/SportsWear/runningshoes.jpg'),
        },
        {
          title: 'Track Suit',
          subtitle: 'Quick Dry | Comfortable',
          rating: 4.3,
          price: 1999,
          image: require('@/assets/subItems/SportsWear/tracksuit.jpg'),
        },
        {
          title: 'Training Shorts',
          subtitle: 'Sweat-Wicking | Flexible',
          rating: 4.1,
          price: 799,
          image: require('@/assets/subItems/SportsWear/trainingshorts.jpg'),
        },
        {
          title: 'Yoga Pants',
          subtitle: 'Stretchable | Soft Fabric',
          rating: 4.6,
          price: 1299,
          image: require('@/assets/subItems/SportsWear/yogapants.jpg'),
        },
        {
          title: 'Gym Tank Top',
          subtitle: 'Muscle Fit | Stylish',
          rating: 4.2,
          price: 699,
          image: require('@/assets/subItems/SportsWear/tanktop.jpg'),
        },
        {
          title: 'Gym Wear',
          subtitle: 'High Support | Activewear',
          rating: 4.7,
          price: 1199,
          image: require('@/assets/subItems/SportsWear/gymwear.jpg'),
        },
        {
          title: 'Track Suit',
          subtitle: 'Performance Fit',
          rating: 4.4,
          price: 999,
          image: require('@/assets/subItems/SportsWear/trackSuit.jpg'),
        },
        {
          title: 'Cricket Jersey',
          subtitle: 'Official Look | Dri-Fit',
          rating: 4.0,
          price: 1099,
          image: require('@/assets/subItems/SportsWear/cricketjersey.jpg'),
        },
        {
          title: 'Football Kit',
          subtitle: 'Top & Shorts Combo',
          rating: 4.3,
          price: 1499,
          image: require('@/assets/subItems/SportsWear/footballkit.jpg'),
        },
        {
          title: 'Basketball Shorts',
          subtitle: 'Loose Fit | Active',
          rating: 4.1,
          price: 899,
          image: require('@/assets/subItems/SportsWear/basketballshorts.jpg'),
        },
        {
          title: 'Headband Set',
          subtitle: 'Sweat Absorbent',
          rating: 4.5,
          price: 299,
          image: require('@/assets/subItems/SportsWear/headband.jpg'),
        },
        {
          title: 'Training Hoodie',
          subtitle: 'Warm | Stylish',
          rating: 4.6,
          price: 1499,
          image: require('@/assets/subItems/SportsWear/hoodie.jpg'),
        },
        {
          title: 'Sleeveless Hoodie',
          subtitle: 'Workout Ready',
          rating: 4.2,
          price: 1199,
          image: require('@/assets/subItems/SportsWear/sleevelesshoodie.jpg'),
        },
        {
          title: 'Cycling Jersey',
          subtitle: 'Breathable | Fitted',
          rating: 4.3,
          price: 1399,
          image: require('@/assets/subItems/SportsWear/cyclingjersey.jpg'),
        },
        {
          title: 'Tennis Skirt',
          subtitle: 'Stylish | Flexible',
          rating: 4.4,
          price: 999,
          image: require('@/assets/subItems/SportsWear/tennisskirt.jpg'),
        }
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
.sportswear-container {
  padding: 2rem;
  margin: auto;
}

.heading {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;
  transition: 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  text-align: center;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 10px;
  height: 280px;
}

.product-title {
  margin: 0.8rem 0 0.3rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.product-subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.rating {
  font-size: 0.9rem;
  color: #ff9800;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 1rem;
}

/* Medium devices (tablets) */
@media (max-width: 1024px) {
  .heading {
    font-size: 2rem;
  }

  .product-image {
    aspect-ratio: 3 / 4;
  }
}

/* Small devices (large phones) */
@media (max-width: 768px) {
  .heading {
    font-size: 1.8rem;
  }

  .product-title {
    font-size: 1rem;
  }

  .product-subtitle,
  .rating,
  .product-price {
    font-size: 0.9rem;
  }
}

@media (min-width: 481px) and (max-width: 720px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Extra-small devices (mobiles) */
@media (max-width: 480px) {
  .heading {
    font-size: 1.5rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .product-card {
    padding: 0.8rem;
  }

  .product-image {
    aspect-ratio: 1 / 1;
  }

  .btn-group {
    flex-direction: column;
    gap: 0.6rem;
  }

  .cart-btn,
  .buy-btn {
    width: 100%;
    font-size: 0.9rem;
  }
}
</style>
