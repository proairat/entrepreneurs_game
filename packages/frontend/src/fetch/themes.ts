// Mock object represent database data
import { EEntityState, EEntityType } from "share/types/enums";
import type { ITheme } from "share/types/interfaces";
import type { TElemsList } from "share/types/types";

/**
 * THEMES
 */
const themes: TElemsList<number, ITheme> | undefined = new Map();
// id_module 1
themes.set(1, [
  {
    id: 1,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "Введение",
  },
  {
    id: 2,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "Бизнес как профессия",
  },
  {
    id: 3,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "С чего начать новый бизнес?",
  },
  {
    id: 4,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "Бизнес-модель",
  },
  {
    id: 5,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 6,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 7,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 1",
  },
  {
    id: 8,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 9,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 10,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 11,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "Интересная тема",
  },
  {
    id: 12,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 13,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 14,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 2",
  },
  {
    id: 15,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 16,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 17,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 18,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "одиннадцать 1",
  },
  {
    id: 19,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1",
  },
  {
    id: 20,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "11",
  },
  {
    id: 21,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "111",
  },
  {
    id: 22,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e4 1",
  },
  {
    id: 23,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e5 1",
  },
  {
    id: 24,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1е6 1",
  },
  {
    id: 25,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e7 1",
  },
  {
    id: 26,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e8 1",
  },
  {
    id: 27,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "1e9 1",
  },
  {
    id: 28,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 3",
  },
]);

// id_module 2
themes.set(2, [
  {
    id: 29,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 2 theme 1",
  },
  {
    id: 30,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "two",
  },
  {
    id: 31,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "sdfg",
  },
  {
    id: 32,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 33,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 34,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 35,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "7",
  },
  {
    id: 36,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 37,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 38,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 39,
    type: EEntityType.Tests,
    state: EEntityState.Default,
    title: "Тестирование 4",
  },
]);

// id_module 3
themes.set(3, [
  {
    id: 40,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 3 theme 1",
  },
  {
    id: 41,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 42,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "sdfg",
  },
  {
    id: 43,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 44,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 45,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 46,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "7",
  },
  {
    id: 47,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 48,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 49,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
]);

// id_module 4
themes.set(4, [
  {
    id: 51,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 4 theme 1",
  },
  {
    id: 52,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 4 theme 2",
  },
  {
    id: 53,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "sdfg",
  },
  {
    id: 54,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "fghjfhj",
  },
  {
    id: 55,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "zxcv",
  },
  {
    id: 56,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 57,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "7",
  },
  {
    id: 58,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 59,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 60,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
  {
    id: 61,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "что-то ещё",
  },
  {
    id: 62,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 63,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "234",
  },
  {
    id: 64,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
]);

// id_module 5
themes.set(5, [
  {
    id: 66,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 5 theme 1",
  },
  {
    id: 67,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 68,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "sdfg",
  },
  {
    id: 69,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "fghjfhj",
  },
  {
    id: 70,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "zxcv",
  },
]);

// id_module 6
themes.set(6, [
  {
    id: 72,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 6 theme 1",
  },
  {
    id: 73,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 74,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "345345",
  },
  {
    id: 75,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "topic 6 theme 4",
  },
  {
    id: 76,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "asdf",
  },
  {
    id: 77,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "234",
  },
  {
    id: 78,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "десять",
  },
]);

// id_module 7
themes.set(7, [
  {
    id: 80,
    type: EEntityType.Tests,
    state: EEntityState.Active,
    title: "Тестирование 5",
  },
]);

// id_module 8
themes.set(8, [
  {
    id: 81,
    type: EEntityType.Topics,
    state: EEntityState.Active,
    title: "topic 8 theme 1",
  },
  {
    id: 82,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "two",
  },
  {
    id: 83,
    type: EEntityType.Topics,
    state: EEntityState.Default,
    title: "three",
  },
]);

export { themes };
