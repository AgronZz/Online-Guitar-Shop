export function MusiciansList({ musicians }) {
  if (musicians.length === 0) {
    return <p style={{ color: "#666", textAlign: "center" }}>No known musicians</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        maxWidth: "700px",
        margin: "100px auto",
      }}
    >
      {musicians.map(({ name, musicianImage, bands }) => (
        <div
          key={name}
          style={{
            backgroundColor: "#f9f6f0", 
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            cursor: "pointer",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px"
          }}
        >
          
          <div
            style={{
              width: "100%",
              paddingBottom: "100%", 
              position: "relative",
            }}
          >
            <img
              src={musicianImage}
              alt={name}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
          </div>

         
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            <strong style={{ fontSize: "1.1rem", color: "#333" }}>{name}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
