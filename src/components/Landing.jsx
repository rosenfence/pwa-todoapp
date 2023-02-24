import React, { useEffect } from 'react';
import styled from 'styled-components';
import Lottie from './Lottie';
import Layout from './Layout';

const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #38c172;
  width: 100%;
  height: 100%;
`;

const TextDiv = styled.div`
  text-align: center;
  color: #eee;
  font-size: 40px;
  font-weight: bold;
`;

const Landing = ({ onChangeStep }) => {
  const handleChangeStep = () => onChangeStep();

  useEffect(() => {
    setTimeout(() => handleChangeStep(), 3000);
  }, []);

  return (
    <BackgroundDiv>
      <Layout>
        <TextDiv>창하&지원's</TextDiv>
        <Lottie width='300px' height='300px' listIdx='0'></Lottie>
        <TextDiv>투두앱</TextDiv>
      </Layout>
    </BackgroundDiv>
  );
};

export default Landing;
