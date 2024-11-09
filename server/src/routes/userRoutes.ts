import express from 'express';
const router = express.Router();

import { getDb } from '../database';
import { getUser, addUser, editUser, deleteUser } from '../controllers/userController';

const db = getDb();

router.get('/:id', (req, res) => getUser(req, res, db));
router.post('/add', (req, res) => addUser(req, res, db));
router.put('/edit/:id', (req, res) => editUser(req, res, db));
router.delete('/delete/:id', (req, res) => deleteUser(req, res, db));

module.exports = router;
