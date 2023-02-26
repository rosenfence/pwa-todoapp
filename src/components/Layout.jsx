import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  background: linear-gradient(#eee 70%, #485ec6 100%);
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  overflow: hidden;
`;

const ContentDiv = styled.div`
  width: 100%;
  max-width: 393px;
  z-index: 2;
`;

const BgImg = styled.img`
  width: 300px;

  position: absolute;
  bottom: -200px;
  right: 0px;

  z-index: 0;
  opacity: 0.2;
`;

const Layout = ({ children }) => {
  return (
    <LayoutDiv>
      <ContentDiv>{children}</ContentDiv>
      <BgImg src='./karin.png' />
    </LayoutDiv>
  );
};

export default Layout;
