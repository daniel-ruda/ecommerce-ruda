import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import Spinner from "../../shared/components/Spinner/Spinner";
import productsData from "../../tests/data/products";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { categoryId } = useParams();
  const getProducts = async () => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line eqeqeq
        resolve(categoryId ? productsData.filter((el) => el.category == categoryId) : productsData);
      }, 2000);
    });
  };

  useEffect(() => {
    setLoading(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

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
