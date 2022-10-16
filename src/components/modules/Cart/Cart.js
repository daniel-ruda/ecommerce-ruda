import {
  Header,
  ProductsContainer,
  Wrapper,
  CartRigth,
  CartLeft,
  ProductContainer,
  ProductDetail,
  ProductDelete,
  ProductImage,
  ProductDescription,
  ItemPrice,
  EmptyCart,
  DetailPrices,
  ItemPriceTotal,
} from "./CartStyle.js";
import ShoppingCart from "../../../assets/images/shoppingCart.svg";
import CartContext from "../../../context/CartContext.js";
import { useContext, useState, useEffect } from "react";
import TrashImage from "../../../assets/images/trashIcon.svg";
import CustomButton from "../../shared/components/Buttons/CustomButton.js";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import Modal from "../../shared/components/Modal/Modal.js";
import CustomForm from "../../shared/components/Forms/CustomForm.js";
import UserContext from "./../../../context/UserContext";
import Spinner from "../../shared/components/Spinner/Spinner.js";

const Cart = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [orderNumber, setOrderNumber] = useState(0);
  const [loading, setLoading] = useState(false)
  const { products, removeItem, totalPrice, clear } = useContext(CartContext);
  const { users } = useContext(UserContext);
  const db = getFirestore();
  useEffect(() => {
    setUser(users);
  }, [users]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    const newOrder = {
      buyer: {
        name: user.name,
        phone: user.phone,
        email: user.email,
      },
      items: products,
      total: totalPrice(),
      date: new Date(),
    };
    const query = collection(db, "orders");

    setModal(true);
    addDoc(query, newOrder)
      .then((response) => {
        updateStockItems();
        setOrderNumber(response.id);
        setLoading(false)
        setModal(true);

        clear();
      })
      .catch((error) => alert("Error generating order number"));
  };

  const updateStockItems = () => {
    products.forEach((product) => {
      const queryUpdate = doc(db, "items", product.id);
      updateDoc(queryUpdate, { stock: product.stock - product.quantity })
        .then(() => {
          console.log("updated item" + product.id);
        })
        .catch(() => {
          alert("Se produjo error al hacer update de los items");
        });
    });
  };

  return (
    <Wrapper>
      {loading && <Spinner />}
      {products.length === 0 ? (
        <EmptyCart>
          <h1>Your Cart is Empty</h1>
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
                  Cart ({products.length} products)
                </div>
                <div className="header-icon-delete" onClick={clear}>
                  <img src={TrashImage} alt="shopping cart" className="cartButtonImg" />
                  Clear Cart
                </div>
              </div>
            </Header>
            <ProductsContainer>
              {products.map((item) => (
                <ProductContainer key={item.id}>
                  <ProductDetail>
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
                  <ProductDelete onClick={() => removeItem(item.id)}>
                    <span>Delete</span>
                    <img src={TrashImage} alt={"Delete"} />
                  </ProductDelete>
                </ProductContainer>
              ))}
            </ProductsContainer>
          </CartRigth>
          <CartLeft>
            <Header>Detail Shop</Header>
            <DetailPrices>
              <ItemPrice>
                <div>Order SubTotal</div>
                <div>${totalPrice()}</div>
              </ItemPrice>

              <ItemPrice>
                <div>Estimated Tax</div>
                <div>0</div>
              </ItemPrice>
              <ItemPriceTotal>
                <div>Estimated Order Total</div>
                <div>${totalPrice()}</div>
              </ItemPriceTotal>
              <CustomForm
                handleSubmit={handleSubmit}
                user={user}
                setUser={setUser}
                titleButton={"PLACE ORDER"}
                disabled={users.name}
              />
            </DetailPrices>
          </CartLeft>
        </>
      )}
      <Modal open={modal && orderNumber} onClose={() => setModal(false)} title={"!Important!"}>
        <p>
          Your Order Number is: <strong> {orderNumber}</strong>
        </p>
      </Modal>
    </Wrapper>
  );
};

export default Cart;
