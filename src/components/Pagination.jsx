export default function Pagination({ pageCount, currentPage, setCurrentPage }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          style={{
            margin: "0 5px",
            padding: "8px 12px",
            borderRadius: "6px",
            background: currentPage === i + 1 ? "#333" : "#ddd",
            color: currentPage === i + 1 ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
