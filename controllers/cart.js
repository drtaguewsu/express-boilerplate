import { getProduct } from '../middleware/productService.js';

export async function add(req, res, next) {
    const parsedId = isNaN(Number(req.params.id)) ? null : Number(req.params.id);
    const parsedQty = isNaN(Number(req.params.qty)) ? 1 : Number(req.params.qty);
    if (!parsedId) {
        return res.status(200).render('cart', { cart: req.cart.items, message: 'No Product Provided' });
    }
    try {
        await req.cart.addToCart(parsedId, parsedQty, getProduct);
        res.status(200).render('cart', { cart: req.cart.items, message: 'Product added to cart' });
    } catch (err) {
        res.status(500).render('cart', { cart: [], message: err.message });
    }
}
