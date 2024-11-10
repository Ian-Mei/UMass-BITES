import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getLogsByDate, getAllLogs, addLog, deleteLog } from '../controllers/logController';

const db = getDb();

router.get('/:user', (req, res, next) => getAllLogs(req, res, next, db));
router.delete('/:user/delete/:id', (req, res, next) => deleteLog(req, res, next, db));
router.post('/:user/:food/add', (req, res, next) => addLog(req, res, next, db));
router.get('/:user/:date', (req, res, next) => getLogsByDate(req, res, next, db));

module.exports = router;
