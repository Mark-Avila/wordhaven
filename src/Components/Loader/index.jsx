import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 18vh;
`;

const Box = styled(motion.div)`
  padding: 0;
  margin: 0;

  width: 3rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

const BoxVariant = {
  rotation: {
    rotate: [0, 90, 180, 270, 360, 450, 540, 640, 730],
    borderRadius: [
      "0% 0% 0% 0%",
      "50% 0% 0% 0%",
      "50% 50% 0% 0%",
      "50% 50% 50% 0%",
      "50% 50% 50% 50%",
      "50% 50% 50% 0%",
      "50% 50% 0% 0%",
      "50% 0% 0% 0%",
      "0% 0% 0% 0%",
    ],
    transition: { repeat: Infinity, duration: 3 },
  },
  exit: {
    opacity: 0,
  },
};

const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <Box animate="rotation" exit="exit" variants={BoxVariant} />
        <Text>Loading</Text>
      </Wrapper>
    </Container>
  );
};

export default Loader;
