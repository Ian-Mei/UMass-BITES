import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getAllFood, getFoodById } from '../controllers/foodController';

router.get('/', (req, res) => getAllFood(req, res, getDb()));
router.get('/:id', (req, res) => getFoodById(req, res, getDb()));

module.exports = router;
