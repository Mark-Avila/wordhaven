import { useNavigate } from "react-router";
import styled from "styled-components";
import { ThemeSlider } from "..";

const fluid = "padding: 0; margin: 0;";

const Container = styled.nav`
  ${fluid};
`;

const List = styled.ul`
  ${fluid};
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

const Item = styled.li`
  padding: 1em 1.5em;
  margin: 0;

  @media screen and (max-width: 900px) {
    padding: 0.5em;
  }
`;

const Right = styled(Item)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const Brand = styled.h1`
  ${fluid}
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Merriweather", sans-serif;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const Link = styled.a`
  ${fluid};
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 3rem;
  border-bottom: 2px solid transparent;
  transition: 200ms ease-in;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: 200ms ease-in;
  }
`;

const ToggleContainer = styled.span`
  padding: 0;
  margin: 0;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const Navbar = ({ toggleTheme, darkMode }) => {
  const navigate = useNavigate();

  const handleOnClick = (path) => navigate(path);

  return (
    <Container>
      <List>
        <Item>
          <Brand onClick={() => handleOnClick("/")}>Wordhaven</Brand>
        </Item>
        <Right>
          <Link onClick={() => handleOnClick("/about")}>ABOUT</Link>
          <ToggleContainer>
            <ThemeSlider toggleTheme={toggleTheme} darkMode={darkMode} />
          </ToggleContainer>
        </Right>
      </List>
    </Container>
  );
};

export default Navbar;
