import styled from 'styled-components';

export  const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center ;
`;

export const Text = styled.h1`
  transform: translateY(calc(0px - var(--bodyPaddingTop)));
`;
