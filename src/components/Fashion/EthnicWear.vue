<template>
    <NavBar />
    <div class="ethnicwear-container">
        <h1 class="heading">Ethnic Wear Collection</h1>
        <div class="products-grid">
          <div v-for="(product, index) in ethnicProducts" :key="index" class="product-card">
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
  name: 'EthnicWear',
  components: {
    NavBar,
  },
  data() {
    return {
      ethnicProducts: [
        {
          title: 'Banarasi Saree',
          subtitle: 'Traditional | Silk',
          rating: 4.8,
          price: 2499,
          image: require('@/assets/subItems/EthinicWaer/banarasi_saree.jpg'),
        },
        {
          title: 'Chikankari Kurti',
          subtitle: 'Hand Embroidered',
          rating: 4.5,
          price: 999,
          image: require('@/assets/subItems/EthinicWaer/chikankari_kurti.jpg'),
        },
        {
          title: 'Kanjivaram Saree',
          subtitle: 'Wedding Collection',
          rating: 4.9,
          price: 3999,
          image: require('@/assets/subItems/EthinicWaer/kanjivaram.jpg'),
        },
        {
          title: 'Punjabi Suit',
          subtitle: 'Salwar & Dupatta Set',
          rating: 4.4,
          price: 1299,
          image: require('@/assets/subItems/EthinicWaer/punjabi_suit.jpg'),
        },
        {
          title: 'Lehenga Choli',
          subtitle: 'Heavy Embroidery',
          rating: 4.6,
          price: 2799,
          image: require('@/assets/subItems/EthinicWaer/lehenga_ethnic.jpg'),
        },
        {
          title: 'Sharara Set',
          subtitle: 'Festive Wear',
          rating: 4.3,
          price: 1499,
          image: require('@/assets/subItems/EthinicWaer/sharara.jpg'),
        },
        {
          title: 'Pathani Suit',
          subtitle: 'Elegant Black',
          rating: 4.2,
          price: 1199,
          image: require('@/assets/subItems/EthinicWaer/pathani.jpg'),
        },
        {
          title: 'Phulkari Dupatta',
          subtitle: 'Handcrafted',
          rating: 4.1,
          price: 599,
          image: require('@/assets/subItems/EthinicWaer/phulkari.jpg'),
        },
        {
          title: 'Anarkali Kurta',
          subtitle: 'Long Flare | Silk',
          rating: 4.7,
          price: 1799,
          image: require('@/assets/subItems/EthinicWaer/anarkali_ethnic.jpg'),
        },
        {
          title: 'Kurta Pajama',
          subtitle: 'Cotton | Daily Wear',
          rating: 4.0,
          price: 999,
          image: require('@/assets/subItems/EthinicWaer/kurta_pajama.jpg'),
        },
        {
          title: 'Silk Dupatta',
          subtitle: 'Zari Border',
          rating: 4.5,
          price: 799,
          image: require('@/assets/subItems/EthinicWaer/silk_dupatta.jpg'),
        },
        {
          title: 'Dhoti Kurta',
          subtitle: 'Boys Ethnic Set',
          rating: 4.3,
          price: 899,
          image: require('@/assets/subItems/EthinicWaer/dhoti_kurta.jpg'),
        },
        {
          title: 'Handloom Saree',
          subtitle: 'Eco Friendly Cotton',
          rating: 4.6,
          price: 1399,
          image: require('@/assets/subItems/EthinicWaer/handloom_saree.jpg'),
        },
        {
          title: 'Indo-Western Dress',
          subtitle: 'Fusion Look',
          rating: 4.4,
          price: 1599,
          image: require('@/assets/subItems/EthinicWaer/indo_western.jpg'),
        },
        {
          title: 'Bandhani Dress',
          subtitle: 'Rajasthani Style',
          rating: 4.2,
          price: 1199,
          image: require('@/assets/subItems/EthinicWaer/bandhani.jpg'),
        },
      ],
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
.ethnicwear-container {
  padding: 1.5rem;
}

.heading {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;
  transition: 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 300px;
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

/* Responsive Design */
@media (max-width: 853px) {
    .product-image {
        height: 280px;
    }
    .products-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
}
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

    .cart-btn,
    .buy-btn {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }
}

@media (max-width: 480px) {
  .ethnicwear-container {
    padding: 1rem;
    
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .product-image {
    height: 190px;
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

  .btn-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  .cart-btn,
  .buy-btn {
    width: 100%;
    font-size: 0.95rem;
    padding: 0.5rem 0;
  }
}
</style>
