export interface Item {
  id: string;
  name: string;
  description: string;
  type: 'vegetable' | 'animalProduct' | 'tool' | 'meal';
  quality?: number; // A score from 0.0 to 1.0, if applicable
}

export interface Inventory {
  items: { [itemId: string]: number }; // Map of item IDs to quantities
}
