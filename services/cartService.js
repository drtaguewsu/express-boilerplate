import {getProduct} from '../services/productService.js';

export async function addToCart(cart, id, quantity) {
    // If the product is already in the cart
    const inCart = cart.find(item => item.id === id);
    if(inCart) {
        inCart.qty += quantity;
    } else {
        // Logic to get the product details from the DB
        const product = await getProduct(id);
        if(product) {
            product.qty = quantity;
            cart.push(product);
        } else {
            throw new Error('Product not found');
        }
    }
}
