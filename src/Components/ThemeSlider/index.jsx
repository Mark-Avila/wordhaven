import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.i`
  padding: 0;
  margin: 0 1em;
  color: ${({ theme }) => theme.colors.text};
`;

const SliderWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 3.2rem;
  height: 1.5rem;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

const ThemeSlider = ({ toggleTheme, darkMode }) => {
  return (
    <Container>
      <IconWrapper>
        {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
      </IconWrapper>
      <SliderWrapper>
        <CheckBox type="checkbox" onChange={toggleTheme} />
        <Slider />
      </SliderWrapper>
    </Container>
  );
};

export default ThemeSlider;
