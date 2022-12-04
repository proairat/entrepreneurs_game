import { EEntityState, EGuessed } from "@/types/enums";
import type { IEduCommonElement, ITestContent } from "@/types/interfaces";
import type { TElemsList } from "@/types/types";

class TestsContent implements IEduCommonElement {
  list: TElemsList<number, ITestContent> | undefined;

  public createList() {
    if (this.list === undefined) {
      this.list = new Map();
    }
    return this.list;
  }
  public addToList(): void {
    if (this.list instanceof Map && this.list.size === 0) {
      this.list.set(7, [
        {
          id: 1,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question: "Год основания федеральной налоговой службы?",
          state: EEntityState.Active,
          idAnswerCorrect: 1,
          answers: [
            { idAnswer: 1, answer: "2004", state: EEntityState.Unlocked },
            { idAnswer: 2, answer: "1998", state: EEntityState.Unlocked },
            { idAnswer: 3, answer: "2000", state: EEntityState.Unlocked },
            { idAnswer: 4, answer: "2002", state: EEntityState.Unlocked },
          ],
          guessed: EGuessed.Active,
        },
        {
          id: 2,
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question: "Какой режим налогообложения НЕ существует?",
          state: EEntityState.Default,
          idAnswerCorrect: 5,
          answers: [
            {
              idAnswer: 5,
              answer: "налог на оборот",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 6,
              answer: "основная система налогообложения",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 7,
              answer: "упрощенная система налогообложения",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 8,
              answer: " единый сельскохозяйственный налог",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 9,
              answer: "патентная система налогообложения",
              state: EEntityState.Unlocked,
            },
            {
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
          question:
            "В упрощённой системе налогообложения для юридических лиц налоговая ставка в процентах?",
          state: EEntityState.Default,
          idAnswerCorrect: 11,
          answers: [
            { idAnswer: 11, answer: "6%", state: EEntityState.Unlocked },
            { idAnswer: 12, answer: "8%", state: EEntityState.Unlocked },
            { idAnswer: 13, answer: "4%", state: EEntityState.Unlocked },
            { idAnswer: 14, answer: "10%", state: EEntityState.Unlocked },
          ],
          guessed: EGuessed.Undefined,
        },
        {
          id: 4,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question:
            "Для какой категории граждан введён налог на профессиональный доход ",
          state: EEntityState.Default,
          idAnswerCorrect: 17,
          answers: [
            {
              idAnswer: 15,
              answer: "наёмных работников",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 16,
              answer: "сезонных работников",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 17,
              answer: "самозанятых",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
        {
          id: 5,
          category: "Общие знания",
          type: "boolean",
          difficulty: "easy",
          question: "Срок уплаты транспортного налога физическим лицом",
          state: EEntityState.Default,
          idAnswerCorrect: 21,
          answers: [
            {
              idAnswer: 18,
              answer: "не позднее 1 октября",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 19,
              answer: "не позднее 1 ноября",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 20,
              answer: "не позднее 1 января",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 21,
              answer: "не позднее 1 декабря",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
        {
          id: 6,
          category: "Общие знания",
          type: "multiple",
          difficulty: "hard",
          question:
            "Может ли иное лицо осуществить уплату государственной пошлины за плательщика?",
          state: EEntityState.Default,
          idAnswerCorrect: 23,
          answers: [
            { idAnswer: 22, answer: "Нет", state: EEntityState.Unlocked },
            { idAnswer: 23, answer: "Да", state: EEntityState.Unlocked },
          ],
          guessed: EGuessed.Undefined,
        },
        {
          id: 7,
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question:
            "С какого момента и до какого момента применяется налоговый вычет для соглашения о защите и поощрении капиталовложений (СЗПК)?",
          state: EEntityState.Default,
          idAnswerCorrect: 26,
          answers: [
            {
              idAnswer: 24,
              answer:
                "Начиная с налогового периода, следующего за полугодом представления уведомления о налоговом вычете для СЗПК",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 25,
              answer:
                "Начиная с налогового периода, следующего за месяцем представления уведомления о налоговом вычете для СЗПК",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 26,
              answer:
                "Начиная с налогового периода, следующего за годом представления уведомления о налоговом вычете для СЗПК",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
        {
          id: 8,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question:
            "Размер страховых взносов для общества с ограниченной ответственностью?",
          state: EEntityState.Default,
          idAnswerCorrect: 29,
          answers: [
            {
              idAnswer: 27,
              answer:
                "На пенсионное страхование - 27%, на медицинское страхование - 9.1%, на социальное страхование - 0,9%, взносы за травматизм - от 0.2, до 8.5%",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 28,
              answer:
                "На пенсионное страхование - 20%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 2.2, до 5.5%",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 29,
              answer:
                "На пенсионное страхование - 22%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 0.2, до 8.5%",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 30,
              answer:
                "На пенсионное страхование - 18%, на медицинское страхование - 7%, на социальное страхование - 2,3%, взносы за травматизм - от 0.2, до 8.5%",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 31,
              answer:
                "На пенсионное страхование - 17%, на медицинское страхование - 3.1%, на социальное страхование - 1,9%, взносы за травматизм - от 2.7, до 6.5%",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
        {
          id: 9,
          category: "Общие знания",
          type: "multiple",
          difficulty: "hard",
          question:
            "Может ли физическое лицо, не являющееся индивидуальным предпринимателем, являться налогоплательщиком НДС?",
          state: EEntityState.Default,
          idAnswerCorrect: 33,
          answers: [
            { idAnswer: 32, answer: "Да", state: EEntityState.Unlocked },
            { idAnswer: 33, answer: "Нет", state: EEntityState.Unlocked },
          ],
          guessed: EGuessed.Undefined,
        },
        {
          id: 10,
          category: "Общие знания",
          type: "boolean",
          difficulty: "medium",
          question:
            "Какие страховые взносы Не платит индивидуальный предприниматель?",
          state: EEntityState.Default,
          idAnswerCorrect: 36,
          answers: [
            {
              idAnswer: 34,
              answer: "В пенсионный фонд",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 35,
              answer: "В фонд обязательного медицинского страхования",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 36,
              answer: "В фонд добровольного медицинского страхования",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
      ]);

      this.list.set(14, [
        {
          id: 11,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question: "Сколько будет 2 + 2?",
          state: EEntityState.Default,
          idAnswerCorrect: 37,
          answers: [
            { idAnswer: 37, answer: "4", state: EEntityState.Unlocked },
            { idAnswer: 38, answer: "5", state: EEntityState.Unlocked },
            { idAnswer: 39, answer: "6", state: EEntityState.Unlocked },
            { idAnswer: 40, answer: "7", state: EEntityState.Unlocked },
            { idAnswer: 41, answer: "8", state: EEntityState.Unlocked },
            { idAnswer: 42, answer: "9", state: EEntityState.Unlocked },
            { idAnswer: 43, answer: "10", state: EEntityState.Unlocked },
            { idAnswer: 44, answer: "11", state: EEntityState.Unlocked },
            { idAnswer: 45, answer: "12", state: EEntityState.Unlocked },
          ],
          guessed: EGuessed.Active,
        },
        {
          id: 12,
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question: "Столица Никарагуа?",
          state: EEntityState.Default,
          idAnswerCorrect: 48,
          answers: [
            {
              idAnswer: 46,
              answer: "Лиссабон",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 47,
              answer: "Рейкьявик",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 48,
              answer: "Манагуа",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
      ]);

      this.list.set(28, [
        {
          id: 13,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question: "Сейчас зима?",
          state: EEntityState.Default,
          idAnswerCorrect: 49,
          answers: [
            { idAnswer: 49, answer: "Да", state: EEntityState.Unlocked },
            { idAnswer: 50, answer: "Нет", state: EEntityState.Unlocked },
          ],
          guessed: EGuessed.Active,
        },
        {
          id: 14,
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question: "Из песни слов не ...?",
          state: EEntityState.Default,
          idAnswerCorrect: 53,
          answers: [
            {
              idAnswer: 51,
              answer: "убавишь",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 52,
              answer: "добавишь",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 53,
              answer: "выкинешь",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 54,
              answer: "с глаголом пишется раздельно",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
      ]);

      this.list.set(39, [
        {
          id: 15,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question: "Что такое Эдельвейс?",
          state: EEntityState.Default,
          idAnswerCorrect: 55,
          answers: [
            {
              idAnswer: 55,
              answer: "Горное травянистое растение семейства Сложноцветных",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 56,
              answer: "Полевое травянистое растение семейства Одноцветных",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 57,
              answer: "Луговое травянистое растение семейства Пучковых",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 58,
              answer: "Песчаное травянистое растение семейства Ложноцветных",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Active,
        },
        {
          id: 16,
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question: "Какого населённого пункта не существует?",
          state: EEntityState.Default,
          idAnswerCorrect: 61,
          answers: [
            {
              idAnswer: 59,
              answer: "Пыть-Ях",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 60,
              answer: "Куть-Ях",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 61,
              answer: "Гыть-Ях",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Undefined,
        },
      ]);
    }
  }
  public getList() {
    return this.list;
  }
}

export { TestsContent };
