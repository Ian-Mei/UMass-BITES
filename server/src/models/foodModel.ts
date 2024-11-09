export interface Food {
  name: string;
  servingSize: number;
  servingUnit: string;
  calories: number;
  calsFromFat: number;
  fat: {
    total: number;
    saturated: number;
    trans: number;
  };
  cholesterol: number;
  sodium: number;
  carbs: {
    total: number;
    fiber: number;
    sugar: number;
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
