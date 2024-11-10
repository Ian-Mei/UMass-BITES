import { Request, Response, NextFunction } from 'express';
import { DocumentData, Firestore, Timestamp, collection, doc, query, where, getDoc, getDocs, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

export const getLogsByDate = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const date = new Date(req.params.date);
    if (isNaN(date.getTime())) {
      res.status(400).json({ message: 'Invalid date' });
      return;
    }

    const ref = doc(db, 'users', req.params.user);
    const _snap = await getDoc(ref);
    if (!_snap.exists()) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const q = query(
      collection(db, 'logs'),
      where('userId', '==', req.params.user),
      where('timestamp', '>=', Timestamp.fromDate(date)),
      where('timestamp', '<', Timestamp.fromDate(new Date(date.getDate() + 1)))
    );
    const snapshot = await getDocs(q);
    res.json(snapshot.docs.map(doc2Log));
  }
  catch (error: any) {
    next(error);
  }
}

export const getAllLogs = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'users', req.params.user);
    const _snap = await getDoc(ref);
    if (!_snap.exists()) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const q = query(collection(db, 'logs'), where('userId', '==', ref));
    const snapshot = await getDocs(q);
    res.json(snapshot.docs.map(doc2Log));
  }
  catch (error: any) {
    next(error);
  }
}

export const getLogs = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const { from, to } = req.query;
    let q;
    if (from && to) q = query(collection(db, 'logs'), where('timestamp', '>=', from), where('timestamp', '<', to));
    else if (from) q = query(collection(db, 'logs'), where('timestamp', '>=', from));
    else if (to) q = query(collection(db, 'logs'), where('timestamp', '<', to));
    else q = query(collection(db, 'logs'));

    const snapshot = await getDocs(q);
    res.json(snapshot.docs.map(doc2Log));
  }
  catch (error: any) {
    next(error);
  }
}

export const addLog = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const _uref = doc(db, 'users', req.params.user);
    const _usnap = await getDoc(_uref);
    if (!_usnap.exists()) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const _fref = doc(db, 'food', req.params.food);
    const _fsnap = await getDoc(_fref);
    if (!_fsnap.exists()) {
      res.status(404).json({ message: 'Food not found' });
      return;
    }

    const ref = await addDoc(collection(db, 'logs'), {
      userId: _uref,
      foodId: _fref,
      timestamp: serverTimestamp(),
    });
    res.status(201).json({ id: ref.id });
  }
  catch (error: any) {
    next(error);
  }
}

export const deleteLog = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'logs', req.params.id));
    res.status(204).send();
  }
  catch (error: any) {
    next(error);
  }
}

const doc2Log = (s: DocumentData) => ({
  userId: s.data().userId.id,
  foodId: s.data().foodId.id,
  timestamp: s.data().timestamp.toDate(),
});
