<template>
  <NavBar />
  <div class="kidswear-container">
    <h1 class="heading">Kids Wear Collection</h1>
    <div class="products-grid">
      <div
        v-for="(product, index) in kidsProducts"
        :key="index"
        class="product-card"
      >
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
      kidsProducts: [
        {
          title: 'Cartoon T-Shirt',
          subtitle: 'Soft Cotton | Fun Prints',
          rating: 4.5,
          price: 399,
          image: require('@/assets/subItems/KidsWear/cartoon-tshirt.jpg')
        },
        {
          title: 'Denim Dungaree',
          subtitle: 'Stylish | Easy Wear',
          rating: 4.3,
          price: 699,
          image: require('@/assets/subItems/KidsWear/dungaree.jpg')
        },
        {
          title: 'Party Frock',
          subtitle: 'Lace | Elegant Design',
          rating: 4.7,
          price: 999,
          image: require('@/assets/subItems/KidsWear/frock.jpg')
        },
        {
          title: 'Winter Jacket',
          subtitle: 'Warm & Colorful',
          rating: 4.6,
          price: 1199,
          image: require('@/assets/subItems/KidsWear/jacket.jpg')
        },
        {
          title: 'Shorts Set',
          subtitle: 'Cool Summer Outfit',
          rating: 4.2,
          price: 499,
          image: require('@/assets/subItems/KidsWear/shorts-set.jpg')
        },
        {
          title: 'Ethnic Wear',
          subtitle: 'Traditional | Festive',
          rating: 4.4,
          price: 799,
          image: require('@/assets/subItems/KidsWear/ethnic.jpg')
        },
        {
          title: 'Casual Hoodie',
          subtitle: 'Soft | Warm | Trendy',
          rating: 4.3,
          price: 749,
          image: require('@/assets/subItems/KidsWear/hoodie.jpg')
        },
        {
          title: 'Graphic Tee',
          subtitle: 'Bold Prints | Unisex',
          rating: 4.5,
          price: 349,
          image: require('@/assets/subItems/KidsWear/graphic-tee.jpg')
        },
        {
          title: 'Printed Leggings',
          subtitle: 'Stretchy | Fun Prints',
          rating: 4.2,
          price: 299,
          image: require('@/assets/subItems/KidsWear/leggings.jpg')
        },
        {
          title: 'Raincoat Set',
          subtitle: 'Waterproof | Bright Colors',
          rating: 4.6,
          price: 649,
          image: require('@/assets/subItems/KidsWear/raincoat.jpg')
        },
        {
          title: 'Night Suit',
          subtitle: 'Comfy Sleepwear | Full Set',
          rating: 4.5,
          price: 599,
          image: require('@/assets/subItems/KidsWear/night-suit.jpg')
        },
        {
          title: 'Capri Pants',
          subtitle: 'Cool | Stretchable Fit',
          rating: 4.1,
          price: 329,
          image: require('@/assets/subItems/KidsWear/capri.jpg')
        },
        {
          title: 'Jeans',
          subtitle: 'Rugged | Daily Wear',
          rating: 4.3,
          price: 649,
          image: require('@/assets/subItems/KidsWear/jeans.jpg')
        },
        {
          title: 'Tutu Skirt',
          subtitle: 'Fluffy | Fairy Look',
          rating: 4.4,
          price: 549,
          image: require('@/assets/subItems/KidsWear/tutu.jpg')
        },
        {
          title: 'School Uniform Set',
          subtitle: 'Formal | Smart Fit',
          rating: 4.7,
          price: 899,
          image: require('@/assets/subItems/KidsWear/school-uniform.jpg')
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
.kidswear-container {
  padding: 2rem;
}

.heading {
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
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
  margin-top: 0.8rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.product-subtitle {
  font-size: 0.9rem;
  color: #555;
  margin: 0.3rem 0;
}

.rating {
  font-size: 0.9rem;
  color: #f39c12;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #e91e63;
  margin: 0.5rem 0;
}
</style>
