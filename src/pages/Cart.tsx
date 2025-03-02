import styled from "styled-components";
import { useCartStore } from "../store/cartStore";
import CartProductCard from "../components/productCard/CartProductCard";

const Container = styled.div`
  display: flex;
`;

export default function Cart() {
  const { cart, totalPrice } = useCartStore();

  return (
    <Container>
      <div>
        {cart.map((item, index) => {
          return <CartProductCard cartItem={item} key={index} />;
        })}
      </div>
      <div>
        <h2>Order overview</h2>
        <p>${totalPrice}</p>
      </div>
    </Container>
  );
}
