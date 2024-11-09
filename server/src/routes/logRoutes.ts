import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getLogsByDate, getAllLogs, addLog, deleteLog } from '../controllers/logController';

const db = getDb();

router.get('/:user', (req, res) => getAllLogs(req, res, db));
router.delete('/:user/delete/:id', (req, res) => deleteLog(req, res, db));
router.post('/:user/:food/add', (req, res) => addLog(req, res, db));
router.get('/:user/:date', (req, res) => getLogsByDate(req, res, db));

module.exports = router;
