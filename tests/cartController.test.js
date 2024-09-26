import { test, suite, after } from 'node:test';
import request from 'supertest';
import assert from 'assert';
import { app, runningServer } from '../app.js';

let sessionCookie;
suite('Cart Controller', () => {
    test('Able to add new product to cart', async () => {
        const response = await request(app)
            .get('/cart/add/1/2')
            .expect(200);
        sessionCookie = response.header['set-cookie'];
        assert.strictEqual(response.text.includes(
            '<li>Product - $10 - Qty 2</li>'),
            true,
            'Product added message should be displayed'
        );

    });
    test('Able to add existing product to cart', async () => {
        const response = await request(app)
            .get('/cart/add/1/1')
            .set('Cookie', sessionCookie)
            .expect(200);
        assert.strictEqual(response.text.includes(
            '<li>Product - $10 - Qty 3</li>'),
            true,
            'Product updated message should be displayed'
        );
    });
    after(() => {
        // Teardown
        runningServer.close();
    })
});

