// The final meal created by a player.
interface Meal {
  id: string;
  recipeId: string;
  ingredients: Ingredient[];
  finalQuality: number;
  isSabotaged: boolean;
  sabotageDetails?: SabotageDetails; // Details about how the meal was sabotaged, if applicable
  // The player who made it could be tracked here.
}

interface SabotageDetails {
  type: SabotageType;
  playerId: string; // ID of the imposter who performed the sabotage
  timestamp: number;
}

export enum SabotageType {
  SpoilIngredient = 'spoilIngredient',
  ContaminateFood = 'contaminateFood',
  PoisonMeal = 'poisonMeal',
}

// A full recipe detailing ingredients and steps.
export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  steps: string[]; // Array of instructions
  requiredTools: string[]; // Array of tool IDs
  cookingTime: number; // Time in seconds
}

// An item used in cooking, e.g., a tomato, milk.
interface Ingredient {
  type: 'vegetable' | 'animalProduct';
  name: string;
  quality: number; // A score from 0.0 to 1.0.
  isSabotaged: boolean; // Flag to indicate if the ingredient has been tampered with.
  sabotageDetails?: SabotageDetails; // Details about how the ingredient was sabotaged, if applicable
}