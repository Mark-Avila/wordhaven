import styled from "styled-components";
import { FaVolumeUp } from "react-icons/fa";

const fluid = "margin: 0; padding: 0;";

const Container = styled.div`
  ${fluid};

  @media screen and (max-width: 900px) {
    margin: 0 1em;
  }
`;

const MainWord = styled.h2`
  ${fluid};
  font-family: "Merriweather", sans-serif;
  font-weight: bold;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.primary};
`;

const Phonetics = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Pronounce = styled.p`
  ${fluid};
  color: ${({ theme }) => theme.colors.faint};
  font-weight: bold;
`;

const Button = styled.button`
  padding: 0.7em;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.faint};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const WordPhonetics = ({ word, pron, audio }) => {
  let pronAudio = new Audio(audio);

  const playAudio = () => {
    pronAudio.play();
  };

  return (
    <Container>
      <MainWord>{word}</MainWord>
      <Phonetics>
        {audio && (
          <Button onClick={playAudio}>
            <FaVolumeUp size={25} />
          </Button>
        )}
        <Pronounce>{pron}</Pronounce>
      </Phonetics>
    </Container>
  );
};

export default WordPhonetics;
