import { defineStore, storeToRefs } from "pinia";
import { EGuessed } from "@/types/enums";
import { ref } from "vue";
import { testsContent } from "@/classes/fetchFromDB";
import {
  EntityCreator,
  Creator,
  CreatorExtended,
  EntityCreatorExtendedMap,
} from "@/classes";
import type { TElemsList } from "@/types/types";
import type { IEduElementEntityMap, ITestContent } from "@/types/interfaces";
import isEmpty from "lodash/isEmpty";
import cloneDeep from "lodash/cloneDeep";
import { useModulesStore } from "@/stores";

console.log("isEmpty([1, 2, 3]", isEmpty({ a: 1 }));
// => false

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

const eduElementTestsContent = getEduElement(
  new EntityCreator<ITestContent>(),
  testsContent
);
const eduElementTestsContentExtended = getEduElementExtended(
  new EntityCreatorExtendedMap<ITestContent>(
    ref(eduElementTestsContent.getList()).value as TElemsList<
      number,
      ITestContent
    >
  )
) as IEduElementEntityMap<ITestContent>;

export const useTestsStore = defineStore("tests", () => {
  const modulesStore = useModulesStore();
  const { activeTest } = storeToRefs(modulesStore);
  const progressValue = ref(0);
  const score = ref(0);
  const questionCount = ref(0);
  const isAnswerSelected = ref(false);
  const isTestEnded = ref(false);
  const testContent = ref<ITestContent[]>([]);
  const isLoading = ref(true);
  const questionNumber = ref(0);
  const step = ref(0);
  const activeQuestion = ref(getActiveQuestion(activeTest.value.id));

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

  function isAnswerIsCorrect(idAnswer: number) {
    /*return testContent.value[questionNumber.value].idAnswerCorrect === idAnswer
      ? true
      : false;*/
    return activeQuestion.value.idAnswerCorrect === idAnswer ? true : false;
  }

  function setGuessed(value: EGuessed) {
    // testContent.value[questionNumber.value].guessed = value;
    activeQuestion.value.guessed = value;
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

  function getTestsContentByActiveTestId(activeTestId: number) {
    const result = eduElementTestsContentExtended.getListByEntityId(
      activeTestId
    ) as ITestContent[];

    temporaryTestContent(result);

    return result;
  }

  function getActiveQuestion(activeTestId: number) {
    return eduElementTestsContentExtended.getActiveElem(
      eduElementTestsContentExtended.getListByEntityId(
        activeTestId
      ) as ITestContent[]
    ) as ITestContent;
  }

  return {
    activeQuestion,
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
    getTestsContentByActiveTestId,
  };
});
