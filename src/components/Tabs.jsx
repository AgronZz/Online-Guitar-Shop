export function Tabs({ currentTab, onChangeTab }) {
  const containerStyle = {
    display: "flex",
    width: "100%",
    marginTop: "1rem",
  };

  const leftTabStyle = {
    flex: 1,
    textAlign: "center",
    padding: "0.5rem 0",
    cursor: "pointer",
    color: currentTab === "specs" ? "orange" : "gray",
    borderBottom: `3px solid ${currentTab === "specs" ? "orange" : "gray"}`,
    fontWeight: currentTab === "specs" ? "bold" : "normal",
    background: "none",
    border: "none",
  };

  const rightTabStyle = {
    flex: 1,
    textAlign: "center",
    padding: "0.5rem 0",
    cursor: "pointer",
    color: currentTab === "musicians" ? "orange" : "gray",
    borderBottom: `3px solid ${currentTab === "musicians" ? "orange" : "gray"}`,
    fontWeight: currentTab === "musicians" ? "bold" : "normal",
    background: "none",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      <button style={leftTabStyle} onClick={() => onChangeTab("specs")} disabled={currentTab === "specs"}>
        Specifications
      </button>
      <button style={rightTabStyle} onClick={() => onChangeTab("musicians")} disabled={currentTab === "musicians"}>
        Who plays it?
      </button>
    </div>
  );
}

