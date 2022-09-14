import React from "react";
import Item from "../Item/Item";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <Link key={product.id} to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
          <Item {...product} />
        </Link>
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
