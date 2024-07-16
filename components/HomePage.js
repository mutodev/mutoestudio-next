// components/HomePage.js
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import FeaturedServices from "./FeaturedServices";


const GET_HOME_CONTENT = gql`
query GetHomeContent {
  page(id: "inicio", idType: URI) {
    hero {
      subtitulo
      descripcion
      textoDelBoton
      urlDelBoton
      titulo
      imagenDeFondo {
        node {
          sourceUrl
        }
      }
    }
  }
  servicios {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_HOME_CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.page) {
    return <p>No data found.</p>;
  }

  return (
    <Container>
      <HeroSection
        title={data.page.hero.titulo}
        subtitle={data.page.hero.subtitulo}    
        description={data.page.hero.descripcion}
        buttonText={data.page.hero.textoDelBoton}
        buttonUrl={data.page.hero.urlDelBoton}
        backgroundImage={data.page.hero.imagenDeFondo}
      />
      <FeaturedServices services={data.servicios.nodes} />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
`;

export default HomePage;