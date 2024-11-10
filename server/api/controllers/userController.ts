import { Request, Response, NextFunction } from 'express';
import { Firestore, collection, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';

import { UserSchema } from '../models/userModel';

export const getUser = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'users', req.params.id);
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) res.json(snapshot.data());
    else res.status(404).json({ message: 'User not found' });
  }
  catch (error: any) {
    next(error);
  }
}

export const addUser = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    UserSchema.strict().parse(req.body);

    const ref = await addDoc(collection(db, 'users'), req.body);
    res.status(201).json({ id: ref.id });
  }
  catch (error: any) {
    next(error);
  }
}

export const editUser = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'users', req.params.id);
    await updateDoc(ref, req.body);
    const snapshot = await getDoc(ref);
    snapshot.exists() ? res.json({ data: snapshot.data() }) : res.status(404).json({ message: 'User not found' });
  }
  catch (error: any) {
    next(error);
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'users', req.params.id);
    await updateDoc(ref, {
      active: false,
    })

    const snapshot = await getDoc(ref);
    snapshot.exists() ? res.status(204).send() : res.status(404).json({ message: 'User not found' });
  }
  catch (error: any) {
    next(error);
  }
}
