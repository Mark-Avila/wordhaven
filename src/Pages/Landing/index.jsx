import styled from "styled-components";
import { Search } from "../../Components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
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

const Landing = ({ transVariant }) => {
  return (
    <>
      <Container
        variants={transVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Body>
          <Brand>WordHaven</Brand>
          <Search />
        </Body>
      </Container>
    </>
  );
};

export default Landing;
