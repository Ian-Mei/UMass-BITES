import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getDailies,editDailies,addDailies,deleteDailies} from '../controllers/dailiesController';

const db = getDb();

router.get('/:id', (req, res, next) => getDailies(req, res, next, db));
router.post('/add', (req, res, next) => addDailies(req, res, next, db));
router.put('/edit/:id', (req, res, next) => editDailies(req, res, next, db));
router.delete('/delete/:id', (req, res, next) => deleteDailies(req, res, next, db));

module.exports = router;
