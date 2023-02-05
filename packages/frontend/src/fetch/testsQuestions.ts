// Mock object represent database data
import { EEntityState, EEntityType, EGuess } from "share/types/enums";
import type { ITestQuestion } from "share/types/interfaces";
import type { TElemsList } from "share/types/types";

/**
 * TESTS QUESTIONS
 */
const testsQuestions: TElemsList<number, ITestQuestion> | undefined = new Map();

// id_test 7
testsQuestions.set(7, [
  {
    id: 1,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 1,
    question: "Год основания федеральной налоговой службы?",
    state: EEntityState.Active,
    idAnswerCorrect: 1,
    guesses: EGuess.Active,
  },
  {
    id: 2,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "easy",
    slideNumber: 2,
    question: "Какого режима налогообложения НЕ существует?",
    state: EEntityState.Default,
    idAnswerCorrect: 5,
    guesses: EGuess.Undefined,
  },
  {
    id: 3,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 3,
    question:
      "В упрощённой системе налогообложения для юридических лиц налоговая ставка в процентах?",
    state: EEntityState.Default,
    idAnswerCorrect: 11,
    guesses: EGuess.Undefined,
  },
  {
    id: 4,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 4,
    question:
      "Для какой категории граждан введён налог на профессиональный доход ",
    state: EEntityState.Default,
    idAnswerCorrect: 17,
    guesses: EGuess.Undefined,
  },
  /*{
    id: 5,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "easy",
    slideNumber: 5,
    question: "Срок уплаты транспортного налога физическим лицом",
    state: EEntityState.Default,
    idAnswerCorrect: 21,
    guesses: EGuess.Undefined,
  },
  {
    id: 6,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "hard",
    slideNumber: 6,
    question:
      "Может ли иное лицо осуществить уплату государственной пошлины за плательщика?",
    state: EEntityState.Default,
    idAnswerCorrect: 23,
    guesses: EGuess.Undefined,
  },
  {
    id: 7,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "easy",
    slideNumber: 7,
    question:
      "С какого момента и до какого момента применяется налоговый вычет для соглашения о защите и поощрении капиталовложений (СЗПК)?",
    state: EEntityState.Default,
    idAnswerCorrect: 26,
    guesses: EGuess.Undefined,
  },
  {
    id: 8,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 8,
    question:
      "Размер страховых взносов для общества с ограниченной ответственностью?",
    state: EEntityState.Default,
    idAnswerCorrect: 29,
    guesses: EGuess.Undefined,
  },
  {
    id: 9,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "hard",
    slideNumber: 9,
    question:
      "Может ли физическое лицо, не являющееся индивидуальным предпринимателем, являться налогоплательщиком НДС?",
    state: EEntityState.Default,
    idAnswerCorrect: 33,
    guesses: EGuess.Undefined,
  },
  {
    id: 10,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 10,
    question:
      "Какие страховые взносы Не платит индивидуальный предприниматель?",
    state: EEntityState.Default,
    idAnswerCorrect: 36,
    guesses: EGuess.Undefined,
  },*/
]);

// id_test 14
testsQuestions.set(14, [
  {
    id: 11,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 1,
    question: "Сколько будет 2 + 2?",
    state: EEntityState.Active,
    idAnswerCorrect: 37,
    guesses: EGuess.Active,
  },
  {
    id: 12,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "easy",
    slideNumber: 2,
    question: "Столица Никарагуа?",
    state: EEntityState.Default,
    idAnswerCorrect: 48,
    guesses: EGuess.Undefined,
  },
]);

// id_test 28
testsQuestions.set(28, [
  {
    id: 13,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 1,
    question: "Сейчас зима?",
    state: EEntityState.Active,
    idAnswerCorrect: 49,
    guesses: EGuess.Active,
  },
  {
    id: 14,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "easy",
    slideNumber: 2,
    question: "Из песни слов не ...?",
    state: EEntityState.Default,
    idAnswerCorrect: 53,
    guesses: EGuess.Undefined,
  },
]);

// id_test 39
testsQuestions.set(39, [
  {
    id: 15,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 1,
    question: "Что такое Эдельвейс?",
    state: EEntityState.Active,
    idAnswerCorrect: 55,
    guesses: EGuess.Active,
  },
  {
    id: 16,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "easy",
    slideNumber: 2,
    question: "Какого населённого пункта не существует?",
    state: EEntityState.Default,
    idAnswerCorrect: 61,
    guesses: EGuess.Undefined,
  },
]);

// id_test 80
testsQuestions.set(80, [
  {
    id: 17,
    type: EEntityType.TestsQuestions,
    category: "Общие знания",
    difficulty: "medium",
    slideNumber: 1,
    question: "Это итоговое тестирование?",
    state: EEntityState.Active,
    idAnswerCorrect: 62,
    guesses: EGuess.Active,
  },
]);

export { testsQuestions };
