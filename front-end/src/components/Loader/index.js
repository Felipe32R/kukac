import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid #FFB300;
  background: transparent;
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

export const SpinnerContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;
