import styled from "styled-components";
import githubPic from "../../Assets/profile.jpg";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70vh;
`;

const Body = styled.main`
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  padding: 0;
  margin: 1rem 0;
  border-radius: 50%;
  width: 40%;
  height: auto;
`;

const Name = styled.p`
  margin: 1rem 0;
  padding: 0;
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  filter: opacity(90%);
`;

const Text = styled(Name)`
  font-size: 0.9rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const SocMedLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 1em 0;
  filter: opacity(70%);

  &:hover {
    filter: opacity(100%);
    cursor: pointer;
  }
`;

const About = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Body>
        <ProfileImage src={githubPic} alt="github-profile-pic" />
        <Name>Mark Christian Avila</Name>
        <Text>Developer</Text>
        <div>
          <SocMedLink onClick={() => navigate()}>
            <FaGithub size={25} />
          </SocMedLink>
          <SocMedLink>
            <FaFacebook size={25} />
          </SocMedLink>
        </div>
      </Body>
    </Container>
  );
};

export default About;
