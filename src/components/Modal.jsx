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

  padding: 10px;
`;

const ModalBgImg = styled.img`
  width: 150px;

  position: absolute;
  bottom: -20px;
  right: 0px;

  z-index: 0;
  opacity: 0.2;
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
`;

const Modal = ({ onChange, onClick, onClose }) => {
  return (
    <ModalDiv onClick={onClose}>
      <ModalForm onClick={(e) => e.stopPropagation()}>
        <label>
          할 일을 추가해주세요!
          <input onChange={onChange} type='text' placeholder='입력해주세요' required />
        </label>
        <StyledButton onClick={onClick}>확인</StyledButton>
        <StyledButton onClick={onClose}>취소</StyledButton>
        <ModalBgImg src='/karinSD.png' />
      </ModalForm>
    </ModalDiv>
  );
};

export default Modal;
