import { type Vector3 } from "./core";

// Defines the two possible roles in the game.
type PlayerRole = 'Chef' | 'Imposter';

// Represents the state of a single player.
interface PlayerState {
  id: string; // Unique identifier for the player.
  name: string;
  role: PlayerRole;
  position: Vector3;
  rotation: Vector3; // Using Euler angles for simplicity.
  isAlive: boolean; // For future features like being "caught".
  // Could add more, like inventory, held items, etc.
}

// Represents the overall state of the game world.
interface GameState {
  players: PlayerState[];
  customers: CustomerState[];
  orders: Order[];
  farm: FarmState;
  barn: BarnState;
  timer: number; // Game timer in seconds.
  imposterCaught: boolean; // Track if the Imposter has been revealed.
  environmentSabotages: EnvironmentSabotage[];
}

import { SabotageType } from './food';
import { GameEvent, PlayerHarvestedVegetableEvent, CustomerOrderFulfilledEvent, ImposterSabotagedMealEvent, GameEvents } from './events';

enum EnvironmentSabotageType {
  MessUpKitchen = 'messUpKitchen',
  DisableLights = 'disableLights',
  ContaminateWaterSupply = 'contaminateWaterSupply',
}

interface EnvironmentSabotage {
  type: EnvironmentSabotageType;
  playerId: string; // ID of the imposter who performed the action
  timestamp: number;
}


// Represents a single customer with their order.
interface CustomerState {
  id: string;
  position: Vector3;
  orderId: string;
  patience: number; // A timer or value that decreases over time.
}

// Represents a single order from a customer.
interface Order {
  id: string;
  recipeId: string;
  customerId: string;
  status: OrderStatus;
  assignedChefId?: string; // ID of the chef assigned to the order
  mealId?: string; // ID of the meal that fulfills this order
}

enum OrderStatus {
  Pending = 'pending',
  InProgress = 'in-progress',
  Cooking = 'cooking',
  Served = 'served',
  Failed = 'failed',
}

// Represents a single plot on the farm where vegetables grow.
interface FarmPlot {
  id: string;
  position: Vector3;
  status: 'empty' | 'planted' | 'growing' | 'harvestable';
  vegetableId: string | null;
  growthProgress: number; // Percentage of growth.
  lastFertilizedTime?: number; // Timestamp of the last time the plot was fertilized
}

// Represents a crop that can be grown.
interface Vegetable {
  id: string;
  name: string;
  growthTime: number; // Time in seconds to grow.
}

// Represents the state of the entire farm.
interface FarmState {
  plots: FarmPlot[];
  // Could include other state like water levels, pest status, etc.
}

// Represents an animal in the barn.
interface Animal {
  id: string;
  type: 'cow' | 'chicken';
  health: number;
  happiness: number;
  lastProductTime: number; // Timestamp of the last time a product was gathered.
}

// Represents the state of the entire barn.
interface BarnState {
  animals: Animal[];
    cleanliness: number; // A score from 0.0 to 1.0 representing barn cleanliness
  // Could include food supply, cleanliness status, etc.
}

// Represents a specific sabotage action performed by the Imposter.
interface SabotageAction {
  type: SabotageType;
  targetId: string; // The ID of the item or location being sabotaged.
  playerId: string; // The ID of the imposter who performed the action.
  timestamp: number;
}
