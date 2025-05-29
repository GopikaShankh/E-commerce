<template>
  <NavBar />
  <div class="footwear-container">
    <h1 class="heading">Trendy Kids Footwear</h1>
    <div class="products-grid">
      <div v-for="(shoe, index) in footwearList" :key="index" class="product-card">
        <img :src="shoe.image" :alt="shoe.title" class="product-image" />
        <h2 class="product-title">{{ shoe.title }}</h2>
        <p class="product-type">{{ shoe.type }}</p>
        <div class="rating">⭐ {{ shoe.rating }} / 5</div>
        <p class="product-price">₹{{ shoe.price }}</p>
        <div class="btn-group">
          <button class="add-to-cart" @click="addToCart(shoe)">Add to Cart</button>
          <button class="buy-now" @click="buyNow(shoe)">Buy Now</button>
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
      footwearList: [
        { title: 'Running Shoes', type: 'Sporty & Light', rating: 4.5, price: 799, image: require('@/assets/subItems/FootWear/running-shoes.jpg') },
        { title: 'Casual Sneakers', type: 'Everyday Style', rating: 4.3, price: 699, image: require('@/assets/subItems/FootWear/sneakers.jpg') },
        { title: 'Velcro Shoes', type: 'Easy to Wear', rating: 4.4, price: 599, image: require('@/assets/subItems/FootWear/velcro.jpg') },
        { title: 'LED Shoes', type: 'Lights While Walking', rating: 4.7, price: 999, image: require('@/assets/subItems/FootWear/led-shoes.jpg') },
        { title: 'Sandals', type: 'Summer Comfort', rating: 4.2, price: 499, image: require('@/assets/subItems/FootWear/sandals.jpg') },
        { title: 'Flip Flops', type: 'Beach & Home', rating: 4.0, price: 299, image: require('@/assets/subItems/FootWear/flip-flops.jpg') },
        { title: 'School Shoes', type: 'Formal & Durable', rating: 4.6, price: 849, image: require('@/assets/subItems/FootWear/school-shoes.jpg') },
        { title: 'Boots', type: 'Winter Wear', rating: 4.3, price: 899, image: require('@/assets/subItems/FootWear/boots.jpg') },
        { title: 'Clogs', type: 'Soft & Colorful', rating: 4.1, price: 399, image: require('@/assets/subItems/FootWear/clogs.jpg') },
        { title: 'Ballet Flats', type: 'Elegant & Cute', rating: 4.5, price: 649, image: require('@/assets/subItems/FootWear/ballet.jpg') },
        { title: 'Canvas Shoes', type: 'Trendy & Tough', rating: 4.4, price: 749, image: require('@/assets/subItems/FootWear/canvas.jpg') },
        { title: 'Rain Boots', type: 'Waterproof & Fun', rating: 4.6, price: 699, image: require('@/assets/subItems/FootWear/rain-boots.jpg') },
        { title: 'Spiderman Shoes', type: 'Superhero Edition', rating: 4.6,  price: 899,  image: require('@/assets/subItems/FootWear/spiderman.jpg')},
        { title: 'Black Combat Boots', type: 'Rough & Tough', rating: 4.5, price: 1099, image: require('@/assets/subItems/FootWear/combat-boots.jpg')},
        { title: 'Blue Sports Shoes', type: 'Active & Durable', rating: 4.4, price: 799, image: require('@/assets/subItems/FootWear/blue-sports.jpg')}
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
.footwear-container {
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.06);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.product-title {
  margin-top: 0.8rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.product-type {
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

@media (max-width: 768px) {
  .product-image {
    height: 200px;
  }

  .heading {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .product-image {
    height: 160px;
  }

  .btn-group {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
