import React from "react";
import styled from "styled-components";
import ShoppingCart from "../../../assets/images/shopping-cart.svg";
import ConfirmIcon from "../../../assets/images/confirm_icon.svg";
import CancelIcon from "../../../assets/images/cancel__icon.svg";

const Item = ({ id, imageUrl, description, title, price, promotion, isShipAvailable }) => {
  
  return (
    <Wrapper>
      <WrapperImage>
        <img src={imageUrl} alt={title} />
      </WrapperImage>
      <WrapperTitle>{title}</WrapperTitle>
      <WrapperPrice>${price}</WrapperPrice>
      <WrapperDetail>{promotion}</WrapperDetail>
      <WrapperShipping>
        {isShipAvailable ? <img src={ConfirmIcon} alt="" /> : <img src={CancelIcon} alt="" />} Shipping Available
      </WrapperShipping>
      <WrapperAddCart>
        <img src={ShoppingCart} alt="shopping cart" />
        ADD TO CART
      </WrapperAddCart>
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;

  padding: 4px 4px !important;
  margin-bottom: 8px;
  border: 1px solid black;
  cursor: pointer;
`;

const WrapperImage = styled.div`
  width: 100%;
  text-align: center;

  img {
    padding-top: 1rem;
    width: 60%;
  }
`;

const WrapperTitle = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
`;

const WrapperPrice = styled.div`
  font-size: 19px;
`;

const WrapperDetail = styled.div`
  height: 32px;
  font-family: "Archivo", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: none;
  margin-top: 4px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 0px;
  color: #ab2635;
`;
const WrapperShipping = styled.div`
  font-family: "Archivo", sans-serif;
  font-size: 0.7rem;
  border-top: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  img {
    width: 12px;
    margin-right: 2px;
  }
`;

const WrapperAddCart = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  margin-top: 10px;
  img {
    width: 20px;
    margin-right: 2px;
  }

`;
