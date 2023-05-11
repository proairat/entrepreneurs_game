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
  Right = "right",
  Wrong = "wrong",
  Undefined = "undefined",
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
  Guesses = "guesses",
}

enum EPercent {
  OneCoinLowBoundary = 45,
  OneCoinHighBoundary = 59,
  TwoCoinLowBoundary = 60,
  TwoCoinHighBoundary = 79,
  ThreeCoinLowBoundary = 80,
  ThreeCoinHighBoundary = 100,
}

enum EGuess {
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

enum EMargin {
  Top = "marginTop",
  Right = "marginRight",
  Bottom = "marginBottom",
  Left = "marginLeft",
}

enum EVideoTypes {
  MP4 = "MP4",
  FLV = "FLV",
  AVI = "AVI",
}

enum EServerResponses {
  MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_POST_FILE_SUCCESSFUL = "MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_POST_FILE_SUCCESSFUL",
  MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_POST_BODY_SUCCESSFUL = "MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_POST_BODY_SUCCESSFUL",
  MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_PUT_FILE_SUCCESSFUL = "MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_PUT_FILE_SUCCESSFUL",
  MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_PUT_BODY_SUCCESSFUL = "MODULES_UPLOAD_FILE_AND_PASS_VALIDATION_PUT_BODY_SUCCESSFUL",
  MODULES_REMOVE_SUCCESSFUL = "MODULES_REMOVE_SUCCESSFUL",
  MODULES_REMOVE_ERROR = "MODULES_REMOVE_ERROR",
  VIDEOS_CREATE_SUCCESSFUL ="VIDEOS_CREATE_SUCCESSFUL",
  VIDEOS_CREATE_ERROR = "VIDEOS_CREATE_ERROR",
  VIDEOS_POST_UPLOAD_POSTER_SUCCESSFUL = "VIDEOS_POST_UPLOAD_POSTER_SUCCESSFUL",
  VIDEOS_POST_UPLOAD_VIDEO_FILE_SUCCESSFUL = "VIDEOS_POST_UPLOAD_VIDEO_FILE_SUCCESSFUL",
  VIDEOS_REMOVE_SUCCESSFUL = "VIDEOS_REMOVE_SUCCESSFUL",
  VIDEOS_REMOVE_ERROR = "VIDEOS_REMOVE_ERROR",
}

enum EUploadType {
  VIDEO_POSTER = "VIDEO_POSTER",
  VIDEO_VIDEO_FILE = "VIDEO_VIDEO_FILE",
}

export {
  EAlert,
  EEntityState,
  EEntityType,
  EPercent,
  EGuess,
  EProgressCaption,
  EPadding,
  EMargin,
  EVideoTypes,
  EServerResponses,
  EUploadType,
};
