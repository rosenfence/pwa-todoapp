import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  background-color: #ddd;
  width: 393px;
  height: 852px;
`;

const Layout = ({ children }) => {
  return <LayoutDiv>{children}</LayoutDiv>;
};

export default Layout;
