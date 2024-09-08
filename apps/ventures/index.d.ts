/// <reference types="redux-persist" />
/// <reference types="@fumy/ui/mui-theme" />
/// <reference types="@fumy/ui/base-ui" />
/// <reference types="@fumy/models" />

declare module 'aos';
declare interface NavigationInfo {
  name: string;
  shortName?: string;
  path: string;
  icon?: string;
  children?: NavigationInfo[];
}
