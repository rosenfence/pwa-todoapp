import React from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalForm = styled.form`
  position: relative;
  width: 300px;
  height: 250px;

  background: #fff;

  overflow: hidden;

  border-radius: 5px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);

  padding: 20px;
`;

const ModalLabel = styled.label`
  font-size: 25px;
  color: #485ec6;
`;

const ModalInput = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border: 1px solid #485ec6;
  border-radius: 3px;
  padding-left: 10px;
`;

const ModalBgImg = styled.img`
  width: 150px;

  position: absolute;
  bottom: -20px;
  right: 0px;

  z-index: 0;
  opacity: 0.8;
`;

const StyledButton = styled.button`
  display: block;
  width: 100px;
  height: 50px;
  color: #fff;
  background-color: #485ec6;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  font-size: 24px;
`;

const Modal = ({ onChange, onClick, onClose }) => {
  return (
    <ModalDiv onClick={onClose}>
      <ModalForm onClick={(e) => e.stopPropagation()}>
        <ModalLabel>
          할 일을 추가해주세요!
          <ModalInput onChange={onChange} type='text' placeholder='여기에 적어주세요!' required />
        </ModalLabel>
        <StyledButton onClick={onClick}>추가</StyledButton>
        <StyledButton onClick={onClose}>닫기</StyledButton>
        <ModalBgImg src='/karinSD.png' />
      </ModalForm>
    </ModalDiv>
  );
};

export default Modal;
