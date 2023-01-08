// Mock object represent database data
import { EEntityState } from "@/types/enums";
import type { ITestAnswer } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

/**
 * TESTS ANSWERS
 */
const testsAnswers: TElemsList<number, ITestAnswer> | undefined = new Map();

// id_question 1
testsAnswers.set(1, [
  { idQuestion: 1, id: 1, answer: "2004", state: EEntityState.Unlocked },
  { idQuestion: 1, id: 2, answer: "1998", state: EEntityState.Unlocked },
  { idQuestion: 1, id: 3, answer: "2000", state: EEntityState.Unlocked },
  { idQuestion: 1, id: 4, answer: "2002", state: EEntityState.Unlocked },
]);

// id_question 2
testsAnswers.set(2, [
  {
    idQuestion: 2,
    id: 5,
    answer: "налог на оборот",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    id: 6,
    answer: "основная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    id: 7,
    answer: "упрощенная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    id: 8,
    answer: " единый сельскохозяйственный налог",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    id: 9,
    answer: "патентная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    id: 10,
    answer: "налог на профессиональный доход",
    state: EEntityState.Unlocked,
  },
]);

// id_question 3
testsAnswers.set(3, [
  { idQuestion: 3, id: 11, answer: "6%", state: EEntityState.Unlocked },
  { idQuestion: 3, id: 12, answer: "8%", state: EEntityState.Unlocked },
  { idQuestion: 3, id: 13, answer: "4%", state: EEntityState.Unlocked },
  { idQuestion: 3, id: 14, answer: "10%", state: EEntityState.Unlocked },
]);

// id_question 4
testsAnswers.set(4, [
  {
    idQuestion: 4,
    id: 15,
    answer: "наёмных работников",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 4,
    id: 16,
    answer: "сезонных работников",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 4,
    id: 17,
    answer: "самозанятых",
    state: EEntityState.Unlocked,
  },
]);

// id_question 5
testsAnswers.set(5, [
  {
    idQuestion: 5,
    id: 18,
    answer: "не позднее 1 октября",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 5,
    id: 19,
    answer: "не позднее 1 ноября",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 5,
    id: 20,
    answer: "не позднее 1 января",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 5,
    id: 21,
    answer: "не позднее 1 декабря",
    state: EEntityState.Unlocked,
  },
]);

// id_question 6
testsAnswers.set(6, [
  { idQuestion: 6, id: 22, answer: "Нет", state: EEntityState.Unlocked },
  { idQuestion: 6, id: 23, answer: "Да", state: EEntityState.Unlocked },
]);

// id_question 7
testsAnswers.set(7, [
  {
    idQuestion: 7,
    id: 24,
    answer:
      "Начиная с налогового периода, следующего за полугодом представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 7,
    id: 25,
    answer:
      "Начиная с налогового периода, следующего за месяцем представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 7,
    id: 26,
    answer:
      "Начиная с налогового периода, следующего за годом представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
]);

// id_question 8
testsAnswers.set(8, [
  {
    idQuestion: 8,
    id: 27,
    answer:
      "На пенсионное страхование - 27%, на медицинское страхование - 9.1%, на социальное страхование - 0,9%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    id: 28,
    answer:
      "На пенсионное страхование - 20%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 2.2, до 5.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    id: 29,
    answer:
      "На пенсионное страхование - 22%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    id: 30,
    answer:
      "На пенсионное страхование - 18%, на медицинское страхование - 7%, на социальное страхование - 2,3%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    id: 31,
    answer:
      "На пенсионное страхование - 17%, на медицинское страхование - 3.1%, на социальное страхование - 1,9%, взносы за травматизм - от 2.7, до 6.5%",
    state: EEntityState.Unlocked,
  },
]);

// id_question 9
testsAnswers.set(9, [
  { idQuestion: 9, id: 32, answer: "Да", state: EEntityState.Unlocked },
  { idQuestion: 9, id: 33, answer: "Нет", state: EEntityState.Unlocked },
]);

// id_question 10
testsAnswers.set(10, [
  {
    idQuestion: 10,
    id: 34,
    answer: "В пенсионный фонд",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 10,
    id: 35,
    answer: "В фонд обязательного медицинского страхования",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 10,
    id: 36,
    answer: "В фонд добровольного медицинского страхования",
    state: EEntityState.Unlocked,
  },
]);

// id_question 11
testsAnswers.set(11, [
  { idQuestion: 11, id: 37, answer: "4", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 38, answer: "5", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 39, answer: "6", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 40, answer: "7", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 41, answer: "8", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 42, answer: "9", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 43, answer: "10", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 44, answer: "11", state: EEntityState.Unlocked },
  { idQuestion: 11, id: 45, answer: "12", state: EEntityState.Unlocked },
]);

// id_question 12
testsAnswers.set(12, [
  {
    idQuestion: 12,
    id: 46,
    answer: "Лиссабон",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 12,
    id: 47,
    answer: "Рейкьявик",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 12,
    id: 48,
    answer: "Манагуа",
    state: EEntityState.Unlocked,
  },
]);

// id_question 13
testsAnswers.set(13, [
  { idQuestion: 13, id: 49, answer: "Да", state: EEntityState.Unlocked },
  { idQuestion: 13, id: 50, answer: "Нет", state: EEntityState.Unlocked },
]);

// id_question 14
testsAnswers.set(14, [
  {
    idQuestion: 14,
    id: 51,
    answer: "убавишь",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 14,
    id: 52,
    answer: "добавишь",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 14,
    id: 53,
    answer: "выкинешь",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 14,
    id: 54,
    answer: "с глаголом пишется раздельно",
    state: EEntityState.Unlocked,
  },
]);

// id_question 15
testsAnswers.set(15, [
  {
    idQuestion: 15,
    id: 55,
    answer: "Горное травянистое растение семейства Сложноцветных",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 15,
    id: 56,
    answer: "Полевое травянистое растение семейства Одноцветных",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 15,
    id: 57,
    answer: "Луговое травянистое растение семейства Пучковых",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 15,
    id: 58,
    answer: "Песчаное травянистое растение семейства Ложноцветных",
    state: EEntityState.Unlocked,
  },
]);

// id_question 16
testsAnswers.set(16, [
  {
    idQuestion: 16,
    id: 59,
    answer: "Пыть-Ях",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 16,
    id: 60,
    answer: "Куть-Ях",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 16,
    id: 61,
    answer: "Гыть-Ях",
    state: EEntityState.Unlocked,
  },
]);

// id_question 17
testsAnswers.set(17, [
  {
    idQuestion: 17,
    id: 62,
    answer: "Да",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 17,
    id: 63,
    answer: "Нет",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 17,
    id: 64,
    answer: "Не знаю",
    state: EEntityState.Unlocked,
  },
]);

export { testsAnswers };
