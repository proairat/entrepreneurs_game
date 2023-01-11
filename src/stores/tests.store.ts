import { defineStore, storeToRefs } from "pinia";
import { EEntityState, EGuessed } from "@/types/enums";
import { ref } from "vue";
import { testsQuestions, testsAnswers } from "@/fetch";
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
  IUpdateMap,
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

export const useTestsStore = defineStore("tests", () => {
  const modulesStore = useModulesStore();
  const { activeTest } = storeToRefs(modulesStore);
  const progressValue = ref(0);
  const score = ref(0);
  const questionCount = ref(0);
  const isAnswerSelected = ref(false);
  const isTestEnded = ref(false);
  const testContent = ref<ITestQuestion[]>([]);
  const isLoading = ref(true);
  const questionNumber = ref(0);
  const step = ref(0);
  const activeQuestion = ref(getActiveQuestion(activeTest.value.id));
  const activeAnswer = ref(getActiveAnswer(activeQuestion.value.id));

  function updateActiveQuestion(updateMap: IUpdateMap) {
    eduElementTestsQuestionsExtended.updateElemByState(updateMap);
    activeQuestion.value = getActiveQuestion(
      updateMap.entityIdForListByEntityId
    );
    activeAnswer.value = getActiveAnswer(activeQuestion.value.id);
  }

  function updateActiveAnswer(updateMap: IUpdateMap) {
    eduElementTestsAnswersExtended.updateElemByState(updateMap);
    activeAnswer.value = getActiveAnswer(updateMap.entityIdForListByEntityId);
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
      setGuessed(EGuessed.Active);
    }
  }

  function startTest() {
    step.value = 1;
  }

  function isAnswerIsCorrect(id: number) {
    /*return testContent.value[questionNumber.value].idAnswerCorrect === id
      ? true
      : false;*/
    return activeQuestion.value.idAnswerCorrect === id ? true : false;
  }

  function setGuessed(value: EGuessed) {
    // testContent.value[questionNumber.value].guessed = value;
    activeQuestion.value.guessed = value;
  }

  function checkAnswer(id: number) {
    if (isAnswerIsCorrect(id)) {
      incrementScore();
      setGuessed(EGuessed.Right);
    } else {
      setGuessed(EGuessed.Wrong);
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

  return {
    activeQuestion,
    activeAnswer,
    progressValue,
    score,
    questionCount,
    isAnswerSelected,
    isTestEnded,
    testContent,
    isLoading,
    questionNumber,
    step,
    getNextQuestion,
    startTest,
    checkAnswer,
    setQuestionCount,
    initializeTest,
    incrementScore,
    incrementProgressValue,
    toggleIsAnswerSelected,
    isAnswerIsCorrect,
    getQuestionContent,
    getTestsQuestionsByActiveTestId,
    getTestsAnswersByQuestionId,
    updateActiveQuestion,
    updateActiveAnswer,
  };
});
