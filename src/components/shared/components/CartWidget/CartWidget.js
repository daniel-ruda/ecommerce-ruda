import React from 'react'
import ShoppingCart from '../../../../assets/images/shopping-cart.svg'
import styled from 'styled-components'

const CartWidget = () => {
  return (
    <Wrapper>
      <CartWrapper>
        <Cart src={ShoppingCart} alt="logo carrito" />
        <div>
            <span>10</span>
        </div>
      </CartWrapper>
    </Wrapper>
  )
}

export default CartWidget
const Wrapper = styled.div`
    cursor: pointer;
`;


const CartWrapper = styled.div`
    display: inline-block;
    top: 5%;
    bottom: 0;
    left: -170px;
    right: 0;
    position: absolute;
    opacity: 1;

    div {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
    left: 48%;
    top: 15%;
    font-size: calc((8/16) * 1.1rem);
    line-height: 8px;
    font-weight: 500;
    background: #00c244;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }  
`;

const Cart = styled.img`
  height: 6.5vmin;
  pointer-events: none;
  margin-right: 10px;
`;