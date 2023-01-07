// Mock object represent database data
import { EEntityState } from "@/types/enums";
import type { IAnswer } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

/**
 * TESTS ANSWERS
 */
const answers: TElemsList<number, IAnswer> | undefined = new Map();
// id_question 1
answers.set(1, [
  { idQuestion: 1, idAnswer: 1, answer: "2004", state: EEntityState.Unlocked },
  { idQuestion: 1, idAnswer: 2, answer: "1998", state: EEntityState.Unlocked },
  { idQuestion: 1, idAnswer: 3, answer: "2000", state: EEntityState.Unlocked },
  { idQuestion: 1, idAnswer: 4, answer: "2002", state: EEntityState.Unlocked },
]);

// id_question 2
answers.set(2, [
  {
    idQuestion: 2,
    idAnswer: 5,
    answer: "налог на оборот",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    idAnswer: 6,
    answer: "основная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    idAnswer: 7,
    answer: "упрощенная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    idAnswer: 8,
    answer: " единый сельскохозяйственный налог",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    idAnswer: 9,
    answer: "патентная система налогообложения",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 2,
    idAnswer: 10,
    answer: "налог на профессиональный доход",
    state: EEntityState.Unlocked,
  },
]);

// id_question 3
answers.set(3, [
  { idQuestion: 3, idAnswer: 11, answer: "6%", state: EEntityState.Unlocked },
  { idQuestion: 3, idAnswer: 12, answer: "8%", state: EEntityState.Unlocked },
  { idQuestion: 3, idAnswer: 13, answer: "4%", state: EEntityState.Unlocked },
  { idQuestion: 3, idAnswer: 14, answer: "10%", state: EEntityState.Unlocked },
]);

// id_question 4
answers.set(4, [
  {
    idQuestion: 4,
    idAnswer: 15,
    answer: "наёмных работников",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 4,
    idAnswer: 16,
    answer: "сезонных работников",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 4,
    idAnswer: 17,
    answer: "самозанятых",
    state: EEntityState.Unlocked,
  },
]);

// id_question 5
answers.set(5, [
  {
    idQuestion: 5,
    idAnswer: 18,
    answer: "не позднее 1 октября",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 5,
    idAnswer: 19,
    answer: "не позднее 1 ноября",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 5,
    idAnswer: 20,
    answer: "не позднее 1 января",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 5,
    idAnswer: 21,
    answer: "не позднее 1 декабря",
    state: EEntityState.Unlocked,
  },
]);

// id_question 6
answers.set(6, [
  { idQuestion: 6, idAnswer: 22, answer: "Нет", state: EEntityState.Unlocked },
  { idQuestion: 6, idAnswer: 23, answer: "Да", state: EEntityState.Unlocked },
]);

// id_question 7
answers.set(7, [
  {
    idQuestion: 7,
    idAnswer: 24,
    answer:
      "Начиная с налогового периода, следующего за полугодом представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 7,
    idAnswer: 25,
    answer:
      "Начиная с налогового периода, следующего за месяцем представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 7,
    idAnswer: 26,
    answer:
      "Начиная с налогового периода, следующего за годом представления уведомления о налоговом вычете для СЗПК",
    state: EEntityState.Unlocked,
  },
]);

// id_question 8
answers.set(8, [
  {
    idQuestion: 8,
    idAnswer: 27,
    answer:
      "На пенсионное страхование - 27%, на медицинское страхование - 9.1%, на социальное страхование - 0,9%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    idAnswer: 28,
    answer:
      "На пенсионное страхование - 20%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 2.2, до 5.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    idAnswer: 29,
    answer:
      "На пенсионное страхование - 22%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    idAnswer: 30,
    answer:
      "На пенсионное страхование - 18%, на медицинское страхование - 7%, на социальное страхование - 2,3%, взносы за травматизм - от 0.2, до 8.5%",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 8,
    idAnswer: 31,
    answer:
      "На пенсионное страхование - 17%, на медицинское страхование - 3.1%, на социальное страхование - 1,9%, взносы за травматизм - от 2.7, до 6.5%",
    state: EEntityState.Unlocked,
  },
]);

// id_question 9
answers.set(9, [
  { idQuestion: 9, idAnswer: 32, answer: "Да", state: EEntityState.Unlocked },
  { idQuestion: 9, idAnswer: 33, answer: "Нет", state: EEntityState.Unlocked },
]);

// id_question 10
answers.set(10, [
  {
    idQuestion: 10,
    idAnswer: 34,
    answer: "В пенсионный фонд",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 10,
    idAnswer: 35,
    answer: "В фонд обязательного медицинского страхования",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 10,
    idAnswer: 36,
    answer: "В фонд добровольного медицинского страхования",
    state: EEntityState.Unlocked,
  },
]);

// id_question 11
answers.set(11, [
  { idQuestion: 11, idAnswer: 37, answer: "4", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 38, answer: "5", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 39, answer: "6", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 40, answer: "7", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 41, answer: "8", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 42, answer: "9", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 43, answer: "10", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 44, answer: "11", state: EEntityState.Unlocked },
  { idQuestion: 11, idAnswer: 45, answer: "12", state: EEntityState.Unlocked },
]);

// id_question 12
answers.set(12, [
  {
    idQuestion: 12,
    idAnswer: 46,
    answer: "Лиссабон",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 12,
    idAnswer: 47,
    answer: "Рейкьявик",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 12,
    idAnswer: 48,
    answer: "Манагуа",
    state: EEntityState.Unlocked,
  },
]);

// id_question 13
answers.set(13, [
  { idQuestion: 13, idAnswer: 49, answer: "Да", state: EEntityState.Unlocked },
  { idQuestion: 13, idAnswer: 50, answer: "Нет", state: EEntityState.Unlocked },
]);

// id_question 14
answers.set(14, [
  {
    idQuestion: 14,
    idAnswer: 51,
    answer: "убавишь",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 14,
    idAnswer: 52,
    answer: "добавишь",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 14,
    idAnswer: 53,
    answer: "выкинешь",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 14,
    idAnswer: 54,
    answer: "с глаголом пишется раздельно",
    state: EEntityState.Unlocked,
  },
]);

// id_question 15
answers.set(15, [
  {
    idQuestion: 15,
    idAnswer: 55,
    answer: "Горное травянистое растение семейства Сложноцветных",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 15,
    idAnswer: 56,
    answer: "Полевое травянистое растение семейства Одноцветных",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 15,
    idAnswer: 57,
    answer: "Луговое травянистое растение семейства Пучковых",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 15,
    idAnswer: 58,
    answer: "Песчаное травянистое растение семейства Ложноцветных",
    state: EEntityState.Unlocked,
  },
]);

// id_question 16
answers.set(16, [
  {
    idQuestion: 16,
    idAnswer: 59,
    answer: "Пыть-Ях",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 16,
    idAnswer: 60,
    answer: "Куть-Ях",
    state: EEntityState.Unlocked,
  },
  {
    idQuestion: 16,
    idAnswer: 61,
    answer: "Гыть-Ях",
    state: EEntityState.Unlocked,
  },
]);

export { answers };
