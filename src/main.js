import { createApp } from 'vue';     // Import Vue's createApp function to create a new app instance
import { createPinia } from 'pinia' // Import Pinia for state management
import App from './App.vue';       // Import the root App component
import router from './router';    // Import Vue Router instance
import './assets/styles/main.css'// Import global CSS styles

const app = createApp(App);   // Create a Vue app instance with the root component App

app.use(createPinia());     // Register Pinia plugin for state management
app.use(router);           // Register Vue Router for handling app routing
app.mount('#app');        // Mount the Vue app to the DOM element with id "app"
