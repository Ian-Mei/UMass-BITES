export interface DayData {
    day: string;
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
  }
  
  export interface OverallData {
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
  }

  export interface FoodItem{
    location:string;
    name:string;
    calories:number;
  }

export interface Food {
  name: string;
  servingSize: number;
  servingUnit: string;
  calories: number;
  calsFromFat: number;
  fat: {
    total: number,
    saturated: number,
    trans: number,
  };
  cholesterol: number;
  sodium: number;
  carbs: {
    total: number,
    fiber: number,
    sugar: number,
  };
  protein: number;
  ingredients: string;
  allergens: string[];
  time: string;
  station: string;
  hall: string;
  nutritionVal:number;
}

export interface User {
  firstName: string;
  lastName: string;
  profilePicture: string;
  currentStreak: number;
  maxStreak: number;
  weight: number;
  height: number;
  goalCals: number;
  goalProtein: number;
  allergies: string[];
}

export interface Log {
  userId: string;
  foodId: string;
  timestamp: Date;
}
