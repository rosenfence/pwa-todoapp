import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaPen } from 'react-icons/fa';

const StyledUl = styled.ul`
  width: 100%;
  padding: 0px 20px 0px 20px;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const StyledSpan = styled.span`
  width: 90px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const StyledButton = styled.button`
  width: 50%;
  height: 45px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRad};
`;

const Lists = ({ lists, handleDelete }) => {
  return (
    <StyledUl>
      {lists.map((todo) => (
        <StyledLi key={todo.id}>
          <span style={{ width: '20px' }}>
            <input type='checkbox' />
            <label style={{ marginRight: '15px' }} />
          </span>
          <span style={{ width: 'calc(100% - 125px)', marginRight: '5px' }}>{todo.todo}</span>
          <StyledSpan>
            <StyledButton backgroundColor='#485ec6' borderRad='10px 0px 0px 10px'>
              <FaPen style={{ color: 'white' }} />
            </StyledButton>
            <StyledButton tbr backgroundColor='#D81C2F' borderRad='0px 10px 10px 0px' value={todo.id} onClick={handleDelete}>
              <FaTimes style={{ color: 'white' }} />
            </StyledButton>
          </StyledSpan>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default Lists;
