import logo from "../../../assets/images/logo.svg";
import styled from "styled-components";
import CartWidget from "../../shared/components/CartWidget/CartWidget";


const NavBar = () => {
  const listMenues = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <Wrapper>
      <LeftMenu>
        <img src={logo} className="App-logo" alt="logo" />
        <Button>RUDA MARKET</Button>
      </LeftMenu>

      <Menu>
        {listMenues.map((el, index) => (
          <a href="/#" key={index}>{el}</a>
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
`;

const Button = styled.a`
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
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;