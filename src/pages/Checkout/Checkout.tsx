import { useCartStore } from "../../store/cartStore";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <form action="">
        <h2>Contact details</h2>
        <input type="email" placeholder="you@example.com" />
        <input type="tel" placeholder="123 456 78 90" />
      </form>
      {cart.map(() => {})}
    </>
  );
}
