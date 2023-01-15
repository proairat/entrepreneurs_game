// Mock object represent database data
import { EEntityType, EEntityState } from "@/types/enums";
import type { IGuess } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

/**
 * TESTS GUESSES
 */
const guesses: TElemsList<number, IGuess> | undefined = new Map();

// id_test 7
guesses.set(7, [
  {
    id: 1,
    type: EEntityType.Guesses,
    state: EEntityState.Active,
  },
  {
    id: 2,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 3,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 4,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 5,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 6,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 7,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 8,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 9,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
  {
    id: 10,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
]);

// id_test 14
guesses.set(14, [
  {
    id: 11,
    type: EEntityType.Guesses,
    state: EEntityState.Active,
  },
  {
    id: 12,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
]);

// id_test 28
guesses.set(28, [
  {
    id: 13,
    type: EEntityType.Guesses,
    state: EEntityState.Active,
  },
  {
    id: 14,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
]);

// id_test 39
guesses.set(39, [
  {
    id: 15,
    type: EEntityType.Guesses,
    state: EEntityState.Active,
  },
  {
    id: 16,
    type: EEntityType.Guesses,
    state: EEntityState.Undefined,
  },
]);

// id_test 80
guesses.set(80, [
  {
    id: 17,
    type: EEntityType.Guesses,
    state: EEntityState.Active,
  },
]);

export { guesses };
