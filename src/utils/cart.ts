import { cartItem } from "../types/cart";

export const calculateTotalPrice = (cart: cartItem[]) =>
  Math.round(
    cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0) *
      100
  ) / 100;
