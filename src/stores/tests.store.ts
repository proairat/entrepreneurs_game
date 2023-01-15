import { defineStore, storeToRefs } from "pinia";
import { EEntityState, EGuess } from "@/types/enums";
import { ref } from "vue";
import { testsQuestions, testsAnswers, guesses } from "@/fetch";
import {
  EntityCreator,
  Creator,
  CreatorExtended,
  EntityCreatorExtendedMap,
} from "@/classes";
import type { TElemsList } from "@/types/types";
import type {
  ITestAnswer,
  IEduElementEntityMap,
  ITestQuestion,
  IUpdateMapElem,
  IUpdateMapElements,
  IGuess,
} from "@/types/interfaces";
// import isEmpty from "lodash/isEmpty";
import cloneDeep from "lodash/cloneDeep";
import { useModulesStore } from "@/stores";

function getEduElement<T>(
  creator: Creator<T>,
  fromDB: T[] | TElemsList<number, T> | undefined
) {
  const eduElement = creator.getEduElement();
  if (fromDB) {
    eduElement.createList(fromDB);
    eduElement.addToList(fromDB);
  }
  return eduElement;
}

function getEduElementExtended<T>(creator: CreatorExtended<T>) {
  const eduElement = creator.getEduElement();
  return eduElement;
}

const eduElementTestsQuestions = getEduElement(
  new EntityCreator<ITestQuestion>(),
  testsQuestions
);
const eduElementTestsAnswers = getEduElement(
  new EntityCreator<ITestAnswer>(),
  testsAnswers
);

const eduElementGuesses = getEduElement(new EntityCreator<IGuess>(), guesses);

const eduElementTestsQuestionsExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<ITestQuestion>(
    ref(eduElementTestsQuestions.getList()).value as TElemsList<
      number,
      ITestQuestion
    >
  )
) as IEduElementEntityMap<ITestQuestion>;

const eduElementTestsAnswersExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<ITestAnswer>(
    ref(eduElementTestsAnswers.getList()).value as TElemsList<
      number,
      ITestAnswer
    >
  )
) as IEduElementEntityMap<ITestAnswer>;

const eduElementGuessesExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<IGuess>(
    ref(eduElementGuesses.getList()).value as TElemsList<number, IGuess>
  )
) as IEduElementEntityMap<IGuess>;

export const useTestsStore = defineStore("tests", () => {
  const modulesStore = useModulesStore();
  const { activeTest } = storeToRefs(modulesStore);
  const progressValue = ref(0);
  const score = ref(0);
  const questionCount = ref(0);
  const isAnswerSelected = ref(false);
  const isClickedCheckButton = ref(false);
  const isTestEnded = ref(false);
  const testContent = ref<ITestQuestion[]>([]);
  const isLoading = ref(true);
  const questionNumber = ref(0);
  const step = ref(0);
  const activeQuestion = ref(getActiveQuestion(activeTest.value.id));
  const activeAnswer = ref(getActiveAnswer(activeQuestion.value.id));

  function updateActiveQuestion(updateMapElem: IUpdateMapElem) {
    eduElementTestsQuestionsExtended.updateElemByState(updateMapElem);
    activeQuestion.value = getActiveQuestion(
      updateMapElem.entityIdForListByEntityId
    );
    activeAnswer.value = getActiveAnswer(activeQuestion.value.id);
  }

  function updateActiveAnswer(updateMapElem: IUpdateMapElem) {
    eduElementTestsAnswersExtended.updateElemByState(updateMapElem);
    activeAnswer.value = getActiveAnswer(
      updateMapElem.entityIdForListByEntityId
    );
  }

  function updateElementsByState(updateMapElements: IUpdateMapElements) {
    eduElementTestsAnswersExtended.updateElementsByState(updateMapElements);
  }

  function updateGuessesElem(updateMapElem: IUpdateMapElem) {
    eduElementGuessesExtended.updateElemByState(updateMapElem);
  }

  function getQuestionContent() {
    // return testContent.value[questionNumber.value].question;
    return activeQuestion.value.question;
  }

  function getNextQuestion() {
    if (questionNumber.value >= testContent.value.length - 1) {
      isTestEnded.value = true;
      step.value = 2;
    } else {
      questionNumber.value += 1;
      setGuessed(EGuess.Active);
    }
  }

  function startTest() {
    step.value = 1;
  }

  function isAnswerIsCorrect(answerId: number) {
    /*return testContent.value[questionNumber.value].idAnswerCorrect === answerId
      ? true
      : false;*/
    return activeQuestion.value.idAnswerCorrect === answerId ? true : false;
  }

  function setGuessed(value: EGuess) {
    // testContent.value[questionNumber.value].guesses = value;
    activeQuestion.value.guesses = value;
  }

  function checkAnswer(answerId: number) {
    if (isAnswerIsCorrect(answerId)) {
      incrementScore();
      setGuessed(EGuessed.Right);
    } else {
      setGuessed(EGuessed.Wrong);
    }
  }

  function checkAnswerNew(answerId: number) {
    console.log("checkAnswerNew()");
    if (isAnswerIsCorrect(answerId)) {
      console.log("Сюда корретно");
      incrementScore();
      updateGuessesElem({
        entityIdForListByEntityId: activeTest.value.id,
        entityIdForClickIndex: activeQuestion.value.id,
        stateForFindElem: EEntityState.Active,
        stateForFindIndex: EEntityState.Right,
        stateForClickIndex: EEntityState.Right,
      });
    } else {
      console.log("Сюда некорретно");
      updateGuessesElem({
        entityIdForListByEntityId: activeTest.value.id,
        entityIdForClickIndex: activeQuestion.value.id,
        stateForFindElem: EEntityState.Active,
        stateForFindIndex: EEntityState.Wrong,
        stateForClickIndex: EEntityState.Wrong,
      });
    }
  }

  function setQuestionCount(count: number) {
    questionCount.value = count;
  }

  function initializeTest() {
    progressValue.value = 0;
    score.value = 0;
    step.value = 0;
    questionCount.value = 0;
    isTestEnded.value = false;
    testContent.value = [];
    isLoading.value = true;
    isAnswerSelected.value = false;
    questionNumber.value = 0;
    isClickedCheckButton.value = false;
  }

  function incrementScore() {
    score.value++;
  }

  function incrementProgressValue() {
    progressValue.value += Math.ceil(100 / questionCount.value);
  }

  function toggleIsAnswerSelected(value: boolean) {
    isAnswerSelected.value = value;
  }

  function temporaryTestContent(result: any) {
    testContent.value = cloneDeep(result);
    isLoading.value = false;
    questionCount.value = testContent.value.length;
  }

  function getTestsQuestionsByActiveTestId(activeTestId: number) {
    const result = eduElementTestsQuestionsExtended.getListByEntityId(
      activeTestId
    ) as ITestQuestion[];

    temporaryTestContent(result);

    return result;
  }

  function getTestsAnswersByQuestionId(questionId: number) {
    return eduElementTestsAnswersExtended.getListByEntityId(
      questionId
    ) as ITestAnswer[];
  }

  function getActiveQuestion(activeTestId: number) {
    return eduElementTestsQuestionsExtended.getElemByState(
      EEntityState.Active,
      eduElementTestsQuestionsExtended.getListByEntityId(
        activeTestId
      ) as ITestQuestion[]
    ) as ITestQuestion;
  }

  function getActiveAnswer(questionId: number) {
    return eduElementTestsAnswersExtended.getElemByState(
      EEntityState.Active,
      getTestsAnswersByQuestionId(questionId)
    ) as ITestAnswer;
  }

  function getGuessesByTestId(testId: number) {
    return eduElementGuessesExtended.getListByEntityId(testId) as IGuess[];
  }

  return {
    activeQuestion,
    activeAnswer,
    progressValue,
    score,
    questionCount,
    isAnswerSelected,
    isClickedCheckButton,
    isTestEnded,
    testContent,
    isLoading,
    questionNumber,
    step,
    getNextQuestion,
    startTest,
    checkAnswer,
    checkAnswerNew,
    setQuestionCount,
    initializeTest,
    incrementScore,
    incrementProgressValue,
    toggleIsAnswerSelected,
    isAnswerIsCorrect,
    getQuestionContent,
    getTestsQuestionsByActiveTestId,
    getTestsAnswersByQuestionId,
    getGuessesByTestId,
    updateActiveQuestion,
    updateActiveAnswer,
    updateElementsByState,
    updateGuessesElem,
  };
});
