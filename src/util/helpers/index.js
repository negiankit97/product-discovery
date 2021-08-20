import store from "../../store";

const filteredProducts = state => {
    const { products } = store.getState();
    let filteredProduct;
    if(!!state.gender) {
        filteredProduct = products.filter(product => state.gender === product.gender) 
    }
    if(state.categories.length) {
        filteredProduct = !!state.gender ? filteredProduct.filter(product => state.categories.includes(product.category)) : products.filter(product => state.categories.includes(product.category))
    }
    if(state.brands.length) {
        filteredProduct = state.gender || state.categories.length ? filteredProduct.filter(product => state.brands.includes(product.brand)) : products.filter(product => state.brands.includes(product.brand))
    }

    return filteredProduct;
}

export {filteredProducts};