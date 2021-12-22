import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  padding: 0;
  margin: 0;
  margin-bottom: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const WordWrapper = styled.section`
  padding: 0;
  margin: 0;
  margin-left: 1em;
  display: flex;
  flex-wrap: wrap;
`;

const Word = styled.button`
  padding: 0.5em 0.8em;
  margin: 0;
  margin-right: 0.2em;
  margin-top: 0.5em;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  font-weight: bold;
  font-size: 0.8em;
  border-radius: 25px;
  outline: none;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(70%);
  }
`;

const Header = styled.p`
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 900px) {
    margin-bottom: 1em;
  }
`;

const Synonyms = ({ synonyms }) => {
  const navigate = useNavigate();

  const handleClick = (word) => {
    navigate(`/search/${word}`);
  };

  return (
    <Container>
      <Header>Synonyms: </Header>
      <WordWrapper>
        {synonyms.slice(0, 5).map((data, index) => (
          <Word onClick={() => handleClick(data)} key={index}>
            {data}
          </Word>
        ))}
      </WordWrapper>
    </Container>
  );
};

export default Synonyms;
