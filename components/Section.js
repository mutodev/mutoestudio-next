// components/Section.js
import styled from "styled-components";

const Section = ({ title, content }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    <SectionContent dangerouslySetInnerHTML={{ __html: content }} />
  </SectionContainer>
);

const SectionContainer = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const SectionContent = styled.div`
  line-height: 1.6;
`;

export default Section;
