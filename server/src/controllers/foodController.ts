import { Request, Response } from 'express';
import { DocumentData, Firestore, collection, doc, getDoc, getDocs, addDoc } from 'firebase/firestore';

export const getFood = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'food', req.params.id);
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) res.json(snapshot);
    else res.status(404).json({ message: 'Food not found' });
  }
  catch (error: any) {
    res.status(500).json({ message: `Error fetching food: ${error}` });
  }
}

export const getAllFood = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const snapshot = await getDocs(collection(db, 'food'));
    res.json(snapshot.docs.map(doc2Food));
  }
  catch (error: any) {
    res.status(500).json({ message: `Error fetching food: ${error}` });
  }
};

export const addFood = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const ref = await addDoc(collection(db, 'food'), req.body);
    res.status(201).json({ id: ref.id });
  }
  catch (error: any) {
    res.status(500).json({ message: `Error adding food: ${error}` });
  }
}

const doc2Food = (d: DocumentData) => ({
  name: d.data().name,
  servingSize: d.data().servingSize,
  servingUnit: d.data().servingUnit,
  calories: d.data().calories,
  calsFromFat: d.data().calsFromFat,
  fat: {
    total: d.data().fat.total,
    saturated: d.data().fat.saturated,
    trans: d.data().fat.trans,
  },
  cholesterol: d.data().cholesterol,
  sodium: d.data().sodium,
  carbs: {
    total: d.data().carbs.total,
    fiber: d.data().carbs.fiber,
    sugar: d.data().carbs.sugar,
  },
  protein: d.data().protein,
  vitamins: {
    calcium: d.data().vitamins.calcium,
    iron: d.data().vitamins.iron,
    potassium: d.data().vitamins.potassium,
    d: d.data().vitamins.d,
  },
  ingredients: d.data().ingredients,
  allergens: d.data().allergens,
});
