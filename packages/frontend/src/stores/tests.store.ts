import { defineStore, storeToRefs } from "pinia";
import { EEntityState } from "share/types/enums";
import { ref } from "vue";
import { testsQuestions, testsAnswers, guesses } from "@/fetch";
import {
  EntityCreator,
  Creator,
  CreatorExtended,
  EntityCreatorExtendedMap,
} from "@/classes";
import type { TElemsList } from "share/types/types";
import type {
  ITestAnswer,
  IEduElementEntityMap,
  ITestQuestion,
  IUpdateMapElem,
  IUpdateMapElements,
  IGuess,
} from "share/types/interfaces";
// import isEmpty from "lodash/isEmpty";
// import cloneDeep from "lodash/cloneDeep";
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

  function updateTestsAnswersElementsByState(
    updateMapElements: IUpdateMapElements
  ) {
    eduElementTestsAnswersExtended.updateElementsByState(updateMapElements);
  }

  function updateGuessesElem(updateMapElem: IUpdateMapElem) {
    eduElementGuessesExtended.updateElemByState(updateMapElem);
  }

  function updateGuessesElementsByState(updateMapElements: IUpdateMapElements) {
    eduElementGuessesExtended.updateElementsByState(updateMapElements);
  }

  function getQuestionContent() {
    return activeQuestion.value.question;
  }

  function getNextQuestion() {
    if (questionNumber.value >= questionCount.value - 1) {
      isTestEnded.value = true;
      step.value = 2;
    } else {
      questionNumber.value += 1;
    }

    const guesses = getGuessesByTestId(activeTest.value.id);

    updateActiveAnswer({
      entityIdForListByEntityId: activeQuestion.value.id,
      entityIdForClickIndex: activeAnswer.value.id,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Unlocked,
      stateForClickIndex: EEntityState.Unlocked,
    });

    updateTestsAnswersElementsByState({
      entityIdForListByEntityId: activeQuestion.value.id,
      stateForListByEntityIdFiltered: EEntityState.Blocked,
      stateForListByEntityId: EEntityState.Unlocked,
    });

    updateActiveQuestion({
      entityIdForListByEntityId: activeTest.value.id,
      entityIdForClickIndex: guesses[questionNumber.value].id,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Default,
      stateForClickIndex: EEntityState.Active,
    });

    updateGuessesElem({
      entityIdForListByEntityId: activeTest.value.id,
      entityIdForClickIndex: activeQuestion.value.id,
      stateForFindElem: EEntityState.Undefined,
      stateForFindIndex: EEntityState.Undefined,
      stateForClickIndex: EEntityState.Active,
    });

    toggleIsClickedCheckButton(false);
  }

  function startTest() {
    isLoading.value = false;
    step.value = 1;
    questionCount.value = getTestsQuestionsByActiveTestId(
      activeTest.value.id
    ).length;
  }

  function isAnswerIsCorrect(answerId: number) {
    return activeQuestion.value.idAnswerCorrect === answerId ? true : false;
  }

  function checkAnswer(answerId: number) {
    if (isAnswerIsCorrect(answerId)) {
      incrementScore();
      updateGuessesElem({
        entityIdForListByEntityId: activeTest.value.id,
        entityIdForClickIndex: activeQuestion.value.id,
        stateForFindElem: EEntityState.Active,
        stateForFindIndex: EEntityState.Right,
        stateForClickIndex: EEntityState.Right,
      });
    } else {
      updateGuessesElem({
        entityIdForListByEntityId: activeTest.value.id,
        entityIdForClickIndex: activeQuestion.value.id,
        stateForFindElem: EEntityState.Active,
        stateForFindIndex: EEntityState.Wrong,
        stateForClickIndex: EEntityState.Wrong,
      });
    }
  }

  function initializeTest() {
    progressValue.value = 0;
    score.value = 0;
    step.value = 0;
    questionCount.value = 0;
    isTestEnded.value = false;
    isLoading.value = true;
    questionNumber.value = 0;
    toggleIsAnswerSelected(false);
    toggleIsClickedCheckButton(false);
    const guesses = getGuessesByTestId(activeTest.value.id);

    updateGuessesElementsByState({
      entityIdForListByEntityId: activeTest.value.id,
      stateForListByEntityIdFiltered: EEntityState.Wrong,
      stateForListByEntityId: EEntityState.Undefined,
    });
    updateGuessesElementsByState({
      entityIdForListByEntityId: activeTest.value.id,
      stateForListByEntityIdFiltered: EEntityState.Right,
      stateForListByEntityId: EEntityState.Undefined,
    });
    updateGuessesElem({
      entityIdForListByEntityId: activeTest.value.id,
      entityIdForClickIndex: guesses[questionNumber.value].id,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Undefined,
      stateForClickIndex: EEntityState.Active,
    });
    updateGuessesElem({
      entityIdForListByEntityId: activeTest.value.id,
      entityIdForClickIndex: guesses[questionNumber.value].id,
      stateForFindElem: EEntityState.Undefined,
      stateForFindIndex: EEntityState.Undefined,
      stateForClickIndex: EEntityState.Active,
    });
    updateActiveQuestion({
      entityIdForListByEntityId: activeTest.value.id,
      entityIdForClickIndex: guesses[questionNumber.value].id,
      stateForFindElem: EEntityState.Active,
      stateForFindIndex: EEntityState.Active,
      stateForClickIndex: EEntityState.Active,
    });
  }

  function incrementScore() {
    score.value++;
  }

  function incrementProgressValue() {
    progressValue.value += Math.ceil(100 / questionCount.value);
  }

  function toggleIsClickedCheckButton(value: boolean) {
    isClickedCheckButton.value = value;
  }

  function toggleIsAnswerSelected(value: boolean) {
    isAnswerSelected.value = value;
  }

  function getTestsQuestionsByActiveTestId(activeTestId: number) {
    return eduElementTestsQuestionsExtended.getListByEntityId(
      activeTestId
    ) as ITestQuestion[];
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
    isLoading,
    questionNumber,
    step,
    getNextQuestion,
    startTest,
    checkAnswer,
    initializeTest,
    incrementScore,
    incrementProgressValue,
    toggleIsClickedCheckButton,
    toggleIsAnswerSelected,
    isAnswerIsCorrect,
    getQuestionContent,
    getTestsQuestionsByActiveTestId,
    getTestsAnswersByQuestionId,
    getGuessesByTestId,
    updateActiveQuestion,
    updateActiveAnswer,
    updateTestsAnswersElementsByState,
    updateGuessesElem,
    updateGuessesElementsByState,
  };
});
