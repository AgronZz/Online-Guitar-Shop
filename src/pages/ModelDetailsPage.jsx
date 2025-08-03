import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import ModelDetailHeader from '../components/ModelDetailHeader';
import { Tabs } from "../components/Tabs";
import { MusiciansList } from "../components/MusiciansList";
import { SpecsList } from "../components/SpecsList";

const GET_MODEL_DETAILS = gql`
  query GetModelDetails($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      image
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

export default function ModelDetailsPage() {

  const { brandId, modelId } = useParams();
  const { loading, error, data } = useQuery(GET_MODEL_DETAILS, {
    variables: { brandId, modelId },
  });

  const [tab, setTab] = useState("specs");

  if (loading) return <p>Loading model details...</p>;
  if (error) return <p>Error loading model details: {error.message}</p>;

  const model = data.findUniqueModel;

  return (
    <section style={{ padding: "2rem" }}>
      <ModelDetailHeader name={model.name} image={model.image} />

      <Tabs currentTab={tab} onChangeTab={setTab} />

      <div style={{ marginTop: "1rem" }}>
        {tab === "specs" && <SpecsList specs={model.specs} />}
        {tab === "musicians" && <MusiciansList musicians={model.musicians} />}
      </div>
    </section>
  );
}
