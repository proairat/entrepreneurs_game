import { reactive } from "vue";
import { shuffle } from "@/helpers/commonFunctions";

export const store = reactive({
  score: 0,
  questionCount: 0,
  quizEnded: false,
  data: null,
  options: null,
  loading: true,
  currentQuestion: 0,
  step: 0,
  showAnswer: false,
  incrementScore() {
    this.score++;
  },
  restartQuiz() {
    this.score = 0;
    this.step = 0;
    this.questionCount = 0;
    this.quizEnded = false;
    this.data = null;
    this.loading = true;
  },
  setQuestionCount(count: number) {
    this.questionCount = count;
  },
  getData() {
    this.loading = true;
    const res = {
      response_code: 0,
      results: [
        {
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question: "Год основания федеральной налоговой службы?",
          correct_answer: "2004",
          incorrect_answers: ["1998", "2000", "2002"],
        },
        {
          category: "Общие знания",
          type: "multiple",
          difficulty: "easy",
          question: "Какой НЕ режим налогообложения не существует?",
          correct_answer: "налог на оборот",
          incorrect_answers: [
            "основная система налогообложения",
            "упрощенная система налогообложения",
            " единый сельскохозяйственный налог",
            "патентная система налогообложения",
            "налог на профессиональный доход",
          ],
        },
        {
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question:
            "В упрощённой системе налогообложения для юридических лиц налоговая ставка в процентах?",
          correct_answer: "6%",
          incorrect_answers: ["8%", "4%", "10%"],
        },
        {
          category: "Общие знания",
          type: "multiple",
          difficulty: "medium",
          question:
            "Для какой категории граждан введён налог на профессиональный доход ",
          correct_answer: "самозанятых",
          incorrect_answers: ["наёмных работников", "сезонных работников"],
        },
        {
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
        },
        {
          category: "Общие знания",
          type: "multiple",
          difficulty: "hard",
          question:
            "Может ли иное лицо осуществить уплату государственной пошлины за плательщика?",
          correct_answer: "Да",
          incorrect_answers: ["Нет"],
        },
        {
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
        },
        {
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
        },
        {
          category: "Общие знания",
          type: "multiple",
          difficulty: "hard",
          question:
            "Может ли физическое лицо, не являющееся индивидуальным предпринимателем, являться налогоплательщиком НДС?",
          correct_answer: "Нет",
          incorrect_answers: ["Да"],
        },
        {
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
        },
      ],
    };

    console.log("res!", res);

    res.results.map((item) => {
      item.shuffled_answers = shuffle([
        item.correct_answer,
        ...item.incorrect_answers,
      ]);
      delete item.incorrect_answers;
    });
    this.data = res;
    this.currentQuestion = 0;
    this.showAnswer = false;
    this.questionCount = res.results.length;
    this.loading = false;
  },
  checkAnswer(answer) {
    if (this.data.results[this.currentQuestion].correct_answer == answer) {
      this.incrementScore();
      this.showAnswer = true;
      this.data.results[this.currentQuestion].guessedRight = true;
      return;
    }
    this.data.results[this.currentQuestion].guessedRight = false;
    this.showAnswer = true;
  },
  getNextQuestion() {
    if (this.currentQuestion >= this.data.results.length - 1) {
      this.quizEnded = true;
      this.step = 2;
    }
    this.currentQuestion += 1;
    this.showAnswer = false;
  },
  startQuiz(payload) {
    this.options = payload;
    this.step = 1;
  },
});
