interface INavigation {
  name: string;
  to: string;
  componentName: string;
  current: boolean;
  src: string;
  alt: string;
}

export type { INavigation };
