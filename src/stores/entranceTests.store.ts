import { defineStore } from "pinia";
import { shuffle, deepClone } from "@/helpers/commonFunctions";
import { EGuessed } from "@/types/enums";
import { ref } from "vue";
import { entranceTests, entranceTestsContent } from "@/classes/fetchFromDB";
import {
  EntityCreator,
  Creator,
  CreatorExtended,
  EntityCreatorExtendedArray,
} from "@/classes";
import type { TElemsList } from "@/types/types";
import type {
  IEduElementEntityArray,
  IEntranceTest,
  IEntranceTestContent,
} from "@/types/interfaces";

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

const eduElementEntranceTestsExtended = getEduElementExtended(
  new EntityCreatorExtendedArray<IEntranceTest>(
    ref(eduElementEntranceTests.getList()).value as IEntranceTest[]
  )
) as IEduElementEntityArray<IEntranceTest>;

export const useEntranceTestsStore = defineStore("entranceTests", () => {
  const activeEntranceTest = ref(getActiveEntranceTest());
  const progressValue = ref(0);
  const score = ref(0);
  const questionCount = ref(0);
  const isOptionSelected = ref(false);
  const isTestEnded = ref(false);
  const testContent = ref<IEntranceTestContent[]>([]);
  const isLoading = ref(true);
  const questionNumber = ref(0);
  const step = ref(0);

  function getQuestion() {
    return testContent.value[questionNumber.value].question;
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
    console.log("Start test from entranceTests");
    step.value = 1;
  }

  function isAnswerIsCorrect(idAnswer: number) {
    return testContent.value[questionNumber.value].idAnswerCorrect === idAnswer
      ? true
      : false;
  }

  function setGuessed(value: EGuessed) {
    testContent.value[questionNumber.value].guessed = value;
  }

  function checkAnswer(idAnswer: number) {
    if (isAnswerIsCorrect(idAnswer)) {
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

  function getEntranceTestsList() {
    return ref(eduElementEntranceTests.getList()).value as IEntranceTest[];
  }

  function getActiveEntranceTest() {
    return eduElementEntranceTestsExtended.getActiveElem() as IEntranceTest;
  }

  return {
    activeEntranceTest,
    progressValue,
    score,
    questionCount,
    isOptionSelected,
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
    toggleIsOptionSelected,
    isAnswerIsCorrect,
    getQuestion,
    getEntranceTestsList,
  };
});
