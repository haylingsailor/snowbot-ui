export * from "./job";
export * from "./auth";
export * from "./notification";

export const actionCreator = (type, payload) => ({
  type,
  payload
});

export const startedActionConst = actionConst => `${actionConst}_STARTED`;
export const successActionConst = actionConst => `${actionConst}_SUCCESS`;
export const errorActionConst = actionConst => `${actionConst}_ERROR`;
export const resetActionConst = actionConst => `${actionConst}_RESET`;
