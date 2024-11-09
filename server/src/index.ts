import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: 'umass-nuts',
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

try {
  addDoc(collection(db, 'food'), {
    allergens: [
      'Milk',
      'Eggs',
      'Fish',
      'Shellfish',
      'Gluten',
      'Soy',
      'Corn',
      'Sesame',
      'Wheat',
    ],
    calories: 194,
    calsFromFat: 0.6,
    carbs: {
      fiber: 1.8,
      sugar: 1.1,
      total: 36.5,
    },
    fat: {
      saturated: 0.3,
      total: 7.2,
      trans: 0,
    },
    ingredients: 'Water, Ramen Noodles (KENJA BRAND: Unbleached Enriched Wheat Flour (Wheat Flour, (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Unenriched Wheat Flour, Water, Contains 2% or less of: Wheat Gluten, Kansui (Sodium Carbonate, Potassium Carbonate), Salt, Riboflavin, Corn Starch, Sago Starch), Tonkotsu Ramen Soup Base (Water, Pork Extract, Salt, Vegetable Oil (Canola, Sesame Seed), Monosodium Glutamate, Soy Sauce (Water, Wheat, Soybeans, Salt), Sugar, Hydrolyzed Soy Protein, Pork Fat, Garlic Powder, Disodium Inosinate, Disodium Guanylate, White Pepper, Xanthan Gum ), Fish Cake (Alaska Pollock (Fish), Water, Sugar, Modified Food Starch, Salt, Sorbitol, Sweet Rice Wine, Monosodium Glutamate, Color added FD&C Red No. 3, Carmine Color, Sodium Tripolyphosphate, Tetrasodium Pyrophosphate, Sodium Pyrophosphate. Manufactured on equipment that process milk, fish, wheat, soy, egg, shellfish), Bamboo Shoots (Bamboo Shoots, Water, Citric Acid), Local Bok Choy, Enoki Mushrooms, Scallions, Nori Seaweed (Roasted Seaweed)',
    name: 'Tonkotsu Ramen',
    protein: 7.2,
    servingSize: 1,
    servingUnit: 'bowl',
    sodium: 903.6,
    vitamins: {
      calcium: 2,
      iron: 11,
      potassium: 6,
      d: 0,
    },
  });
}
catch (e) {
  console.log('Error', e);
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
