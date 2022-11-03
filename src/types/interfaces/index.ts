interface INavigation {
  name: string;
  to: string;
  componentName: string;
  current: boolean;
  src: string;
  alt: string;
}

interface ITopic {
  id: number;
  state: string;
  title: string;
}

export type { INavigation, ITopic };
