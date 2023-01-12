import { atom } from "recoil";
import { ICoupon } from "../types/coupon";

export const checkedItemState = atom<Array<number>>({
  key: "checkedItemState",
  default: [],
});

export const selectedCouponState = atom({
  key: "selectedCouponState",
  default: {},
});
