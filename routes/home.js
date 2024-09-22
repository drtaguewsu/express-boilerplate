import express from 'express';
import * as home from '../controllers/home.js';
import authorise from '../middleware/authorise.js';

export const homeRouter = express.Router()

// Below are all the routes for the home
homeRouter.get('/', home.index);
