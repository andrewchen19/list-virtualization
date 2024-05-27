import React from "react";
import { Link } from "react-router-dom";
import { FixedSizeList } from "react-window";

const Row = ({ index, style, isScrolling }) => (
  <div
    className={index % 2 === 0 ? "ListItemEven" : "ListItemOdd"}
    style={style}
  >
    {isScrolling ? `is scrolling...` : `Row ${index}`}
  </div>
);

const ScrollingIndicator = () => {
  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <FixedSizeList
        className="List"
        width={600}
        height={300}
        itemCount={100}
        itemSize={30}
        useIsScrolling
      >
        {Row}
      </FixedSizeList>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
};

export default ScrollingIndicator;
