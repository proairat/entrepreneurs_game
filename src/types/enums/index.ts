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

export { EEntityState, EEntityType, EPercent, EGuessed };
