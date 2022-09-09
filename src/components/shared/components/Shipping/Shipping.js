import React from "react";
import styled from "styled-components";
import ConfirmIcon from "../../../../assets/images/confirm_icon.svg";
import CancelIcon from "../../../../assets/images/cancel__icon.svg";

const Shipping = ({ isShipAvailable }) => {
  return (
    <WrapperShipping>
      {isShipAvailable ? <img src={ConfirmIcon} alt="" /> : <img src={CancelIcon} alt="" />} Shipping Available
    </WrapperShipping>
  );
};

export default Shipping;

const WrapperShipping = styled.div`
  font-family: "Archivo", sans-serif;
  font-size: 0.7rem;
  border-top: 1px solid #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  color: black;
  img {
    width: 12px;
    margin-right: 2px;
  }
`;
