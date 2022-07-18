import { firstAction } from "./constant";

export const firstAction = {
  getNumber: () => ({
    type: firstAction,
    payload: "helloWorld",
  }),
};
