import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  max-width: 450px;
  margin: 40px auto;
  padding: 0 16px;
`;

export const Button = styled.button`
  width: 100%;
  height: 38px;
  font-size: 16px;
  color: #222;
  background: #ffc640;
  cursor: pointer;
  margin-bottom:1rem;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  transition: .2s ease;
  &:hover{
    /* background: transparent !important; */
    background: #e6a817;
    /* color: #FFB300;
    border: 1px solid #FFB300; */
  }

  &[disabled] {
    background: #828282;
    color: #c1c1c1;
    cursor: default;
  }

`;

export const Title = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;

  p{
    color: #fff;
    text-align: center;
    margin: 10px 0px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  gap: .5rem;

  justify-content: space-between;
  transition: .2s ease;
  `;
