export default function FiltersBar({ search, setSearch, typeFilter, setTypeFilter }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", marginBottom: "2rem" }}>
      <select
        value={typeFilter}
        onChange={(e) => {
          setTypeFilter(e.target.value);
        }}
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      >
        <option value="All">All Types</option>
        <option value="Electric">Electric</option>
        <option value="Acoustic">Acoustic</option>
        <option value="Bass">Bass</option>
      </select>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{ padding: "0.5rem", fontSize: "1rem", minWidth: "200px" }}
      />
    </div>
  );
}
