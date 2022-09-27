import React from "react";
import styled from "styled-components";
import CustomButton from "../../shared/components/Buttons/CustomButton";

const ItemCount = ({ stock = 0, counter, setCounter, isInCart }) => {
  const onAdd = () => stock > counter && setCounter(counter + 1);
  const onSub = () => setCounter(counter - 1);

  return (
    <>
      <Warning> Cantidad en Carrito: {isInCart != null ? <b>{isInCart.quantity}</b> : <b>0 </b>}</Warning>
      {stock > 0 && (
        <Warning>
          / Stock Disponible: <b>{stock}</b>
        </Warning>
      )}
      <Wrapper>
        {stock > 0 ? (
          <>
            <WrapperButton>
              <CustomButton hide={counter <= 0} onClick={onSub} text="-" />
            </WrapperButton>
            <Input type="text" value={counter} disabled />
            <WrapperButton>
              <CustomButton hide={stock <= counter} onClick={onAdd} text="+" />
            </WrapperButton>
          </>
        ) : (
          <WrapperAddButton>
            <CustomButton text="SIN STOCK" />
          </WrapperAddButton>
        )}
      </Wrapper>
    </>
  );
};

export default ItemCount;

const Warning = styled.span`
  color: black;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 3px;
  border: 1px solid #00c244;
  background-color: #00c244;
  margin: auto;
`;

const WrapperButton = styled.div`
  width: 33%;
`;

const WrapperAddButton = styled.div`
  width: 100%;
`;

const Input = styled.input`
  text-align: center;
  width: 34%;
  font-weight: bolder;
  font-size: 1.5rem;
  border-top: solid 2px #00c244;
  border-bottom: solid 2px #00c244;
  border-right: none;
  border-left: none;
  border-radius: 3px;
  background-color: white;
`;
