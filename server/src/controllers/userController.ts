import { Request, Response } from 'express';
import { Firestore, collection, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';

export const getUser = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'users', req.params.id);
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) res.json(snapshot.data());
    else res.status(404).json({ message: 'User not found' });
  }
  catch (error: any) {
    res.status(500).json({ message: `Error fetching user: ${error}` });
  }
}

export const addUser = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const ref = await addDoc(collection(db, 'users'), req.body);
    res.status(201).json({ id: ref.id });
  }
  catch (error: any) {
    res.status(500).json({ message: `Error adding user: ${error}` });
  }
}

export const editUser = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'users', req.params.id);
    await updateDoc(ref, req.body);
    const snapshot = await getDoc(ref);
    snapshot.exists() ? res.json({ data: snapshot.data() }) : res.status(404).json({ message: 'User not found' });
  }
  catch (error: any) {
    res.status(500).json({ message: `Error editing user: ${error}` });
  }
}

export const deleteUser = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'users', req.params.id);
    await updateDoc(ref, {
      active: false,
    })

    const snapshot = await getDoc(ref);
    snapshot.exists() ? res.status(204).send() : res.status(404).json({ message: 'User not found' });
  }
  catch (error: any) {
    res.status(500).json({ message: `Error deleting user: ${error}` });
  }
}
