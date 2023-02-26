import React, { useEffect } from 'react';
import styled from 'styled-components';
import Lottie from './Lottie';

const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #485ec6;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
`;

const StyledDiv = styled.div`
  flex: ${(props) => props.flex};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextDiv = styled.div`
  text-align: center;
  color: #eee;
  font-size: 40px;
  font-weight: bold;
`;

const CopyRightDiv = styled.div`
  color: white;
  font-weight: bold;
  padding-bottom: 30px;
`;

const Landing = ({ onChangeStep }) => {
  const handleChangeStep = () => onChangeStep();

  useEffect(() => {
    setTimeout(() => handleChangeStep(), 3000);
    // eslint-disable-next-line
  }, []);

  return (
    <BackgroundDiv>
      <StyledDiv flex='9'>
        <TextDiv>창하&지원's</TextDiv>
        <Lottie width='300px' height='300px' listIdx='0'></Lottie>
        <TextDiv>투두앱</TextDiv>
      </StyledDiv>
      <CopyRightDiv>Copyright (c) 2023 rosenfence</CopyRightDiv>
    </BackgroundDiv>
  );
};

export default Landing;
