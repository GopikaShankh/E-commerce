<template>
  <NavBar />
  <div class="contact-page">

    <section class="contact-form-container">
      <h2>Contact Us</h2>
      <p class="intro-text">
        Have questions about your order or our products? Fill out the form below, and our support team will assist you promptly.
      </p>
      <form @submit.prevent="submitForm" novalidate>
        <div class="form-group">
          <label for="name">Full Name <span class="required">*</span></label>
          <input
            type="text"
            id="name"
            v-model.trim="form.name"
            :class="{ error: errors.name }"
            placeholder="Your full name"
            required
          />
          <small v-if="errors.name" class="error-msg">{{ errors.name }}</small>
        </div>

        <div class="form-group">
          <label for="email">Email Address <span class="required">*</span></label>
          <input
            type="email"
            id="email"
            v-model.trim="form.email"
            :class="{ error: errors.email }"
            placeholder="you@example.com"
            required
          />
          <small v-if="errors.email" class="error-msg">{{ errors.email }}</small>
        </div>

        <div class="form-group">
          <label for="orderId">Order ID (if applicable)</label>
          <input
            type="text"
            id="orderId"
            v-model.trim="form.orderId"
            placeholder="Enter your order ID"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject <span class="required">*</span></label>
          <input
            type="text"
            id="subject"
            v-model.trim="form.subject"
            :class="{ error: errors.subject }"
            placeholder="Subject of your message"
            required
          />
          <small v-if="errors.subject" class="error-msg">{{ errors.subject }}</small>
        </div>

        <div class="form-group">
          <label for="message">Message <span class="required">*</span></label>
          <textarea
            id="message"
            v-model.trim="form.message"
            :class="{ error: errors.message }"
            placeholder="Write your message here..."
            required
          ></textarea>
          <small v-if="errors.message" class="error-msg">{{ errors.message }}</small>
        </div>

        <button type="submit">Send Message</button>

        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </form>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {
      form: {
        name: '',
        email: '',
        orderId: '',
        subject: '',
        message: '',
      },
      errors: {},
      successMessage: '',
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    submitForm() {
      this.errors = {};
      this.successMessage = '';

      if (!this.form.name) {
        this.errors.name = 'Please enter your full name.';
      }
      if (!this.form.email) {
        this.errors.email = 'Please enter your email address.';
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }
      if (!this.form.subject) {
        this.errors.subject = 'Please enter the subject.';
      }
      if (!this.form.message) {
        this.errors.message = 'Please write your message.';
      }

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      // Simulate form submission (e.g., API call)
      setTimeout(() => {
        this.successMessage = 'Thank you for contacting us! We will get back to you shortly.';
        this.form = {
          name: '',
          email: '',
          orderId: '',
          subject: '',
          message: '',
        };
      }, 500);
    },
  },
};
</script>

<style scoped>
.contact-page {
  max-width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
}

.contact-form-container h2 {
  text-align: center;
  font-weight: 700;
  font-size: 2.2rem;
  color: #333;
}

.intro-text {
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.4;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #222;
}

.required {
  color: #d93025;
  margin-left: 0.1rem;
}

input,
textarea {
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1.8px solid #ccc;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.3);
}

.error {
  border-color: #d93025 !important;
}

.error-msg {
  color: #d93025;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

textarea {
  min-height: 130px;
  resize: vertical;
  font-family: inherit;
}

button {
  align-self: center;
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.9rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 6px 15px rgba(66, 185, 131, 0.4);
}

button:hover {
  background-color: #369b6e;
  box-shadow: 0 8px 20px rgba(54, 155, 110, 0.6);
}

.success-message {
  margin-top: 1.5rem;
  color: #2e7d32;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
}

@media (max-width: 600px) {
  .contact-page {
    margin: 2rem 1rem 3rem;
  }

  button {
    width: 100%;
  }
}
</style>
