import { atom } from "recoil";
import { ICoupon } from "../types/coupon";

export const checkedItemState = atom<Array<number>>({
  key: "checkedItemState",
  default: [],
});

export const selectedCouponState = atom<ICoupon>({
  key: "selectedCouponState",
  default: {
    type: "none",
    title: "선택안함",
  },
});
