/// <reference types="@fumy/models" />
/// <reference types="redux-persist" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const value: {
    src: string;
  };
  export default value;
}
