// components/HeroSection.js
import styled from "styled-components";

const HeroSection = ({ title, subtitle, description, buttonText, buttonUrl, backgroundImage }) => (
  <SectionContainer background={backgroundImage}>
    <Content>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <Button href={buttonUrl}>{buttonText}</Button>
    </Content>
  </SectionContainer>
);

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #9BA8AB 0%, #ccd0cf 60%);
  text-align: center;
  padding: 20px;
  border-radius: 3px;
`;

const Content = styled.div`
  max-width: 80%;

  &:before {
    --background-overlay: '';
    background-image: url(${props => props.backgroundImage});
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 30% auto;
  }
`;

const Subtitle = styled.h2`
  
`;

const Title = styled.h1`
  
`;

const Description = styled.p`
`;

const Button = styled.a`
`;

export default HeroSection;