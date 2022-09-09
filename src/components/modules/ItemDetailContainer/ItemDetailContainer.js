import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import products from "../../tests/data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products[Math.floor(Math.random() * products.length)]);
        }, 2000);
      });
    };

    getItem()
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  return <Wrapper>{product && <ItemDetail {...product} />}</Wrapper>;
};

export default ItemDetailContainer;

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding: 6rem;
`;
