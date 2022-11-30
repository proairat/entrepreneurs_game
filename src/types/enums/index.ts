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
  Topics = "topics",
  Tests = "tests",
  Modules = "modules",
  Videos = "videos",
  EntranceTests = "entranceTests",
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

export { EAlert, EEntityState, EEntityType, EPercent, EGuessed };
