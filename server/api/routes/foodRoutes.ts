import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getAllFood, getFood, addFood } from '../controllers/foodController';

const db = getDb();

router.get('/', (req, res, next) => getAllFood(req, res, next, db));
router.post('/add', (req, res, next) => addFood(req, res, next, db));
router.get('/:id', (req, res, next) => getFood(req, res, next, db));

module.exports = router;
