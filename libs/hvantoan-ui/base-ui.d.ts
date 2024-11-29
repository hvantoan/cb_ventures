declare interface TableColumn<T extends string = string, K = any> {
  align?: 'left' | 'right' | 'center';
  label: string;
  select: T | ((context: K) => React.ReactNode);
  className?: string;
  Component?: React.FunctionComponent<any>;
  componentProps?: Record<string, unknown>;
}
