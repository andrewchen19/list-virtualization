import React from "react";
import { Link } from "react-router-dom";
import { VariableSizeGrid as Grid } from "react-window";

// These cell sizes are arbitrary (Yours should be based on the content of the cell)
const rowHeights = new Array(100)
  .fill(true)
  .map(() => 30 + Math.round(Math.random() * 50));
const columnWidths = new Array(100)
  .fill(true)
  .map(() => 100 + Math.round(Math.random() * 50));

const getRowHeight = (index) => rowHeights[index];
const getColumnWidth = (index) => columnWidths[index];

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

const VariableSizeGrid = () => {
  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <Grid
        className="Grid"
        width={600}
        height={300}
        rowCount={100}
        rowHeight={getRowHeight}
        columnCount={100}
        columnWidth={getColumnWidth}
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

export default VariableSizeGrid;
