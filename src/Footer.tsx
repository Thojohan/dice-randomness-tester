import styled from "styled-components";

const P = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: small;
  font-weight: 600;
`;

const Span = styled.span`
  margin-right: 10px;
  margin-left: 10px;
`;

function Footer() {
  return (
    <footer>
      <P>
        <Span>Copyright 2024 Thomas Johannessen</Span>
        <Span>
          Check out the{" "}
          <a
            href={
              "https://github.com/Thojohan/dice-randomness-tester/edit/main/README.md"
            }
          >
            documentation
          </a>{" "}
          on Github
        </Span>
      </P>
    </footer>
  );
}

export default Footer;
