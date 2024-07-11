import { BiSolidErrorAlt } from "react-icons/bi";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
`;

const ErrorIcon = styled.p`
  color: red;
  line-height: 7rem;
  font-size: 9rem;
  text-align: center;
`;

const ErrorMsgLine = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
`;

function ErrorMessage() {
  return (
    <Div>
      <ErrorIcon>
        <BiSolidErrorAlt />
      </ErrorIcon>
      <ErrorMsgLine>
        Ooops, something went wrong. Try reloading the page!
      </ErrorMsgLine>
    </Div>
  );
}

export default ErrorMessage;
