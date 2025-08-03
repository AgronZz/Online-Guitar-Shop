export function SpecsList({ specs }) {
  return (
    <>
      <p style={{marginTop:'50px',marginLeft: '50px',marginRight: "50px",marginBottom: "1rem", color: "#333", fontSize: "1rem", lineHeight: "1.5" }}>
        This guitar is a modern take on the classic Precision Bass design, featuring a sleek body shape and a comfortable 
        neck profile for easy playability. It is equipped with dual active pickups that deliver a powerful and versatile tone, 
        perfect for any genre from rock to funk. The onboard EQ allows players to shape their sound with precision, while the 
        high-quality hardware ensures reliability on stage. With its striking finish options and attention to detail, this model 
        is designed for both performance and style.
      </p>

      <ul style={{
        marginTop:'50px',
        marginLeft: '50px',
        marginRight: "50px",
        maxWidth: "400px",
        paddingLeft: "1rem",
        color: "#444",
        fontSize: "1rem",
        listStyleType: "disc",
        marginBottom: '150px'
      }}>
        {Object.entries(specs).map(([key, value]) => (
          <li key={key} style={{ marginBottom: "0.5rem" }}>
            <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value || "N/A"}
          </li>
        ))}
      </ul>
    </>
  );
}
