export const useCartStore = {
  state: { items: [] },

  getters: {
    itemsCount: (state) => state.items.length,
    allItems: (state) => state.items,
    itemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
    totalPrice: (state) => {
      if (state.items.length) {
        return state.items.reduce((acc, item) => acc + item.totalPrice);
      }
      return 0;
    },
  },

  mutations: {
    updateItem(state, item) {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (index > -1) {
        item.quantity === 0 && state.items.splice(index, 1);
        item.quantity > 0 ? (state.items[index] = item) : null;
      } else {
        item.quantity > 0 && state.items.push(item);
      }
    },
  },

  actions: {
    updateCart({ commit }, product) {
      commit('updateItem', product);
    },
  },
};
