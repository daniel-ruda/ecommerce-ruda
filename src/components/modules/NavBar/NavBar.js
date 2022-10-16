import logo from "../../../assets/images/logo.svg";
import styled from "styled-components";
import CartWidget from "../../shared/components/CartWidget/CartWidget";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";
import Modal from "../../shared/components/Modal/Modal";
import CustomForm from "../../shared/components/Forms/CustomForm";
import UserContext from "../../../context/UserContext";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { products } = useContext(CartContext);
  const { users, clearUser, addUser } = useContext(UserContext);
  const navigate = useNavigate()

  const getTotalAmount = (acc, nextValue) => acc + nextValue.quantity;
  const listMenues = [
    {
      category: "1",
      description: "Suplements",
    },
    {
      category: "2",
      description: "Equipments",
    },
    {
      category: "3",
      description: "Bikes",
    },
  ];
  const handleLogin = (e) => {
    e.preventDefault();

    if (!user.email || !user.name || !user.phone) {
      alert("Please complete the fields!");
      return;
    }

    addUser(user);
    setModal(false);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    clearUser();
    setUser({
      name: "",
      phone: "",
      email: "",
    });
    setModalLogout(false);
  };

  const activeModal = () => (users.name ? setModalLogout(true) : setModal(true));

  return (
    <Wrapper>
      <LeftMenu>
        <NavLink to={"/"}>
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        <ButtonHome>
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "activeClassName" : undefined)}>
            Home
          </NavLink>
        </ButtonHome>
      </LeftMenu>

      <Menu>
        {listMenues.map((el, index) => (
          <NavLink
            to={`/category/${el.category}`}
            key={index}
            className={({ isActive }) => (isActive ? "activeClassName" : undefined)}
          >
            {el.description}
          </NavLink>
        ))}
      </Menu>
      
      <RightMenu>
      <Button login={true} onClick={()=>navigate("orders")}>  Orders </Button>
        {products.length > 0 && (
          <Link to="cart">
            <CartWidget itemsInCart={products.reduce(getTotalAmount, 0)} />
          </Link>
        )}

        <Button onClick={activeModal} login={!users.name}>
          {users.name.length > 0 ? users.name.substring(0, 2).toUpperCase() : "Login"}
        </Button>
      </RightMenu>

      <Modal open={modal} onClose={() => setModal(false)} title={"Login Form"}>
        <CustomForm user={user} setUser={setUser} titleButton={"CREATE USER"} handleSubmit={handleLogin} disabled={false} />
      </Modal>

      <Modal open={modalLogout} onClose={() => setModalLogout(false)} title={"LogoutForm"}>
        <CustomForm user={user} titleButton={"LOGOUT"} handleSubmit={handleLogout} disabled={true} />
      </Modal>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.header`
  min-height: 60px;
  background-color: #fff;
  position: fixed;
  padding: 5px 20px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", Helvetica, Arial, sans-serif !important;
  border-bottom: 1px solid lightgrey;
`;

const ButtonHome = styled.div`
  a {
    color: black;
    padding: 9px 15px;
    text-decoration: none;
    margin-right: 30px;
    border: 1px solid #dbdcdd;
    outline: none;
    border-radius: 40px;
  }
  a:hover {
    background-color: #494f51;
    color: #fff;

    outline: none;
    border-radius: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.div`
  border: 1px solid #dbdcdd;
  margin-right: 10px;
  background-color: ${(props) => (props.login ? "grey" : "#00c244")};
  color: white;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  vertical-align: middle;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 100
`;

const Menu = styled.div`
  display: flex;
  a {
    color: black;
    padding: 9px 15px;
    text-decoration: none;
    margin-right: 30px;
  }
  a:hover {
    background-color: #494f51;
    color: #fff;
    border-color: #ed1c24;
    outline: none;
    border-radius: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  a {
    text-decoration: none;
  }
`;
