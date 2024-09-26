import {test, suite, beforeEach, after} from 'node:test';
import assert from 'node:assert';
import {CartService} from '../middleware/cartMiddleware.js';
import {getProduct} from '../middleware/productService.js';


const cart = new CartService([]);
suite('Cart Service', () => {
    beforeEach(() => {
        cart.items = [];
    });
    test('Able to add new product to cart', async () => {
        const id = 1;
        const quantity = 2;
        await cart.addToCart(id, quantity, getProduct);
        assert.strictEqual(cart.items.length, 1, 'Cart should have 1 item');
        assert.strictEqual(cart.items[0].id, id, 'Product ID should match');
        assert.strictEqual(cart.items[0].qty, quantity, 'Product quantity should match');
    });
    test('Able to add existing product to cart', async () => {
        const id = 1;
        const quantity = 2;
        cart.items.push({id: 1, name: 'Product 1', price: 10, qty: 1});
        await cart.addToCart(id, quantity, getProduct);
        assert.strictEqual(cart.items.length, 1, 'Cart should have 1 item');
        assert.strictEqual(cart.items[0].id, id, 'Product ID should match');
        assert.strictEqual(cart.items[0].qty, 3, 'Product quantity should be updated');
    });
    test('Throw error if product not found', async () => {
        const id = 4;
        const quantity = 2;
        try {
            await cart.addToCart(id, quantity, getProduct);
        } catch(err) {
            assert.strictEqual(err.message, 'Product not found', 'Error message should match');
        }
    });
        
    after(() => {
        // Teardown
    });
});

    