import { Request, Response } from 'express';
import { DocumentData, Firestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { Food } from '../models/foodModel';

export const getAllFood = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  const ret: Food[] = [];

  try {
    const snapshot = await getDocs(collection(db, 'food'));
    snapshot.forEach(s => ret.push(doc2Food(s)));
    res.json(ret);
  } catch (error: any) {
    res.status(500).send({ message: 'Error fetching food' })
  }
};

export const getFoodById = async (req: Request, res: Response, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'food', req.params.id);
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) res.json(snapshot.data());
    else res.status(404).json({ message: 'Food not found' })
  } catch (error: any) {
    res.status(500).send({ message: 'Error fetching food' })
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
  cholesterol: d.data().number,
  sodium: d.data().number,
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
