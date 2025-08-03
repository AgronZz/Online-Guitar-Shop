import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useState, useMemo } from "react";
import BrandHeader from "../components/BrandHeader";
import FiltersBar from "../components/FiltersBar";
import ModelsGrid from "../components/ModelsGrid";
import Pagination from "../components/Pagination";

const GET_BRAND_AND_MODELS_BY_ID = gql`
  query GetBrandById($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      image
      models {
        id
        name
        image
        price
      }
    }
  }
`;
function inferType(name) {
  if (name.toLowerCase().includes("bass")) return "Bass";
  if (name.toLowerCase().includes("electric")) return "Electric";
  return "Acoustic";
}

const ITEMS_PER_PAGE = 6;

export default function ModelsPage() {

  const { brandId } = useParams();
  const { loading, error, data } = useQuery(GET_BRAND_AND_MODELS_BY_ID, {
    variables: { id: brandId },
  });

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredModels = useMemo(() => {
    if (!data?.findUniqueBrand) return [];
    const brand = data.findUniqueBrand;
    return brand.models.filter((model) => {
      const matchesSearch = model.name.toLowerCase().includes(search.toLowerCase());
      const type = inferType(model.name);
      const matchesType = typeFilter === "All" || type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [data, search, typeFilter]);

  const pageCount = Math.ceil(filteredModels.length / ITEMS_PER_PAGE);
  const paginatedModels = filteredModels.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) return <p>Loading brand and models...</p>;
  if (error) return <p>Error loading brand data: {error.message}</p>;
  if (!data?.findUniqueBrand) return <p>Brand not found</p>;

  return (
    <section style={{ padding: "2rem" }}>
      <BrandHeader image={data.findUniqueBrand.image} name={data.findUniqueBrand.name} />
      <h1 style={{ textAlign: "center" }}>Check out the <span className="org">Selection</span></h1>

      <FiltersBar
        search={search}
        setSearch={(v) => { setSearch(v); setCurrentPage(1); }}
        typeFilter={typeFilter}
        setTypeFilter={(v) => { setTypeFilter(v); setCurrentPage(1); }}
      />

      
      {/* <ModelsGrid models={paginatedModels} brandId={brandId} /> */}


      <ModelsGrid models={paginatedModels} />
      <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
}
