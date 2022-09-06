import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import Spinner from "../../shared/components/Spinner/Spinner";
import productsData from "../../tests/data/products";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, []);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    });
  };
  return (
    <div className="App-main">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>Se produjo un error</div>
      ) : (
        <div style={{ width: "100%" }}>
          <ItemList products={products} />
          <p>{greeting}</p>
          <ItemCount stock={5} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
