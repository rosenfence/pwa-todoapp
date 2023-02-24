import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import check from '../lottieFiles/check.json';
import check2 from '../lottieFiles/check2.json';
import todo from '../lottieFiles/todo.json';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Lottie = ({ listIdx, width, height }) => {
  const container = useRef();
  const list = [check, check2, todo];

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: list[listIdx],
    });
  }, []);

  return <StyledDiv width={width} height={height} ref={container}></StyledDiv>;
};

export default Lottie;
