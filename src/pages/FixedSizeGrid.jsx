import React from "react";
import { Link } from "react-router-dom";
import { FixedSizeGrid as Grid } from "react-window";

const Cell = ({ rowIndex, columnIndex, style }) => (
  <div
    className={
      (rowIndex + columnIndex) % 2 === 0 ? "GridItemEven" : "GridItemOdd"
    }
    style={style}
  >
    r{rowIndex}, c{columnIndex}
  </div>
);

const FixedSizeGrid = () => {
  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <Grid
        className="Grid"
        width={600}
        height={300}
        rowCount={100}
        rowHeight={30}
        columnCount={100}
        columnWidth={100}
        // overscanRowCount={3}
        // overscanColumnCount={3}
      >
        {Cell}
      </Grid>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
};

export default FixedSizeGrid;
