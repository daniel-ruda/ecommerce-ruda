import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../shared/components/Spinner/Spinner";
import products from "../../tests/data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line eqeqeq
          resolve(products.find((el) => el.id == id));
        }, 1000);
      });
    };

    getItem()
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [id]);

  return <>{loading ? <Spinner /> : <Wrapper>{product && <ItemDetail {...product} />}</Wrapper>}</>;
};

export default ItemDetailContainer;

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding: 6rem;
`;
