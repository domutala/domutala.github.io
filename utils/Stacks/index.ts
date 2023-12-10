import vuejs, { nuxt } from "./vuejs";

export interface IStack {
  name: string;
  code: string;
  icon: string;
  logo?: string;
  subStacks: { [key: string]: IStack };
  codes: { [key: string]: ICode };
}

export default { vuejs, nuxt };
