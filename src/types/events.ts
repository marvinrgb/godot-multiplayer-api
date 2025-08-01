import { SabotageType } from './food';

// Game event types
interface GameEvent {
  type: string;
  timestamp: number;
}

interface PlayerHarvestedVegetableEvent extends GameEvent {
  type: 'playerHarvestedVegetable';
  playerId: string;
  vegetableId: string;
  plotId: string;
}

interface CustomerOrderFulfilledEvent extends GameEvent {
  type: 'customerOrderFulfilled';
  customerId: string;
  orderId: string;
  mealId: string;
}

interface ImposterSabotagedMealEvent extends GameEvent {
  type: 'imposterSabotagedMeal';
  imposterId: string;
  mealId: string;
  sabotageType: SabotageType;
}

type GameEvents =
  | PlayerHarvestedVegetableEvent
  | CustomerOrderFulfilledEvent
  | ImposterSabotagedMealEvent;

export type { GameEvent, PlayerHarvestedVegetableEvent, CustomerOrderFulfilledEvent, ImposterSabotagedMealEvent, GameEvents };