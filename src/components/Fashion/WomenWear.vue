<template>
  <NavBar />
  <div class="womenswear-container">
    <h1 class="heading">Women's Wear Collection</h1>
    <div class="products-grid">
      <div v-for="(product, index) in womensProducts" :key="index" class="product-card">
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
  name: 'WomensWear',
  components: {
    NavBar,
  },
  data() {
    return {
      womensProducts: [
        {
          title: 'Floral Kurti',
          subtitle: 'Cotton | Festive Wear',
          rating: 4.3,
          price: 799,
          image: require('@/assets/subItems/Womens/kurti1.jpg'),
        },
        {
          title: 'Anarkali Dress',
          subtitle: 'Floor Length | Embroidered',
          rating: 4.5,
          price: 1499,
          image: require('@/assets/subItems/Womens/anarkali.jpg'),
        },
        {
          title: 'Palazzo Set',
          subtitle: 'Casual Look | Rayon Fabric',
          rating: 4.2,
          price: 999,
          image: require('@/assets/subItems/Womens/palazzo.jpg'),
        },
        {
          title: 'Saree',
          subtitle: 'Silk | Traditional Wear',
          rating: 4.7,
          price: 1899,
          image: require('@/assets/subItems/Womens/saree.jpg'),
        },
        {
          title: 'Lehenga Choli',
          subtitle: 'Party Wear | Mirror Work',
          rating: 4.6,
          price: 2999,
          image: require('@/assets/subItems/Womens/lehenga.jpg'),
        },
        {
          title: 'Western Top',
          subtitle: 'Trendy | Full Sleeve',
          rating: 4.1,
          price: 499,
          image: require('@/assets/subItems/Womens/western_top.jpg'),
        },
        {
          title: 'Denim Jacket',
          subtitle: 'Blue | Slim Fit',
          rating: 4.3,
          price: 899,
          image: require('@/assets/subItems/Womens/denim_jacket.jpg'),
        },
        {
          title: 'Long Skirt',
          subtitle: 'Boho Style | Elastic Waist',
          rating: 4.4,
          price: 799,
          image: require('@/assets/subItems/Womens/skirt.jpg'),
        },
        {
          title: 'Gown',
          subtitle: 'Evening Wear | Fancy',
          rating: 4.5,
          price: 1899,
          image: require('@/assets/subItems/Womens/gown.jpg'),
        },
        {
          title: 'Jeggings',
          subtitle: 'Stretchable | Comfortable',
          rating: 4.0,
          price: 599,
          image: require('@/assets/subItems/Womens/jaggings.jpg'),
        },
        {
          title: 'Crop Top',
          subtitle: 'Stylish | Sleeveless',
          rating: 4.2,
          price: 449,
          image: require('@/assets/subItems/Womens/croptop.jpg'),
        },
        {
          title: 'Salwar Suit',
          subtitle: 'Elegant | Embroidered',
          rating: 4.6,
          price: 1399,
          image: require('@/assets/subItems/Womens/salwarsuit.jpg'),
        },
        {
          title: 'Maxi Dress',
          subtitle: 'Floral Print | Casual',
          rating: 4.4,
          price: 1199,
          image: require('@/assets/subItems/Womens/maxidress.jpg'),
        },
        {
          title: 'Dupatta Set',
          subtitle: 'Chiffon | Printed',
          rating: 4.1,
          price: 599,
          image: require('@/assets/subItems/Womens/dupatta.jpg'),
        },
        {
          title: 'Woolen Shawl',
          subtitle: 'Winter Wear | Handwoven',
          rating: 4.8,
          price: 1099,
          image: require('@/assets/subItems/Womens/shawl.jpg'),
        },
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
.womenswear-container {
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
</style>
