import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
  }),
  actions: {
    addToCart(product) {
      this.cartItems.push(product)
      this.saveCart()
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1)
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
    clearCart() {
      this.cartItems = []
      this.saveCart()
    }
  }
})
