import React from "react";
import { Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => (
  // Details about the particular item can be accessed with the index parameter
  // style parameter is responsible for items which absolutely positioned with their height and width values assigned inline (MUST)
  <div
    className={index % 2 === 0 ? "ListItemEven" : "ListItemOdd"}
    style={style}
  >
    Row {index}
  </div>
);

const FilledSizeList = () => {
  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <List
        className="List"
        width={600}
        height={300}
        itemCount={100}
        itemSize={30}
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

export default FilledSizeList;
