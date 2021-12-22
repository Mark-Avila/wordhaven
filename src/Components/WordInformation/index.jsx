import styled from "styled-components";
import { WordsDefsAndEx, Synonyms } from "..";

const Container = styled.section`
  padding: 2.5rem;
  margin: 0;
  margin-bottom: 1em;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;

  @media screen and (max-width: 900px) {
    padding: 1em;
    border: none;
  }
`;

const Type = styled.h3`
  padding: 0;
  margin: 0;
  font-family: "Merriweather", sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.secondary};
`;

const DefItem = styled.div`
  margin: 1em 0;
  margin-bottom: 2em;
  padding: 0 1.5em;

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

const WordInformation = ({ meanings }) => {
  return (
    <Container>
      <Type>{meanings.partOfSpeech}</Type>

      {meanings.definitions.map((data, index) => (
        <DefItem key={index}>
          <WordsDefsAndEx definition={data.definition} example={data.example} />
          {data.synonyms.length !== 0 && <Synonyms synonyms={data.synonyms} />}
        </DefItem>
      ))}
    </Container>
  );
};

export default WordInformation;
