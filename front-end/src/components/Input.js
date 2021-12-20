import styled, { css } from 'styled-components';

export default styled.input`
  margin-top: 18px;
  width: 100%;
  background: #fff;
  border: 3px solid #fff;

  height: 42px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 15px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &:focus{
    border-color: #FFB300;
  }

  ${({ error }) => error && css`
    color: #FC5050;
    border-color: #FC5050 !important;
  `}
`;
