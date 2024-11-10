import { Request, Response, NextFunction } from 'express';
import { DocumentData, Firestore, collection, doc, getDoc, getDocs, addDoc } from 'firebase/firestore';

import { FoodSchema } from '../models/foodModel';

export const getFood = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const ref = doc(db, 'food', req.params.id);
    
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) {
      res.status(404).json({ message: 'Food not found' });
      return;
    }
    
    res.json(snapshot);
  }
  catch (error: any) {
    next(error);
  }
}

export const getAllFood = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    const snapshot = await getDocs(collection(db, 'food'));
    res.json(snapshot.docs.map(doc2Food));
  }
  catch (error: any) {
    next(error);
  }
};

export const addFood = async (req: Request, res: Response, next: NextFunction, db: Firestore): Promise<void> => {
  try {
    FoodSchema.strict().parse(req.body);

    const ref = await addDoc(collection(db, 'food'), req.body);
    res.status(201).json({
      id: ref.id,
      ...req.body,
    });
  }
  catch (error: any) {
    next(error);
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
  ingredients: d.data().ingredients,
  allergens: d.data().allergens,
  time:d.data().time,
  hall:d.data().hall,
  station:d.data().station,
  nutritionVal: d.data().nutritionVal
});
