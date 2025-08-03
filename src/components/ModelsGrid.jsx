import ModelCard from "./ModelCard";
import { useParams } from "react-router-dom";

export default function ModelsGrid({ models }) {
  const { brandId } = useParams();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "6rem",
        maxWidth: "1250px",
        margin: "2rem auto",
        marginTop: "100px",
      }}
    >
      {models.map((model) => (
        <ModelCard key={model.id} model={model} brandId={brandId} />
      ))}
    </div>
  );
}
