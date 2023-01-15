import { defineStore } from "pinia";
import { shuffle } from "@/helpers/commonFunctions";
import { EEntityState, EGuess } from "@/types/enums";
import { ref } from "vue";
import { entranceTests, entranceTestsQuestions } from "@/fetch";
import {
  EntityCreator,
  Creator,
  CreatorExtended,
  EntityCreatorExtendedArray,
  EntityCreatorExtendedMap,
} from "@/classes";
import type { TElemsList } from "@/types/types";
import type {
  IEduElementEntityArray,
  IEduElementEntityMap,
  IEntranceTest,
  IEntranceTestQuestion,
} from "@/types/interfaces";
import cloneDeep from "lodash/cloneDeep";

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

const eduElementEntranceTests = getEduElement(
  new EntityCreator<IEntranceTest>(),
  entranceTests
);

const eduElementEntranceTestsQuestions = getEduElement(
  new EntityCreator<IEntranceTestQuestion>(),
  entranceTestsQuestions
);

const eduElementEntranceTestsExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<IEntranceTest>(
    ref(eduElementEntranceTests.getList()).value as IEntranceTest[]
  )
) as IEduElementEntityArray<IEntranceTest>;

const eduElementEntranceTestsQuestionsExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<IEntranceTestQuestion>(
    ref(eduElementEntranceTestsQuestions.getList()).value as TElemsList<
      number,
      IEntranceTestQuestion
    >
  )
) as IEduElementEntityMap<IEntranceTestQuestion>;

export const useEntranceTestsStore = defineStore("entranceTests", () => {
  const activeEntranceTest = ref(getActiveEntranceTest());
  const progressValue = ref(0);
  const score = ref(0);
  const questionCount = ref(0);
  const isAnswerSelected = ref(false);
  const isTestEnded = ref(false);
  const testContent = ref<IEntranceTestQuestion[]>([]);
  const isLoading = ref(true);
  const questionNumber = ref(0);
  const step = ref(0);

  function getQuestionContent() {
    return testContent.value[questionNumber.value].question;
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

  function isAnswerIsCorrect(id: number) {
    return testContent.value[questionNumber.value].idAnswerCorrect === id
      ? true
      : false;
  }

  function setGuessed(value: EGuess) {
    testContent.value[questionNumber.value].guesses = value;
  }

  function setIdAnswerUserSelected(id: number) {
    testContent.value[questionNumber.value].idAnswerUserSelected.push(id);
  }

  function checkAnswer(id: number) {
    if (isAnswerIsCorrect(id)) {
      incrementScore();
      setGuessed(EGuess.Right);
    } else {
      setGuessed(EGuess.Wrong);
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

  function getEntranceTestsList() {
    return ref(eduElementEntranceTests.getList()).value as IEntranceTest[];
  }

  function getActiveEntranceTest() {
    return eduElementEntranceTestsExtended.getElemByState(
      EEntityState.Active
    ) as IEntranceTest;
  }

  function getEntranceTestsQuestionsByEntityId(entityId: number) {
    const result = eduElementEntranceTestsQuestionsExtended.getListByEntityId(
      entityId
    ) as IEntranceTestQuestion[];

    result.forEach((item) => shuffle(item.answers));

    testContent.value = cloneDeep(result);
    isLoading.value = false;
    questionNumber.value = 0;
    questionCount.value = testContent.value.length;
  }

  return {
    activeEntranceTest,
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
    getEntranceTestsList,
    getEntranceTestsQuestionsByEntityId,
    setIdAnswerUserSelected,
  };
});
