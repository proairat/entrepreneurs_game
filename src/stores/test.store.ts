import { shuffle } from "@/helpers/commonFunctions";
import { EGuessed } from "@/types/enums";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTestsStore = defineStore("tests", () => {
  const progressValue = ref(0);
  const score = ref(0);
  const questionCount = ref(0);
  const testEnded = ref(false);
  const data = ref(null);
  const options = ref(null);
  const loading = ref(true);
  const currentQuestion = ref(0);
  const step = ref(0);
  const showAnswer = ref(false);

  function getNextQuestion() {
    if (currentQuestion.value >= data.value.results.length - 1) {
      testEnded.value = true;
      step.value = 2;
    }
    currentQuestion.value += 1;
    showAnswer.value = false;
  }

  function startTest(payload) {
    options.value = payload;
    step.value = 1;
  }

  function checkAnswer(answer: any) {
    console.log("checkAnswer answer", answer);
    if (data.value.results[currentQuestion.value].correct_answer === answer) {
      incrementScore();
      data.value.results[currentQuestion.value].guessed = EGuessed.Right;
      return;
    } else {
      data.value.results[currentQuestion.value].guessed = EGuessed.Wrong;
    }
  }

  function getData() {
    loading.value = true;
    const res = {
      response_code: 0,
      results: [
        {
          id: 1,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question: "Год основания федеральной налоговой службы?",
          correct_answer: "2004",
          incorrect_answers: ["1998", "2000", "2002"],
          guessed: "undefined",
        },
        {
          id: 2,
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question: "Какой режим налогообложения НЕ существует?",
          correct_answer: "налог на оборот",
          incorrect_answers: [
            "основная система налогообложения",
            "упрощенная система налогообложения",
            " единый сельскохозяйственный налог",
            "патентная система налогообложения",
            "налог на профессиональный доход",
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
          correct_answer: "6%",
          incorrect_answers: ["8%", "4%", "10%"],
          guessed: "undefined",
        },
        {
          id: 4,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question:
            "Для какой категории граждан введён налог на профессиональный доход ",
          correct_answer: "самозанятых",
          incorrect_answers: ["наёмных работников", "сезонных работников"],
          guessed: "undefined",
        } /*
        {
          id: 5,
          category: "Общие знания",
          type: "boolean",
          difficulty: "easy",
          question: "Срок уплаты транспортного налога физическим лицом",
          correct_answer: "не позднее 1 декабря",
          incorrect_answers: [
            "не позднее 1 октября",
            "не позднее 1 ноября",
            "не позднее 1 января",
          ],
          guessed: 'undefined',
        },
        {
          id: 6,
          category: "Общие знания",
          type: "multiple",
          difficulty: "hard",
          question:
            "Может ли иное лицо осуществить уплату государственной пошлины за плательщика?",
          correct_answer: "Да",
          incorrect_answers: ["Нет"],
          guessed: 'undefined',
        },
        {
          id: 7,
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question:
            "С какого момента и до какого момента применяется налоговый вычет для соглашения о защите и поощрении капиталовложений (СЗПК)?",
          correct_answer:
            "Начиная с налогового периода, следующего за годом представления уведомления о налоговом вычете для СЗПК",
          incorrect_answers: [
            "Начиная с налогового периода, следующего за полугодом представления уведомления о налоговом вычете для СЗПК",
            "Начиная с налогового периода, следующего за месяцем представления уведомления о налоговом вычете для СЗПК",
          ],
          guessed: 'undefined',
        },
        {
          id: 8,
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question:
            "Размер страховых взносов для общества с ограниченной ответственностью?",
          correct_answer:
            "На пенсионное страхование - 22%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 0.2, до 8.5%",
          incorrect_answers: [
            "На пенсионное страхование - 27%, на медицинское страхование - 9.1%, на социальное страхование - 0,9%, взносы за травматизм - от 0.2, до 8.5%",
            "На пенсионное страхование - 20%, на медицинское страхование - 5.1%, на социальное страхование - 2,9%, взносы за травматизм - от 2.2, до 5.5%",
            "На пенсионное страхование - 18%, на медицинское страхование - 7%, на социальное страхование - 2,3%, взносы за травматизм - от 0.2, до 8.5%",
            "На пенсионное страхование - 17%, на медицинское страхование - 3.1%, на социальное страхование - 1,9%, взносы за травматизм - от 2.7, до 6.5%",
          ],
          guessed: 'undefined',
        },
        {
          id: 9,
          category: "Общие знания",
          type: "multiple",
          difficulty: "hard",
          question:
            "Может ли физическое лицо, не являющееся индивидуальным предпринимателем, являться налогоплательщиком НДС?",
          correct_answer: "Нет",
          incorrect_answers: ["Да"],
          guessed: 'undefined',
        },
        {
          id: 10,
          category: "Общие знания",
          type: "boolean",
          difficulty: "medium",
          question:
            "Какие страховые взносы Не платит индивидуальный предприниматель?",
          correct_answer: "В фонд добровольного медицинского страхования",
          incorrect_answers: [
            "В пенсионный фонд",
            "В фон обязательного медицинского страхования",
          ],
          guessed: 'undefined',
        },*/,
      ],
    };

    res.results.map((item) => {
      item.shuffled_answers = shuffle([
        item.correct_answer,
        ...item.incorrect_answers,
      ]);
      delete item.incorrect_answers;
    });
    data.value = res;
    currentQuestion.value = 0;
    showAnswer.value = false;
    questionCount.value = res.results.length;
    loading.value = false;
  }

  function setQuestionCount(count: number) {
    questionCount.value = count;
  }

  function restartTest() {
    score.value = 0;
    step.value = 0;
    questionCount.value = 0;
    testEnded.value = false;
    data.value = null;
    loading.value = true;
  }

  function incrementScore() {
    score.value++;
  }

  return {
    progressValue,
    score,
    questionCount,
    testEnded,
    data,
    options,
    loading,
    currentQuestion,
    step,
    showAnswer,
    getNextQuestion,
    startTest,
    checkAnswer,
    getData,
    setQuestionCount,
    restartTest,
    incrementScore,
  };
});
