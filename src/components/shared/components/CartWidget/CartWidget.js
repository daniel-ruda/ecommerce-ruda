import React from "react";
import ShoppingCart from "../../../../assets/images/shoppingCart.svg";
import styled from "styled-components";

const CartWidget = ({ itemsInCart }) => {
  return (
    <Wrapper>
      <CartWrapper>
        <Cart src={ShoppingCart} alt="logo carrito" />
        <div>
          <span>{itemsInCart}</span>
        </div>
      </CartWrapper>
    </Wrapper>
  );
};

export default CartWidget;
const Wrapper = styled.div`
  cursor: pointer;
`;

const CartWrapper = styled.div`
  display: inline-block;
  top: 1%;
  bottom: 0;
  left: -290px;
  right: 0;
  position: absolute;
  opacity: 1;

  div {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    left: 48.5%;
    top: 15%;
    font-size: calc((8 / 16) * 1.3rem);
    line-height: 8px;
    font-weight: 500;
    background: #00c244;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    @media (max-width: 768px) {
      width: 1rem;
    height: 1rem;
  }
  }
`;

const Cart = styled.img`
  height: 7.5vmin;
  pointer-events: none;
  margin-right: 10px;

  @media (max-width: 768px) {
    height: 12.5vmin;
  }
`;
