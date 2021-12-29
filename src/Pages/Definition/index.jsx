import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Search,
  WordPhonetics,
  WordInformation,
  Loader,
  WordNotFound,
} from "../../Components";
import { fetchEntry } from "../../Adapters";
import { useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled(motion.div)`
  padding: 1.5rem;
  margin: 0;

  @media screen and (max-width: 900px) {
    padding: 0.2rem;
  }
`;

const Grid = styled.div`
  margin: 2rem;

  display: grid;
  grid-template-columns: 33% 1fr;
  grid-gap: 2em;

  @media screen and (max-width: 900px) {
    display: block;
    margin: 0rem;
  }
`;

const Wrapper = styled.span`
  padding: 0;
  margin: 0;
`;

const DefWrapper = styled(motion.div)`
  padding: 0;
  margin: 0;
`;

const Definition = ({ transVariant }) => {
  const [entry, setEntry] = useState([]);
  const [loading, setLoading] = useState(true);

  //Value of :word URL param
  let { word } = useParams();

  useEffect(() => {
    const getEntry = async () => {
      setLoading(true); //Start Loading

      //Get word entry data (can be NULL)
      let data = await fetchEntry(word);
      setEntry(data); //Set value
      setLoading(false); //End Loading
    };

    getEntry();
  }, [word]);

  return (
    <Container
      variants={transVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Grid>
        <Wrapper>
          <Search />
          {entry && !loading && (
            <WordPhonetics word={word} phonetics={entry[0].phonetics} />
          )}

          {!entry && !loading && <WordNotFound />}
        </Wrapper>

        <DefWrapper>
          <AnimatePresence>
            {loading && <Loader />}
            {entry &&
              !loading &&
              entry[0].meanings.map((data, index) => (
                <WordInformation meanings={data} key={index} />
              ))}
          </AnimatePresence>
        </DefWrapper>
      </Grid>
    </Container>
  );
};

export default Definition;
