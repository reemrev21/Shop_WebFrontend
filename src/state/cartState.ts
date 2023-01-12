import { atom } from "recoil";

export const selectedItemState = atom<Array<number>>({
  key: "selectedItemState",
  default: [],
});
