import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../shared/components/Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const db = getFirestore();
  const queryDoc = doc(db, "items", id);

  useEffect(() => {
    const getItem = () => {
      getDoc(queryDoc)
        .then((response) => {
          const data = { ...response.data(), id };
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getItem();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <>{loading ? <Spinner /> : <Wrapper>{product && <ItemDetail {...product} />}</Wrapper>}</>;
};

export default ItemDetailContainer;

const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding: 6rem;
`;
