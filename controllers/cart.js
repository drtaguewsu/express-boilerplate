import { addToCart } from '../services/cartService.js';

export async function add(req, res, next) {
    const {id, qty = 1} = req.params;
    req.session.cart = req.session.cart || [];

    if(!id) {
        return res.render('cart', { cart: req.session.cart, message: 'No Product Provided' });
    }
    
    try {
        await addToCart(req.session.cart, id, qty);
        res.render('cart', { cart: req.session.cart, message: 'Product added to cart' });
    } catch(err) {
        res.status(500).send('Error adding to cart');
    }
}
