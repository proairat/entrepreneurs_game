// Mock object represent database data
import { EEntityState, EGuessed } from "@/types/enums";
import type { IQuestion } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

/**
 * TESTS QUESTIONS
 */
const testsQuestions: TElemsList<number, IQuestion> | undefined = new Map();
// id_test 7
testsQuestions.set(7, [
  {
    id: 1,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 1,
    question: "Год основания федеральной налоговой службы?",
    state: EEntityState.Active,
    idAnswerCorrect: 1,
    guessed: EGuessed.Active,
  },
  {
    id: 2,
    category: "Общие знания",
    type: "multiple",
    difficulty: "easy",
    slideNumber: 2,
    question: "Какой режим налогообложения НЕ существует?",
    state: EEntityState.Default,
    idAnswerCorrect: 5,
    guessed: EGuessed.Undefined,
  },
  {
    id: 3,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 3,
    question:
      "В упрощённой системе налогообложения для юридических лиц налоговая ставка в процентах?",
    state: EEntityState.Default,
    idAnswerCorrect: 11,
    guessed: EGuessed.Undefined,
  },
  {
    id: 4,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 4,
    question:
      "Для какой категории граждан введён налог на профессиональный доход ",
    state: EEntityState.Default,
    idAnswerCorrect: 17,
    guessed: EGuessed.Undefined,
  },
  {
    id: 5,
    category: "Общие знания",
    type: "boolean",
    difficulty: "easy",
    slideNumber: 5,
    question: "Срок уплаты транспортного налога физическим лицом",
    state: EEntityState.Default,
    idAnswerCorrect: 21,
    guessed: EGuessed.Undefined,
  },
  {
    id: 6,
    category: "Общие знания",
    type: "multiple",
    difficulty: "hard",
    slideNumber: 6,
    question:
      "Может ли иное лицо осуществить уплату государственной пошлины за плательщика?",
    state: EEntityState.Default,
    idAnswerCorrect: 23,
    guessed: EGuessed.Undefined,
  },
  {
    id: 7,
    category: "Общие знания",
    type: "multiple",
    difficulty: "easy",
    slideNumber: 7,
    question:
      "С какого момента и до какого момента применяется налоговый вычет для соглашения о защите и поощрении капиталовложений (СЗПК)?",
    state: EEntityState.Default,
    idAnswerCorrect: 26,
    guessed: EGuessed.Undefined,
  },
  {
    id: 8,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 8,
    question:
      "Размер страховых взносов для общества с ограниченной ответственностью?",
    state: EEntityState.Default,
    idAnswerCorrect: 29,
    guessed: EGuessed.Undefined,
  },
  {
    id: 9,
    category: "Общие знания",
    type: "multiple",
    difficulty: "hard",
    slideNumber: 9,
    question:
      "Может ли физическое лицо, не являющееся индивидуальным предпринимателем, являться налогоплательщиком НДС?",
    state: EEntityState.Default,
    idAnswerCorrect: 33,
    guessed: EGuessed.Undefined,
  },
  {
    id: 10,
    category: "Общие знания",
    type: "boolean",
    difficulty: "medium",
    slideNumber: 10,
    question:
      "Какие страховые взносы Не платит индивидуальный предприниматель?",
    state: EEntityState.Default,
    idAnswerCorrect: 36,
    guessed: EGuessed.Undefined,
  },
]);
// id_test 14
testsQuestions.set(14, [
  {
    id: 11,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 1,
    question: "Сколько будет 2 + 2?",
    state: EEntityState.Default,
    idAnswerCorrect: 37,
    guessed: EGuessed.Active,
  },
  {
    id: 12,
    category: "Общие знания",
    type: "multiple",
    difficulty: "easy",
    slideNumber: 2,
    question: "Столица Никарагуа?",
    state: EEntityState.Default,
    idAnswerCorrect: 48,
    guessed: EGuessed.Undefined,
  },
]);
// id_test 28
testsQuestions.set(28, [
  {
    id: 13,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 1,
    question: "Сейчас зима?",
    state: EEntityState.Default,
    idAnswerCorrect: 49,
    guessed: EGuessed.Active,
  },
  {
    id: 14,
    category: "Общие знания",
    type: "multiple",
    difficulty: "easy",
    slideNumber: 2,
    question: "Из песни слов не ...?",
    state: EEntityState.Default,
    idAnswerCorrect: 53,
    guessed: EGuessed.Undefined,
  },
]);
// id_test 39
testsQuestions.set(39, [
  {
    id: 15,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 1,
    question: "Что такое Эдельвейс?",
    state: EEntityState.Default,
    idAnswerCorrect: 55,
    guessed: EGuessed.Active,
  },
  {
    id: 16,
    category: "Общие знания",
    type: "multiple",
    difficulty: "easy",
    slideNumber: 2,
    question: "Какого населённого пункта не существует?",
    state: EEntityState.Default,
    idAnswerCorrect: 61,
    guessed: EGuessed.Undefined,
  },
]);

export { testsQuestions };
