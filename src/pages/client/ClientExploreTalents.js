import CategoryOfFreelancer from "../../components/client/CategoryOFreelancer";
import ClientExploreTalentsHeader from "../../components/client/ClientExploreTalentsHeader";
import ItAndDevelopmentFreelancer from "../../components/client/ItAndDevelopmentFreelancer";

function ClientExploreTalents() {
  const buttonStyle = {
    backgroundColor: "white",
    border: "2px solid #003986",
    fontSize: "20px",
    padding: "6px",
    borderRadius: "10px",
    color: "#003986",
    fontWeight: "600",
  };
  return (
    <div style={{ paddingLeft: "26px", paddingRight: "26px", marginTop: "16px" }}>
      <ClientExploreTalentsHeader />
      <CategoryOfFreelancer />
      <ItAndDevelopmentFreelancer />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={buttonStyle}>Load More</button>
      </div>
    </div>
  );
}

export default ClientExploreTalents;
