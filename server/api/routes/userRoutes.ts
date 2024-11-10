import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getUser, addUser, editUser, deleteUser } from '../controllers/userController';

const db = getDb();

router.get('/:id', (req, res, next) => getUser(req, res, next, db));
router.post('/add', (req, res, next) => addUser(req, res, next, db));
router.put('/edit/:id', (req, res, next) => editUser(req, res, next, db));
router.delete('/delete/:id', (req, res, next) => deleteUser(req, res, next, db));

module.exports = router;
