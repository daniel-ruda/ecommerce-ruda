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
import { useContext } from "react";
import TrashImage from "../../../assets/images/trashIcon.svg";
import CustomButton from "../../shared/components/Buttons/CustomButton.js";
import { Link } from "react-router-dom";
const Cart = () => {
  const { products, removeItem, totalPrice, clear } = useContext(CartContext);

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
              <CustomButton text="CHECKOUT" />
            </DetailPrices>
          </CartLeft>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
