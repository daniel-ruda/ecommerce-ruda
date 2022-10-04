import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import Spinner from "../../shared/components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { useCallback } from "react";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { categoryId } = useParams();

  const getProducts = useCallback(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    const queryByCategory = categoryId && query(queryCollection, where("categoryId", "==", categoryId));
    getDocs(queryByCategory || queryCollection)
      .then((response) => {
        const data = response.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, [categoryId]);

  useEffect(() => {


    getProducts();
    
  }, [categoryId, getProducts]);

  return (
    <div className="App-main">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>Se produjo un error</div>
      ) : (
        <div style={{ width: "100%" }}>
          <ItemList products={products} />
          {/* <p>{greeting}</p> */}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
