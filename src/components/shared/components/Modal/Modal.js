import React from "react";
import styled from "styled-components";

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <Wrapper>
      <WrapperModal>
        <CloseButton onClick={onClose}> X </CloseButton>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </WrapperModal>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`;
const WrapperModal = styled.div`
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  padding: 2.5rem;
  border: 2px solid #00c244;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 70%;
  }

  p {
    font-size: 1.3rem;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #323232;
  width: 30px;
  height: 30px;
  top: 0;
  right: 0;
  font-size: 0.6875rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
`;

const ModalTitle = styled.div`
  line-height: 25px;
  color: #1fa02e;
  font-size: 1.5rem;
`;
