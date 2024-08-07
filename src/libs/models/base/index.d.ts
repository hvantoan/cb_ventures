/// <reference path="./base-request.d.ts" />
/// <reference path="./base-response.d.ts" />
/// <reference path="./session.d.ts" />

declare interface WrappedComponentProps {
  children?: React.ReactNode;
}

declare interface Params<Key = 'storeId', SKey extends string = ''> {
  params: {
    [key in Key]: string;
  };
  searchParams: {
    [key in SKey]: string;
  };
}

declare type Nullable<T> = T | null;
