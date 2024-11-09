export interface Food {
  name: string;
  servingSize: number;
  servingUnit: string;
  calories: number;
  calsFromFat: number;
  fat: {
    saturated: number;
    total: number;
    trans: number;
  };
  cholesterol: number;
  sodium: number;
  carbs: {
    fiber: number;
    sugar: number;
    total: number;
  };
  protein: number;
  vitamins: {
    calcium: number;
    iron: number;
    potassium: number;
    d: number;
  };
  ingredients: string;
  allergens: string[];
}
