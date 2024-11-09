import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getAllFood, getFood } from '../controllers/foodController';

const db = getDb();

router.get('/', (req, res) => getAllFood(req, res, db));
router.get('/:id', (req, res) => getFood(req, res, db));

module.exports = router;
