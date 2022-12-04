import { defineStore } from "pinia";
import { shuffle } from "@/helpers/commonFunctions";
import { EEntityState, EGuessed } from "@/types/enums";
import { ref } from "vue";

export const useTestsStore = defineStore("tests", () => {
  const progressValue = ref(0);
  const score = ref(0);
  const questionCount = ref(0);
  const isOptionSelected = ref(false);
  const isTestEnded = ref(false);
  const data = ref([]);
  const isLoading = ref(true);
  const questionNumber = ref(0);
  const step = ref(0);

  function getQuestion() {
    return data.value[questionNumber.value].question;
  }

  function getNextQuestion() {
    if (questionNumber.value >= data.value.length - 1) {
      isTestEnded.value = true;
      step.value = 2;
    } else {
      questionNumber.value += 1;
      setGuessed(EGuessed.Active);
    }
  }

  function startTest() {
    step.value = 1;
  }

  function isAnswerIsCorrect(idAnswer: number) {
    return data.value[questionNumber.value].idAnswerCorrect === idAnswer
      ? true
      : false;
  }

  function setGuessed(value: EGuessed) {
    data.value[questionNumber.value].guessed = value;
  }

  function checkAnswer(idAnswer: number) {
    if (isAnswerIsCorrect(idAnswer)) {
      incrementScore();
      setGuessed(EGuessed.Right);
    } else {
      setGuessed(EGuessed.Wrong);
    }
  }

  function getData() {
    isLoading.value = true;
    const result = [
      {
        id: 1,
        category: "Общие знания",
        type: "multiple",
        difficulty: "medium",
        question: "Год основания федеральной налоговой службы?",
        idAnswerCorrect: 1,
        answers: [
          { idAnswer: 1, answer: "2004", state: EEntityState.Unlocked },
          { idAnswer: 2, answer: "1998", state: EEntityState.Unlocked },
          { idAnswer: 3, answer: "2000", state: EEntityState.Unlocked },
          { idAnswer: 4, answer: "2002", state: EEntityState.Unlocked },
        ],
        guessed: "active",
      },
      {
        id: 2,
        category: "Общие знания",
        type: "multiple",
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
        guessed: "undefined",
      },
      {
        id: 3,
        category: "Общие знания",
        type: "multiple",
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
        guessed: "undefined",
      },
      {
        id: 4,
        category: "Общие знания",
        type: "multiple",
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
          { idAnswer: 17, answer: "самозанятых", state: EEntityState.Unlocked },
        ],
        guessed: "undefined",
      },
      {
        id: 5,
        category: "Общие знания",
        type: "boolean",
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
        guessed: "undefined",
      },
      {
        id: 6,
        category: "Общие знания",
        type: "multiple",
        difficulty: "hard",
        question:
          "Может ли иное лицо осуществить уплату государственной пошлины за плательщика?",
        idAnswerCorrect: 23,
        answers: [
          { idAnswer: 22, answer: "Нет", state: EEntityState.Unlocked },
          { idAnswer: 23, answer: "Да", state: EEntityState.Unlocked },
        ],
        guessed: "undefined",
      },
      {
        id: 7,
        category: "Общие знания",
        type: "multiple",
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
        guessed: "undefined",
      },
      {
        id: 8,
        category: "Общие знания",
        type: "multiple",
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
        guessed: "undefined",
      },
      {
        id: 9,
        category: "Общие знания",
        type: "multiple",
        difficulty: "hard",
        question:
          "Может ли физическое лицо, не являющееся индивидуальным предпринимателем, являться налогоплательщиком НДС?",
        idAnswerCorrect: 33,
        answers: [
          { idAnswer: 32, answer: "Да", state: EEntityState.Unlocked },
          { idAnswer: 33, answer: "Нет", state: EEntityState.Unlocked },
        ],
        guessed: "undefined",
      },
      {
        id: 10,
        category: "Общие знания",
        type: "boolean",
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
        guessed: "undefined",
      },
    ];

    result.forEach((item) => shuffle(item.answers));

    data.value = result;
    questionNumber.value = 0;
    questionCount.value = data.value.length;
    isLoading.value = false;
  }

  function setQuestionCount(count: number) {
    questionCount.value = count;
  }

  function restartTest() {
    score.value = 0;
    step.value = 0;
    questionCount.value = 0;
    isTestEnded.value = false;
    data.value = null;
    isLoading.value = true;
  }

  function incrementScore() {
    score.value++;
  }

  function incrementProgressValue() {
    progressValue.value += Math.ceil(100 / questionCount.value);
  }

  function toggleIsOptionSelected(value: boolean) {
    isOptionSelected.value = value;
  }

  return {
    progressValue,
    score,
    questionCount,
    isOptionSelected,
    isTestEnded,
    data,
    isLoading,
    questionNumber,
    step,
    getNextQuestion,
    startTest,
    checkAnswer,
    getData,
    setQuestionCount,
    restartTest,
    incrementScore,
    incrementProgressValue,
    toggleIsOptionSelected,
    isAnswerIsCorrect,
    getQuestion,
  };
});
