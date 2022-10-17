import {
  Header,
  ProductsContainer,
  Wrapper,
  CartRigth,
  ProductContainer,
  ProductDetail,
  ProductDelete,
  ProductImage,
  ProductDescription,
  EmptyCart,
  OrderBuyer,
  ItemsDetailContainer,
} from "./OrdersStyle.js";
import { Link } from "react-router-dom";
import CustomButton from "../../shared/components/Buttons/CustomButton.js";
import ShoppingCart from "../../../assets/images/shoppingCart.svg";
import { useState, useEffect } from "react";
import TrashImage from "../../../assets/images/trashIcon.svg";
import { getFirestore, getDocs, collection, updateDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import Spinner from "../../shared/components/Spinner/Spinner.js";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const db = getFirestore();

  useEffect(() => {
    const getOrders = () => {
      setLoading(true);

      const queryCollection = collection(db, "orders");

      getDocs(queryCollection)
        .then((response) => {
          const data = response.docs.map((order) => {
            return { ...order.data(), id: order.id };
          });
          setOrders(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
        });
    };
    getOrders();
  }, [db]);

  const removeItem = (id) => {
    setLoading(true);
    orders
      .find((order) => order.id === id)
      .items.forEach(async (item) => {
        const queryUpdate = doc(db, "items", item.id);
        const itemFromFB = await getDoc(queryUpdate);
        const itemDetail = itemFromFB.data();

        updateDoc(queryUpdate, { stock: itemDetail.stock + item.quantity })
          .then(() => {
            console.log("updated stock item" + item.id);
          })
          .catch(() => toast.error("Error updating items collection"));
      });

    deleteDoc(doc(db, "orders", id))
      .then(() => {
        toast.success(`Order ${id} deleted successfully.`, { theme: "colored" });
        setOrders(orders.filter((order) => order.id !== id));
        setLoading(false);
      })
      .catch((error) => toast.error("Error deleting order", error));
  };

  return (
    <Wrapper>
      {loading && <Spinner />}
      {error && <div>Error getting orders</div>}
      {orders.length === 0 ? (
        <EmptyCart>
          <h1>No Orders</h1>
          <Link to="/">
            <CustomButton text="Go to Home" />
          </Link>
        </EmptyCart>
      ) : (
        <>
          <CartRigth>
            <Header>
              <div className="header-container">
                <div className="header-icon-show">
                  <img src={ShoppingCart} alt="shopping cart" className="cartButtonImg" />
                  Orders ({orders.length} )
                </div>
              </div>
            </Header>
            <ProductsContainer>
              {orders.map((order) => (
                <ProductContainer key={order.id}>
                  <OrderBuyer>
                    <p>
                      ORDER ID: <strong>{order.id}</strong>
                    </p>
                    <p>
                      {" "}
                      <strong>Buyer: </strong>
                      {order.buyer.name}
                    </p>
                    <p>
                      <strong>Total Products: </strong>
                      {order.items.length}
                    </p>
                    <p>
                      <strong>Date: </strong>
                      {order.date.toDate().toDateString()}
                    </p>
                    <p>
                      <strong>Total Price Order:</strong> ${order.total}
                    </p>
                  </OrderBuyer>
                  <ItemsDetailContainer>
                    {order.items.map((item) => (
                      <ProductDetail key={item.id}>
                        <ProductImage>
                          <Link to={`/item/${item.id}`}>
                            <img src={item.imageUrl} alt={item.title} />
                          </Link>
                        </ProductImage>
                        <ProductDescription>
                          <Link to={`/item/${item.id}`}>
                            <h3>{item.title}</h3>
                          </Link>
                          <div>${item.price}</div>
                          <div>
                            Quantity:
                            <input type="text" value={item.quantity} disabled />
                          </div>
                        </ProductDescription>
                      </ProductDetail>
                    ))}
                  </ItemsDetailContainer>
                  <ProductDelete onClick={() => removeItem(order.id)}>
                    <span>Delete</span>
                    <img src={TrashImage} alt={"Delete"} />
                  </ProductDelete>
                </ProductContainer>
              ))}
            </ProductsContainer>
          </CartRigth>
        </>
      )}
    </Wrapper>
  );
};

export default Orders;
