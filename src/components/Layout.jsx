import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.backgroundColor};
  width: 393px;
  height: 852px;

  padding-top: 100px;
`;

const Layout = ({ children }) => {
  return <LayoutDiv>{children}</LayoutDiv>;
};

export default Layout;
