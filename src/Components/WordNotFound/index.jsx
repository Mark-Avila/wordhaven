import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;

  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
  filter: opacity(50%);

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Body = styled.div`
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = styled.h1`
  padding: 0.2em 0;
  margin: 0;
  font-size: 5em;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-weight: bold;
`;

const WordNotFound = () => {
  return (
    <Container>
      <Body>
        <NotFound>404</NotFound>
        <Text>Word not found</Text>
      </Body>
    </Container>
  );
};

export default WordNotFound;
