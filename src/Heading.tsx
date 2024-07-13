import { IoDice } from "react-icons/io5";
import styled from "styled-components";

const Header = styled.header`
  color: #222121;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-family: "Roboto Condensed", sans-serif;
`;
const H1 = styled.h1`
  font-family: "Purple Purse", serif;
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: center;
  background-image: url("/dice-background2.png");
  padding-top: 12px;
  padding-bottom: 8px;
`;

const SmallP = styled.p`
  width: 60%;
  align-self: center;
  font-size: small;
  font-weight: 600;
`;

function Heading() {
  return (
    <Header>
      <H1>
        <IoDice style={{ paddingBottom: "0.5rem" }} />
        Randomness of virtual dice
        <IoDice style={{ paddingBottom: "0.5rem" }} />
      </H1>
      <SmallP>
        Tables and graps show average values per batch, you can select the
        number of batches and number of dice per batch from the form. You can
        also chose the range of the die, from 1 to the selected value. "Cheat!"
        will give each non-max die value an X % chance to be converted to max.
      </SmallP>
    </Header>
  );
}

export default Heading;
