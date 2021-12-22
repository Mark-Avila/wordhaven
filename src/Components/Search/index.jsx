import { useRef } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 0.5em;
  margin: 0;
  margin-bottom: 2em;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.faint};
  border-radius: 25px;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;

  display: flex;

  @media screen and (max-width: 900px) {
    margin: 2em 0;
  }
`;

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  font-family: "Roboto", sans-serif;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.faint};
`;

const Search = () => {
  const inputRef = useRef();

  const navigate = useNavigate();

  /**
   * Handles submit on button click
   * @param {event} e
   */
  const submitHandler = (e) => {
    e.preventDefault();
    let inputVal = inputRef.current.value;
    navigate(`/search/${inputVal}`);
  };

  /**
   * Handles submit on ENTER key press
   * @param {event} e
   */
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      let inputVal = inputRef.current.value;
      navigate(`/search/${inputVal}`);
    }
  };

  return (
    <Container>
      <Button onClick={submitHandler}>
        <FaSearch />
      </Button>
      <Input
        ref={inputRef}
        onKeyDown={keyDownHandler}
        title="test"
        placeholder="Enter word here"
      />
    </Container>
  );
};

export default Search;
