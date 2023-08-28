export const getters = {
  filterProduct: (state, getters) => (name) => {
    return state.filters.find(filter => filter.name == name)
},
filterCategory: (state, getters) => (category) => {
  return state.products.find(product => product.category == category)
},

}
