import logo from "../../../assets/images/logo.svg";
import styled from "styled-components";
import CartWidget from "../../shared/components/CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const listMenues = [
    {
      category: 1,
      description: "Suplements",
    },
    {
      category: 2,
      description: "Equipments",
    },
    {
      category: 3,
      description: "Bikes",
    },
  ];
  return (
    <Wrapper>
      <LeftMenu>
        <NavLink to={"/"} >
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
        <CartWidget />
        <Button>Login</Button>
      </RightMenu>
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
  z-index: 100;
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
  background-color: #494f51;
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
`;
