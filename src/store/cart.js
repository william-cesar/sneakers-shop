export const useCartStore = {
  state: { items: [] },

  getters: {
    itemsCount: (state) => state.items.length,
    itemsList: (state) => state.items,
    totalPrice: (state) => {
      if (state.items.length) {
        return state.items.reduce((acc, item) => acc + item.totalPrice);
      }
      return 0;
    },
  },

  mutations: {
    addItem(state, newItem) {
      const existingItemIdx = state.items.findIndex(
        (cartItem) => cartItem.id === newItem.id
      );

      if (existingItemIdx > -1) {
        const existingItem = state.items.at(existingItemIdx);

        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      } else {
        state.items.unshift(newItem);
      }
    },
    removeItem(state, itemId) {
      const existingItemIdx = state.items.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      const existingItem = state.items.at(existingItemIdx);

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      } else {
        state.items.splice(existingItemIdx, 1);
      }
    },
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit('addItem', product);
    },
    removeProductFromCart({ commit }, product) {
      commit('removeItem', product.id);
    },
  },
};
