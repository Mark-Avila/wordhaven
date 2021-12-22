import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;
`;

const Definition = styled.p`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Example = styled.p`
  padding: 0;
  margin: 1em 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

const WordsDefsAndEx = ({ definition, example }) => {
  return (
    <Container>
      <Definition>{definition}</Definition>

      {example && <Example>Ex. {example}</Example>}
    </Container>
  );
};

export default WordsDefsAndEx;
