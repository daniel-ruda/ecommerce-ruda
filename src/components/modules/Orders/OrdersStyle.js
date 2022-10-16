import styled from "styled-components";

export const Header = styled.div`
  color: black;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 3px solid black;
  margin-top: 15px !important;
  margin: auto;
  background-color: white;
  font-weight: bolder;
  padding: 0.5rem;
  text-decoration: none;
  margin-bottom: 1rem;

  .header-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .header-icon-show {
    display: flex;
    align-items: center;
  }
  .header-icon-delete {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  min-height: 90vh;
  margin-top: 6rem;
  background-color: #ededed;
  padding: 2rem;
  position: relative;
  overflow-y: hidden;
  @media (max-width: 768px) {
    min-height: 100vh;
    overflow-y: auto;
  }
`;

export const CartRigth = styled.div`
  width: 100%;
  margin-right: 1rem;
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 0.8rem;
  background-color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductDetail = styled.div`
  width: 60%;
  display: flex;
`;

export const ProductDelete = styled.div`
  width: 15%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 600%;

  span,
  img {
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 600%;
    border-left: 1px solid #d9dae1;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 100%;
    border-top: 1px solid #d9dae1;
    background-color: green;
    &:before {
      content: "";
      height: 0;
    }
  }
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

export const ProductImage = styled.div`
  width: 40%;
  margin: auto;
  img {
    position: relative;
    padding: 1rem;
    width: 60%;
  }
`;

export const ProductDescription = styled.div`
  width: 60%;
  margin: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
  input {
    width: 10%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ItemPriceTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: bold;
`;

export const DetailPrices = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: white;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  background-color: white;
  width: 100%;
`;

export const OrderBuyer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    p {
      margin: 0px;
    }
  }
`;

export const ItemsDetailContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #c8c8c8;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
