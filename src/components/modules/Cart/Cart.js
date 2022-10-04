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
  CustomForm,
} from "./CartStyle.js";
import ShoppingCart from "../../../assets/images/shoppingCart.svg";
import CartContext from "../../../context/CartContext.js";
import { useContext, useState } from "react";
import TrashImage from "../../../assets/images/trashIcon.svg";
import CustomButton from "../../shared/components/Buttons/CustomButton.js";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Modal from "../../shared/components/Modal/Modal.js";

const Cart = () => {
  const { products, removeItem, totalPrice, clear } = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [orderNumber, setOrderNumber] = useState(0);

  const handleSubmit = () => {
    if (!user.email || !user.name || !user.phone) {
      alert("Please complete the fields!");
      return;
    }

    const db = getFirestore();
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
    addDoc(query, newOrder)
      .then((response) => {
        setOrderNumber(response.id);
        setModal(true);
        setModal(true);
      })
      .catch((error) => alert("Error generating order number"));
  };

  return (
    <Wrapper>
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
              <CustomForm>
                <h2>Your Contact Information</h2>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  id={"name"}
                  required
                  placeholder="Enter your name"
                />

                <input
                  type="phone"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  id={"phone"}
                  required
                  placeholder="Enter your phone number"
                />

                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  id={"email"}
                  placeholder="Enter your email"
                  required
                />
                <br />
                <CustomButton text="PLACE ORDER" onClick={handleSubmit} />
              </CustomForm>
            </DetailPrices>
          </CartLeft>
        </>
      )}
      <Modal open={modal} onClose={() => setModal(false)} orderNumber={orderNumber} />
    </Wrapper>
  );
};

export default Cart;
