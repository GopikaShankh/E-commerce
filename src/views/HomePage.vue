<template>
  <div>
    <NavBar />
    <BannerSlider />

    <!-- Category Section -->
    <section class="category-section">
      <h2 class="section-title">Shop by Category</h2>

      <div class="category-group" v-for="group in categories" :key="group.heading">
        <h3 class="category-heading">{{ group.heading }}</h3>
        <div class="subcategories">
          <router-link
            v-for="item in group.items"
            :key="item.name"
            :to="getCategoryRoute(item.name)"
            class="subcategory-card"
          >
            <img :src="item.image" :alt="item.name" />
            <p>{{ item.name }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-about">
          <h3>About Us</h3>
          <p>
            Providing quality products at affordable prices since 2025. Your
            satisfaction is our top priority.
          </p>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="OrderPage">order</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: supportteam3@gmail.com</p>
          <p>Phone: +91 995679321</p>
          <p>Address: 123 Market Street, Raipur, India</p>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2025 YourCompanyName. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BannerSlider from '@/components/BannerSlider.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
    BannerSlider,
  },
  data() {
    return {
      categories: [
        {
          heading: '👗 Fashion',
          items: [
            { name: "Men's Wear", image: require('@/assets/categories/men.jpg') },
            { name: "Women's Wear", image: require('@/assets/categories/women.jpeg') },
            { name: 'Kids Wear', image: require('@/assets/categories/kids.jpg') },
            { name: 'Footwear', image: require('@/assets/categories/footwear.jpg') },
            { name: 'Ethnic Wear', image: require('@/assets/categories/ethnic.jpg') },
            { name: 'Sportswear', image: require('@/assets/categories/sportswear.jpg') },
          ]
        },
        {
          heading: '🏠 Home & Living',
          items: [
            { name: 'Home Decor', image: require('@/assets/categories/decor.jpg') },
            { name: 'Furniture', image: require('@/assets/categories/furniture.jpg') },
            { name: 'Cookware', image: require('@/assets/categories/cookware.jpg') },
            { name: 'Cleaning Supplies', image: require('@/assets/categories/cleaning.jpg') },
            { name: 'Appliances (Mixer, Toaster, etc.)', image: require('@/assets/categories/appliances.jpg') },
            { name: 'Kitchen Tools', image: require('@/assets/categories/tools.jpg') },
          ]
        },
        {
          heading: '💄 Beauty & Personal Care',
          items: [
            { name: 'Skincare', image: require('@/assets/categories/skincare.jpg') },
            { name: 'Haircare', image: require('@/assets/categories/haircare.jpg') },
            { name: 'Makeup', image: require('@/assets/categories/makeup.jpg') },
            { name: 'Perfumes & Deos', image: require('@/assets/categories/perfume.jpg') },
            { name: 'Soaps & Body Wash', image: require('@/assets/categories/soap.jpg') },
            { name: 'Nail Care', image: require('@/assets/categories/nail.jpg') },
          ]
        },
        {
          heading: '📱 Electronics',
          items: [
            { name: 'Mobile Phones', image: require('@/assets/categories/mobiles.jpg') },
            { name: 'Headphones & Earbuds', image: require('@/assets/categories/headphones.jpg') },
            { name: 'Smart Watches', image: require('@/assets/categories/watches.jpg') },
            { name: 'Laptops & Tablets', image: require('@/assets/categories/laptops.jpg') },
            { name: 'Cameras', image: require('@/assets/categories/cameras.webp') },
            { name: 'Computer Accessories', image: require('@/assets/categories/computer.jpg') }
          ]
        }
      ]
    };
  },
  methods: {
    getCategoryRoute(name) {
      const routeMap = {
        "Men's Wear": '/mens-wear',
        "Women's Wear": '/women-wear',
        'Kids Wear': '/kids-wear',
        'Footwear': '/footwear',
        'Ethnic Wear': '/ethnic-wear',
        'Sportswear': '/sportswear',
        'Home Decor': '/home-decor',
        'Furniture': '/furniture',
        'Cleaning Supplies': '/cleaning-supplies',
        'Cookware': '/cookware',
        'Kitchen Tools': '/kitchen-tools',
        'Appliances (Mixer, Toaster, etc.)': '/appliances',
        'Skincare': '/skincare',
        'Haircare': '/haircare',
        'Makeup': '/makeup',
        'Perfumes & Deos': '/perfume',
        'Soaps & Body Wash': '/soaps',
        'Nail Care': '/nail-care',
        'Mobile Phones': '/mobiles',
        'Headphones & Earbuds': '/headphones',
        'Smart Watches': '/watches',
        'Laptops & Tablets': '/laptops-tablets',
        'Cameras': '/cameras',
        'Computer Accessories': '/computer-accessories',
      };

      return routeMap[name] || '/';
    }
  }
};
</script>


<style scoped>.category-section {
  padding: 3rem 1rem;
  background: #f4f6f8;
  margin-top: 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e1e2f;
  margin-bottom: 3rem;
  text-align: center;
}

.category-group {
  margin-bottom: 4rem;
}

.category-heading {
  font-size: 1.8rem;
  color: #2c3e50;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: 600;
  border-left: 5px solid #f39c12;
  padding-left: 1rem;
}

.subcategories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 0.5rem 0;
}

.subcategory-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.subcategory-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.subcategory-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  transition: 0.3s ease;
}

.subcategory-card p {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin: 0.8rem 0;
}

/* Footer */
.footer {
  background-color: #1a1a1a;
  color: #eee;
  padding: 3rem 1.5rem 1rem;
  margin-top: 5rem;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  gap: 2rem;
}

.footer-about,
.footer-links,
.footer-contact {
  flex: 1 1 250px;
}

.footer-about h3,
.footer-links h3,
.footer-contact h3 {
  font-size: 1.4rem;
  color: #f39c12;
  margin-bottom: 1rem;
  border-bottom: 2px solid #f39c12;
  padding-bottom: 0.3rem;
}

.footer-about p,
.footer-contact p {
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.6;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 0.6rem;
}

.footer-links ul li a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-links ul li a:hover {
  color: #f39c12;
}

.footer-contact .social-icons {
  margin-top: 1rem;
}

.footer-contact .social-icons a {
  margin-right: 1rem;
  font-size: 1.2rem;
  color: #ccc;
  transition: color 0.3s ease;
}

.footer-contact .social-icons a:hover {
  color: #f39c12;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #bbb;
  border-top: 1px solid #444;
  padding-top: 1rem;
}

a{
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .subcategories {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .subcategories {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-heading {
    text-align: center;
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }

  .subcategories {
    grid-template-columns: repeat(2, 1fr);
  }

  .subcategory-card img {
    height: 140px;
  }

  .subcategory-card p {
    font-size: 0.9rem;
  }

  .footer{
    display: none;
  }
}
</style>
