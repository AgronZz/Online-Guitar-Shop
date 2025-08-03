
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const GET_BRANDS = gql`
  query GetAllBrands {
    findAllBrands {
      id
      name
      image
    }
  }
`;

export default function SectionBrands() {
  const { loading, error, data } = useQuery(GET_BRANDS);
  const navigate = useNavigate();

  if (loading) return <p>Loading brands...</p>;
  if (error) return <p>Error loading brands: {error.message}</p>;


  const brandsToShow = data.findAllBrands.slice(0, 8);

  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Featuring the <span className="org">Best Brands</span></h1>
      <p>Select your preferred brand and explore our exquisite collection</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",  
          gap: "2rem",
          marginTop: "100px",
          marginBottom: "200px",
          maxWidth: "1800px",
          marginInline: "auto",
          rowGap: "3rem"  
        }}
      >
        {brandsToShow.map((brand) => (
          <div
            key={brand.id}
            style={{
              cursor: "pointer",
              transition: "transform 0.2s",
              margin: "0 auto",
              maxWidth: "150px"
            }}
            onClick={() => navigate(`/brand/${brand.id}`)}
          >
            <img
              src={brand.image}
              alt={brand.name}
              style={{
                width: "100%",
                height: "100px",
                objectFit: "contain",
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease, transform 0.2s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
           
          </div>
        ))}
      </div>
    </section>
  );
}
