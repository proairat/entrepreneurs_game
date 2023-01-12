enum EAlert {
  Success = "success",
  Error = "error",
}

enum EEntityState {
  Active = "active",
  Default = "default",
  Close = "close",
  Unlocked = "unlocked",
  Blocked = "blocked",
}

enum EEntityType {
  Modules = "modules",
  ModulesAdvanced = "modulesAdvanced",
  Topics = "topics",
  Tests = "tests",
  EntranceTests = "entranceTests",
  Videos = "videos",
  TestsQuestions = "testsQuestions",
  TestsAnswers = "testsAnswers",
  TabsAuthors = "tabsAuthors",
}

enum EPercent {
  OneCoinLowBoundary = 45,
  OneCoinHighBoundary = 59,
  TwoCoinLowBoundary = 60,
  TwoCoinHighBoundary = 79,
  ThreeCoinLowBoundary = 80,
  ThreeCoinHighBoundary = 100,
}

enum EGuessed {
  Right = "right",
  Wrong = "wrong",
  Undefined = "undefined",
  Active = "active",
}

enum EProgressCaption {
  ModulesCaption = "Прогресс модуля",
  TopicsCaption = "Прогресс темы",
  TestsCaption = "Прогрессс теста",
  EntranceTestsCaption = "Прогресс входного тестирования",
}

enum EPadding {
  Top = "paddingTop",
  Right = "paddingRight",
  Bottom = "paddingBottom",
  Left = "paddingLeft",
}

export {
  EAlert,
  EEntityState,
  EEntityType,
  EPercent,
  EGuessed,
  EProgressCaption,
  EPadding,
};
