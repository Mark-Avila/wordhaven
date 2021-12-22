import styled from "styled-components";
import { Search } from "../../Components";

const Container = styled.div`
  padding: 0;
  margin: 0;

  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  padding: 0;
  margin: 0;

  width: clamp(50%, 700px, 90%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Brand = styled.h1`
  padding: 0;
  margin: 0.5em 0;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Merriweather", "Times New Roman", Times, serif;
  color: ${({ theme }) => theme.colors.primary};
`;

const Landing = () => {
  return (
    <>
      <Container>
        <Body>
          <Brand>WordHaven</Brand>
          <Search />
        </Body>
      </Container>
    </>
  );
};

export default Landing;
