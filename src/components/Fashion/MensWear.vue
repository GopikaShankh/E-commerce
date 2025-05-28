<template>
  <NavBar />
  <div class="menswear-container">
    <h1 class="heading">Men's Wear Collection</h1>
    <div class="products-grid">
      <div v-for="(product, index) in mensProducts" :key="index" class="product-card">
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
      mensProducts: [
        {
          title: 'Casual T-Shirt',
          subtitle: '100% Cotton | Relaxed Fit',
          rating: 4.2,
          price: 499,
          image: require('@/assets/subItems/MensWear/casual.jpg'),
        },
        {
          title: 'Formal Shirt',
          subtitle: 'Office Wear | Slim Fit',
          rating: 4.5,
          price: 899,
          image: require('@/assets/subItems/MensWear/formal.jpg'),
        },
        {
          title: 'Denim Jeans',
          subtitle: 'Stretchable | Mid-Rise',
          rating: 4.0,
          price: 1199,
          image: require('@/assets/subItems/MensWear/jeans.jpg'),
        },
        {
          title: 'Leather Jacket',
          subtitle: 'Premium Look | Biker Style',
          rating: 4.8,
          price: 2499,
          image: require('@/assets/subItems/MensWear/jacket.jpg'),
        },
        {
          title: 'Polo T-Shirt',
          subtitle: 'Half Sleeves | Soft Fabric',
          rating: 4.3,
          price: 699,
          image: require('@/assets/subItems/MensWear/polo.jpg'),
        },
        {
          title: 'Chinos',
          subtitle: 'Slim Fit | Soft Material',
          rating: 4.1,
          price: 999,
          image: require('@/assets/subItems/MensWear/chinos.jpg'),
        },
        {
          title: 'Hoodie',
          subtitle: 'Warm & Stylish',
          rating: 4.6,
          price: 1399,
          image: require('@/assets/subItems/MensWear/hoodies.jpg'),
        },
        {
          title: 'Kurta Pyjama',
          subtitle: 'Traditional Wear',
          rating: 4.4,
          price: 1099,
          image: require('@/assets/subItems/MensWear/kurta.jpg'),
        },
        {
          title: 'Blazer',
          subtitle: 'Formal | Party Wear',
          rating: 4.7,
          price: 2899,
          image: require('@/assets/subItems/MensWear/blazer.jpg'),
        },
        {
          title: 'Track Pants',
          subtitle: 'Workout | Casual',
          rating: 4.0,
          price: 699,
          image: require('@/assets/subItems/MensWear/trackpants.jpg'),
        },
        {
          title: 'Shorts',
          subtitle: 'Summer | Relax Fit',
          rating: 4.1,
          price: 499,
          image: require('@/assets/subItems/MensWear/shorts.jpg'),
        },
        {
          title: 'Sweatshirt',
          subtitle: 'Winter Collection',
          rating: 4.5,
          price: 1199,
          image: require('@/assets/subItems/MensWear/sweatshirt.jpg'),
        },
        {
          title: 'Printed Shirt',
          subtitle: 'Trendy & Stylish',
          rating: 4.3,
          price: 799,
          image: require('@/assets/subItems/MensWear/printedshirt.jpg'),
        },
        {
          title: 'Cargo Pants',
          subtitle: 'Utility | Casual',
          rating: 4.2,
          price: 1099,
          image: require('@/assets/subItems/MensWear/cargo.jpg'),
        },
        {
          title: 'Winter Coat',
          subtitle: 'Woolen | Formal',
          rating: 4.6,
          price: 2599,
          image: require('@/assets/subItems/MensWear/coat.jpg'),
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
.menswear-container {
  padding: 2rem;
}

.heading {
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
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
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
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
</style>
