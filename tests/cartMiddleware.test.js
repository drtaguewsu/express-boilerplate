import { suite, test } from 'node:test';
import assert from 'node:assert';
import { cartMiddleware } from '../middleware/cartMiddleware.js';

suite('Cart Middleware', () => {
    test('Initialize cart if not present', () => {
        const req = { session: {} };
        const res = {};
        const next = () => { };
        cartMiddleware(req, res, next);
        assert.strictEqual(req.session.cart.length, 0, 'Cart should be initialized');
    });
    test('Initialize cart if present', () => {
        const req = { session: { cart: [{ id: 1, qty: 1 }] } };
        const res = {};
        const next = () => { };
        cartMiddleware(req, res, next);
        assert.strictEqual(req.session.cart.length, 1, 'Cart should be initialized');
    });
});
