import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";

const ItemList = ({ products }) => {
  return (

    <Wrapper>
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}  
    </Wrapper>

  );
};

export default ItemList;

const Wrapper = styled.div`
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

