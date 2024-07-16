// components/FeaturedServices.js
import styled from "styled-components";

const FeaturedServices = ({ services }) => (
  <SectionContainer>
    <Title>Servicios Destacados</Title>
    <ServicesGrid>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceImage src={service.featuredImage.node.sourceUrl} alt={service.title} />
          <ServiceContent>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription dangerouslySetInnerHTML={{ __html: service.content }} />
          </ServiceContent>
        </ServiceCard>
      ))}
    </ServicesGrid>
  </SectionContainer>
);

const SectionContainer = styled.section`
  padding: 40px 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    &:nth-child(5) {
      grid-column: span 2;
    }
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    &:nth-child(5) {
      grid-column: span 2;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
`;

const ServiceContent = styled.div`
  padding: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.div`
  font-size: 1rem;
  color: #666;
`;

export default FeaturedServices;
