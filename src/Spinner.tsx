import styled, { keyframes } from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const spin = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg
  }
`;

const Span = styled.span`
  display: flex;
  height: 5rem;
  width: 5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  animation: ${spin} linear 1.5s infinite;
  color: #ffffff;
  border: solid transparent 20px;
  border-radius: 99999px;
  border-inline-end-color: #050105;
`;

function Spinner() {
  return (
    <Div>
      <Span />
    </Div>
  );
}

export default Spinner;
