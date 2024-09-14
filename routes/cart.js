import express from 'express';
import * as cart from '../controllers/cart.js';

const cartRouter = express.Router()
export default cartRouter;

cartRouter.get('/add/:id?/:qty?', cart.add);