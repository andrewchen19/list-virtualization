import React from "react";
import { Link } from "react-router-dom";
import { VariableSizeList as List } from "react-window";

// These row heights are arbitrary (Yours should be based on the content of the row)
// new array length of 100 (initially undefined) -> fill the array with value "true" -> mapped over
const rowSizes = new Array(100)
  .fill(true)
  .map(() => 30 + Math.round(Math.random() * 50));

// return a size for rowSizes[index]
const getItemSize = (index) => rowSizes[index];

const Row = ({ index, style }) => (
  <div
    className={index % 2 === 0 ? "ListItemEven" : "ListItemOdd"}
    style={style}
  >
    Row {index}
  </div>
);

const VariableSizeList = () => {
  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <List
        className="List"
        width={600}
        height={300}
        itemCount={100}
        itemSize={getItemSize}
        // layout="horizontal"
        // overscanCount={4}
      >
        {Row}
      </List>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
};

export default VariableSizeList;
