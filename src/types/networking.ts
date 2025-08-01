// Networking types
export type ClientToServerMessage =
  | { type: 'playerInput'; input: any }
  | { type: 'chatMessage'; message: string }
  | { type: 'interact'; targetId: string };

export type ServerToClientMessage =
  | { type: 'gameStateUpdate'; state: any }
  | { type: 'chatMessage'; message: string }
  | { type: 'playerJoined'; playerId: string; name: string }
  | { type: 'playerLeft'; playerId: string };
