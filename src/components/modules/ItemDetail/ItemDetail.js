import styled from "styled-components";
import Shipping from "../../shared/components/Shipping/Shipping";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "../../../assets/images/shoppingCart.svg";

const ItemDetail = ({ id, stock, imageUrl, description, title, price, promotion, isShipAvailable, details }) => {
  const [counter, setCounter] = useState(0);

  return (
    <Wrapper>
      <MainInformation>
        <ImageContainer>
          <img src={imageUrl} alt={title} />
        </ImageContainer>
        <Information>
          <h1>{title}</h1>
          <PriceContainer>${price}</PriceContainer>
          <Shipping isShipAvailable={isShipAvailable} />
          <WrapperCount>
            <ItemCount stock={stock} counter={counter} setCounter={setCounter} />
          </WrapperCount>
          <Link to={"/cart"} className={counter > 0 ? "cartButton" : "cartButtonDisabled"}>
            <img src={ShoppingCart} alt="shopping cart" className="cartButtonImg" />
            FINALIZAR COMPRA
          </Link>
        </Information>
      </MainInformation>
      <ProductInformationWrapper>
        <ProductInformation>
          <h3>Product Information</h3>
          <hr />
          <ul>
            {details.split(";").map((el, index) => (
              <li key={index}>- {el}</li>
            ))}
          </ul>
        </ProductInformation>
      </ProductInformationWrapper>
    </Wrapper>
  );
};

export default ItemDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const MainInformation = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  width: 50%;
  border: 1px solid #eaebeb;
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 300px;
  img {
    max-height: 385px;
  }
  &:hover {
    box-shadow: 0 2px 8px #c8c8c8;
  }
`;
const Information = styled.div`
  width: 50%;

  h1 {
    font-family: Archivo, sans-serif;
    font-size: 1.3rem;
    color: #191f1c;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 2.8rem;
    margin-bottom: 0;
  }
`;

const WrapperCount = styled.div`
  width: 45%;
  margin: auto;
`;
const PriceContainer = styled.div`
  font-family: "Archivo";
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  color: #fff;
  background-color: #191f1c;
  width: 20%;
  margin-bottom: 6rem;
`;

const ProductInformationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductInformation = styled.div`
  width: 70%;
  text-align: center;
  border: 1px solid #eaebeb;
  background: #ffffff;
  color: #5e6260;
  padding: 2.3rem;

  h2 {
    font-family: "Archivo", sans-serif;
    color: #191f1c;
  }

  hr {
    height: auto;
    border-top: 2px solid #bb5811;
    width: 32px;
  }
  ul {
    list-style-type: none;
    text-align: left;
    font-size: 1.2rem;
  }
`;
