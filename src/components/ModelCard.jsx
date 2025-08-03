import { Link } from "react-router-dom";

export default function ModelCard({ model, brandId }) {
  return (
    <Link to={`/brand/${brandId}/model/${model.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ textAlign: "center" }}>
        <img src={model.image} alt={model.name} style={{ width: "100%", height: "auto" }} />
        <h3 style={{ marginTop: "1rem", textAlign: "left", fontWeight: "normal" }}>{model.name}</h3>
        <p style={{ fontWeight: "normal", color: "gray", textAlign: "left" }}>${model.price ?? "N/A"}.00</p>
      </div>
    </Link>
  );
}
