// Mock object represent database data
import { EEntityState, EGuessed } from "@/types/enums";
import type { IEntranceTestContent } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

/**
 * ENTRANCE TESTS QUESTIONS
 */
const entranceTestsQuestions:
  | TElemsList<number, IEntranceTestContent>
  | undefined = new Map();
// id_entrance_test 1
entranceTestsQuestions.set(1, [
  {
    id: 1,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 1,
    question: "Entrance Test Год основания федеральной налоговой службы?",
    state: EEntityState.Active,
    idAnswerCorrect: 1,
    idAnswerUserSelected: [],
    answers: [
      {
        idQuestion: 1,
        idAnswer: 1,
        answer: "2004",
        state: EEntityState.Unlocked,
      },
      {
        idQuestion: 1,
        idAnswer: 2,
        answer: "1998",
        state: EEntityState.Unlocked,
      },
      {
        idQuestion: 1,
        idAnswer: 3,
        answer: "2000",
        state: EEntityState.Unlocked,
      },
      {
        idQuestion: 1,
        idAnswer: 4,
        answer: "2002",
        state: EEntityState.Unlocked,
      },
    ],
    guessed: EGuessed.Active,
  },
  {
    id: 2,
    category: "Общие знания",
    type: "multiple",
    difficulty: "easy",
    slideNumber: 2,
    question: "Entrance Test Какой режим налогообложения НЕ существует?",
    state: EEntityState.Default,
    idAnswerCorrect: 5,
    idAnswerUserSelected: [],
    answers: [
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
    ],
    guessed: EGuessed.Undefined,
  },
  {
    id: 3,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 3,
    question:
      "Entrance Test В упрощённой системе налогообложения для юридических лиц налоговая ставка в процентах?",
    state: EEntityState.Default,
    idAnswerCorrect: 11,
    idAnswerUserSelected: [],
    answers: [
      {
        idQuestion: 3,
        idAnswer: 11,
        answer: "6%",
        state: EEntityState.Unlocked,
      },
      {
        idQuestion: 3,
        idAnswer: 12,
        answer: "8%",
        state: EEntityState.Unlocked,
      },
      {
        idQuestion: 3,
        idAnswer: 13,
        answer: "4%",
        state: EEntityState.Unlocked,
      },
      {
        idQuestion: 3,
        idAnswer: 14,
        answer: "10%",
        state: EEntityState.Unlocked,
      },
    ],
    guessed: EGuessed.Undefined,
  },
  {
    id: 4,
    category: "Общие знания",
    type: "multiple",
    difficulty: "medium",
    slideNumber: 4,
    question:
      "Entrance Test Для какой категории граждан введён налог на профессиональный доход ",
    state: EEntityState.Default,
    idAnswerCorrect: 17,
    idAnswerUserSelected: [],
    answers: [
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
    ],
    guessed: EGuessed.Undefined,
  },
]);

export { entranceTestsQuestions };
