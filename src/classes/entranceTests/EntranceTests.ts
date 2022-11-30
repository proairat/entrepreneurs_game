import { EEntityState, EEntityType, EGuessed } from "@/types/enums";
import type { IEduCommonElement, IEntranceTest } from "@/types/interfaces";

class EntranceTests implements IEduCommonElement {
  list: IEntranceTest[] | undefined;

  public createList() {
    if (this.list === undefined) {
      this.list = [];
    }
    return this.list;
  }
  public addToList(): void {
    if (Array.isArray(this.list) && this.list.length === 0) {
      this.list.push(
        {
          id: 1,
          category: "Общие знания",
          type: EEntityType.EntranceTests,
          difficulty: "medium",
          question: "С каким из суждений согласишься?",
          idAnswerCorrect: 1,
          answers: [
            {
              idAnswer: 1,
              answer:
                "Человек сам кузнец своего счастья, успех и неудача в его руках",
              state: EEntityState.Unlocked,
            },
            {
              idAnswer: 2,
              answer:
                "Жизнь человека в большей степени определяется внешними обстоятельствами, чем его усилиями",
              state: EEntityState.Unlocked,
            },
          ],
          guessed: EGuessed.Active,
        },
        {
          id: 2,
          category: "Общие знания",
          type: EEntityType.EntranceTests,
          difficulty: "easy",
          question: "Какой режим налогообложения НЕ существует?",
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
          type: EEntityType.EntranceTests,
          difficulty: "medium",
          question:
            "В упрощённой системе налогообложения для юридических лиц налоговая ставка в процентах?",
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
          type: EEntityType.EntranceTests,
          difficulty: "medium",
          question:
            "Для какой категории граждан введён налог на профессиональный доход ",
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
          type: EEntityType.EntranceTests,
          difficulty: "easy",
          question: "Срок уплаты транспортного налога физическим лицом",
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
          type: EEntityType.EntranceTests,
          difficulty: "hard",
          question:
            "Может ли иное лицо осуществить уплату государственной пошлины за плательщика?",
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
          type: EEntityType.EntranceTests,
          difficulty: "easy",
          question:
            "С какого момента и до какого момента применяется налоговый вычет для соглашения о защите и поощрении капиталовложений (СЗПК)?",
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
          type: EEntityType.EntranceTests,
          difficulty: "medium",
          question:
            "Размер страховых взносов для общества с ограниченной ответственностью?",
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
          type: EEntityType.EntranceTests,
          difficulty: "hard",
          question:
            "Может ли физическое лицо, не являющееся индивидуальным предпринимателем, являться налогоплательщиком НДС?",
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
          type: EEntityType.EntranceTests,
          difficulty: "medium",
          question:
            "Какие страховые взносы Не платит индивидуальный предприниматель?",
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
        }
      );
    }
  }
  public getList() {
    return this.list;
  }
}

export { EntranceTests };
