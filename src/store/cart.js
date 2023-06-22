export const useCartStore = {
  state: { items: [] },

  getters: {
    itemsCount: (state) => {
      if (state.items.length) {
        return state.items.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0);
      }
      return 0;
    },
    allItems: (state) => state.items,
    itemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
    totalPrice: (state) => {
      if (state.items.length) {
        return state.items.reduce((acc, item) => {
          return (acc + item.quantity * item.price).toFixed(2);
        }, 0);
      }
      return 0;
    },
    totalOldPrice: (state) => {
      if (state.items.length) {
        return state.items.reduce((acc, item) => {
          return (acc + item.quantity * item.oldPrice).toFixed(2);
        }, 0);
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
