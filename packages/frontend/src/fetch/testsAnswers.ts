// Mock object represent database data
import { EEntityState, EEntityType } from "share/types/enums";
import type { ITestAnswer } from "share/types/interfaces";
import type { TElemsList } from "share/types/types";

/**
 * TESTS ANSWERS
 */
const testsAnswers: TElemsList<number, ITestAnswer> | undefined = new Map();

// id_question 1
testsAnswers.set(1, [
  {
    id: 1,
    type: EEntityType.TestsAnswers,
    answer: "2004",
    state: EEntityState.Unlocked,
  },
  {
    id: 2,
    type: EEntityType.TestsAnswers,
    answer: "1998",
    state: EEntityState.Unlocked,
  },
  {
    id: 3,
    type: EEntityType.TestsAnswers,
    answer: "2000",
    state: EEntityState.Unlocked,
  },
  {
    id: 4,
    type: EEntityType.TestsAnswers,
    answer: "2002",
    state: EEntityState.Unlocked,
  },
]);

// id_question 2
testsAnswers.set(2, [
  {
    id: 5,
    type: EEntityType.TestsAnswers,
    answer: "налог на оборот",
    state: EEntityState.Unlocked,
  },
  {
    id: 6,
    type: EEntityType.TestsAnswers,
    answer: "основная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    id: 7,
    type: EEntityType.TestsAnswers,
    answer: "упрощенная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    id: 8,
    type: EEntityType.TestsAnswers,
    answer: " единый сельскохозяйственный налог",
    state: EEntityState.Unlocked,
  },
  {
    id: 9,
    type: EEntityType.TestsAnswers,
    answer: "патентная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    id: 10,
    type: EEntityType.TestsAnswers,
    answer: "налог на профессиональный доход",
    state: EEntityState.Unlocked,
  },
]);

// id_question 3
testsAnswers.set(3, [
  {
    id: 11,
    type: EEntityType.TestsAnswers,
    answer: "6%",
    state: EEntityState.Unlocked,
  },
  {
    id: 12,
    type: EEntityType.TestsAnswers,
    answer: "8%",
    state: EEntityState.Unlocked,
  },
  {
    id: 13,
    type: EEntityType.TestsAnswers,
    answer: "4%",
    state: EEntityState.Unlocked,
  },
  {
    id: 14,
    type: EEntityType.TestsAnswers,
    answer: "10%",
    state: EEntityState.Unlocked,
  },
]);

// id_question 4
testsAnswers.set(4, [
  {
    id: 15,
    type: EEntityType.TestsAnswers,
    answer: "наёмных работников",
    state: EEntityState.Unlocked,
  },
  {
    id: 16,
    type: EEntityType.TestsAnswers,
    answer: "сезонных работников",
    state: EEntityState.Unlocked,
  },
  {
    id: 17,
    type: EEntityType.TestsAnswers,
    answer: "самозанятых",
    state: EEntityState.Unlocked,
  },
]);

// id_question 5
testsAnswers.set(5, [
  {
    id: 18,
    type: EEntityType.TestsAnswers,
    answer: "не позднее 1 октября",
    state: EEntityState.Unlocked,
  },
  {
    id: 19,
    type: EEntityType.TestsAnswers,
    answer: "не позднее 1 ноября",
    state: EEntityState.Unlocked,
  },
  {
    id: 20,
    type: EEntityType.TestsAnswers,
    answer: "не позднее 1 января",
    state: EEntityState.Unlocked,
  },
  {
    id: 21,
    type: EEntityType.TestsAnswers,
    answer: "не позднее 1 декабря",
    state: EEntityState.Unlocked,
  },
]);

// id_question 6
testsAnswers.set(6, [
  {
    id: 22,
    type: EEntityType.TestsAnswers,
    answer: "Нет",
    state: EEntityState.Unlocked,
  },
  {
    id: 23,
    type: EEntityType.TestsAnswers,
    answer: "Да",
    state: EEntityState.Unlocked,
  },
]);

// id_question 7
testsAnswers.set(7, [
  {
    id: 24,
    type: EEntityType.TestsAnswers,
    answer:
      "Начиная с налогового периода, следующего за полугодом представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
  {
    id: 25,
    type: EEntityType.TestsAnswers,
    answer:
      "Начиная с налогового периода, следующего за месяцем представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
  {
    id: 26,
    type: EEntityType.TestsAnswers,
    answer:
      "Начиная с налогового периода, следующего за годом представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
]);

// id_question 8
testsAnswers.set(8, [
  {
    id: 27,
    type: EEntityType.TestsAnswers,
    answer:
      "На пенсионное страхование - 27%, на медицинское страхование - 9.1%, на социальное страхование - 0,9%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    id: 28,
    type: EEntityType.TestsAnswers,
    answer:
      "На пенсионное страхование - 20%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 2.2, до 5.5%",
    state: EEntityState.Unlocked,
  },
  {
    id: 29,
    type: EEntityType.TestsAnswers,
    answer:
      "На пенсионное страхование - 22%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    id: 30,
    type: EEntityType.TestsAnswers,
    answer:
      "На пенсионное страхование - 18%, на медицинское страхование - 7%, на социальное страхование - 2,3%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    id: 31,
    type: EEntityType.TestsAnswers,
    answer:
      "На пенсионное страхование - 17%, на медицинское страхование - 3.1%, на социальное страхование - 1,9%, взносы за травматизм - от 2.7, до 6.5%",
    state: EEntityState.Unlocked,
  },
]);

// id_question 9
testsAnswers.set(9, [
  {
    id: 32,
    type: EEntityType.TestsAnswers,
    answer: "Да",
    state: EEntityState.Unlocked,
  },
  {
    id: 33,
    type: EEntityType.TestsAnswers,
    answer: "Нет",
    state: EEntityState.Unlocked,
  },
]);

// id_question 10
testsAnswers.set(10, [
  {
    id: 34,
    type: EEntityType.TestsAnswers,
    answer: "В пенсионный фонд",
    state: EEntityState.Unlocked,
  },
  {
    id: 35,
    type: EEntityType.TestsAnswers,
    answer: "В фонд обязательного медицинского страхования",
    state: EEntityState.Unlocked,
  },
  {
    id: 36,
    type: EEntityType.TestsAnswers,
    answer: "В фонд добровольного медицинского страхования",
    state: EEntityState.Unlocked,
  },
]);

// id_question 11
testsAnswers.set(11, [
  {
    id: 37,
    type: EEntityType.TestsAnswers,
    answer: "4",
    state: EEntityState.Unlocked,
  },
  {
    id: 38,
    type: EEntityType.TestsAnswers,
    answer: "5",
    state: EEntityState.Unlocked,
  },
  {
    id: 39,
    type: EEntityType.TestsAnswers,
    answer: "6",
    state: EEntityState.Unlocked,
  },
  {
    id: 40,
    type: EEntityType.TestsAnswers,
    answer: "7",
    state: EEntityState.Unlocked,
  },
  {
    id: 41,
    type: EEntityType.TestsAnswers,
    answer: "8",
    state: EEntityState.Unlocked,
  },
  {
    id: 42,
    type: EEntityType.TestsAnswers,
    answer: "9",
    state: EEntityState.Unlocked,
  },
  {
    id: 43,
    type: EEntityType.TestsAnswers,
    answer: "10",
    state: EEntityState.Unlocked,
  },
  {
    id: 44,
    type: EEntityType.TestsAnswers,
    answer: "11",
    state: EEntityState.Unlocked,
  },
  {
    id: 45,
    type: EEntityType.TestsAnswers,
    answer: "12",
    state: EEntityState.Unlocked,
  },
]);

// id_question 12
testsAnswers.set(12, [
  {
    id: 46,
    type: EEntityType.TestsAnswers,
    answer: "Лиссабон",
    state: EEntityState.Unlocked,
  },
  {
    id: 47,
    type: EEntityType.TestsAnswers,
    answer: "Рейкьявик",
    state: EEntityState.Unlocked,
  },
  {
    id: 48,
    type: EEntityType.TestsAnswers,
    answer: "Манагуа",
    state: EEntityState.Unlocked,
  },
]);

// id_question 13
testsAnswers.set(13, [
  {
    id: 49,
    type: EEntityType.TestsAnswers,
    answer: "Да",
    state: EEntityState.Unlocked,
  },
  {
    id: 50,
    type: EEntityType.TestsAnswers,
    answer: "Нет",
    state: EEntityState.Unlocked,
  },
]);

// id_question 14
testsAnswers.set(14, [
  {
    id: 51,
    type: EEntityType.TestsAnswers,
    answer: "убавишь",
    state: EEntityState.Unlocked,
  },
  {
    id: 52,
    type: EEntityType.TestsAnswers,
    answer: "добавишь",
    state: EEntityState.Unlocked,
  },
  {
    id: 53,
    type: EEntityType.TestsAnswers,
    answer: "выкинешь",
    state: EEntityState.Unlocked,
  },
  {
    id: 54,
    type: EEntityType.TestsAnswers,
    answer: "с глаголом пишется раздельно",
    state: EEntityState.Unlocked,
  },
]);

// id_question 15
testsAnswers.set(15, [
  {
    id: 55,
    type: EEntityType.TestsAnswers,
    answer: "Горное травянистое растение семейства Сложноцветных",
    state: EEntityState.Unlocked,
  },
  {
    id: 56,
    type: EEntityType.TestsAnswers,
    answer: "Полевое травянистое растение семейства Одноцветных",
    state: EEntityState.Unlocked,
  },
  {
    id: 57,
    type: EEntityType.TestsAnswers,
    answer: "Луговое травянистое растение семейства Пучковых",
    state: EEntityState.Unlocked,
  },
  {
    id: 58,
    type: EEntityType.TestsAnswers,
    answer: "Песчаное травянистое растение семейства Ложноцветных",
    state: EEntityState.Unlocked,
  },
]);

// id_question 16
testsAnswers.set(16, [
  {
    id: 59,
    type: EEntityType.TestsAnswers,
    answer: "Пыть-Ях",
    state: EEntityState.Unlocked,
  },
  {
    id: 60,
    type: EEntityType.TestsAnswers,
    answer: "Куть-Ях",
    state: EEntityState.Unlocked,
  },
  {
    id: 61,
    type: EEntityType.TestsAnswers,
    answer: "Гыть-Ях",
    state: EEntityState.Unlocked,
  },
]);

// id_question 17
testsAnswers.set(17, [
  {
    id: 62,
    type: EEntityType.TestsAnswers,
    answer: "Да",
    state: EEntityState.Unlocked,
  },
  {
    id: 63,
    type: EEntityType.TestsAnswers,
    answer: "Нет",
    state: EEntityState.Unlocked,
  },
  {
    id: 64,
    type: EEntityType.TestsAnswers,
    answer: "Не знаю",
    state: EEntityState.Unlocked,
  },
]);

export { testsAnswers };
