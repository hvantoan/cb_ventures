/// <reference types="redux-persist" />
/// <reference types="@hvantoan/ui/mui-theme" />
/// <reference types="@hvantoan/ui/base-ui" />
/// <reference types="@hvantoan/models" />

declare module 'aos';
declare interface NavigationInfo {
  name: string;
  shortName?: string;
  path: string;
  icon?: string;
  children?: NavigationInfo[];
}
