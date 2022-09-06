import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../../shared/components/Buttons/CustomButton";

const ItemCount = ({ stock = 0, initial = 0 }) => {
  const [disable, setDisable] = useState(false);
  const [counter, setCounter] = useState(initial);

  const onAdd = () => (stock > counter ? setCounter(counter + 1) : setDisable(true));

  const onSub = () => {
    setCounter(counter - 1);
    stock >= counter && setDisable(false);
  };

  return (
    <>
      <Warning>{!disable && stock > 0 ? `Stock inicial: ${stock}` : "Sin stock"}</Warning>
      <Wrapper>
        {counter ? (
          <>
            <WrapperButton>
              <CustomButton onClick={onSub} text="-" />
            </WrapperButton>
            <Input type="text" value={counter} disabled />
            <WrapperButton>
              <CustomButton hide={disable} onClick={onAdd} text="+" />
            </WrapperButton>
          </>
        ) : (
          <WrapperAddButton>
          <CustomButton text="AGREGAR" onClick={onAdd} />
          </WrapperAddButton>
        )}
      </Wrapper>
    </>
  );
};

export default ItemCount;

const Warning = styled.span``;

const Wrapper = styled.div`
  display: flex;
  width: 20%;
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
