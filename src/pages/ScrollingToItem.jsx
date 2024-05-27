import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FixedSizeList } from "react-window";

const Row = ({ index, style }) => (
  <div
    className={index % 2 === 0 ? "ListItemEven" : "ListItemOdd"}
    style={style}
  >
    Row {index}
  </div>
);

const ScrollingToItem = () => {
  const listRef = useRef();

  const scrollToRow30Auto = () => {
    listRef.current.scrollToItem(30, "auto");
  };
  const scrollToRow45Smart = () => {
    listRef.current.scrollToItem(45, "smart");
  };
  const scrollToRow60Start = () => {
    listRef.current.scrollToItem(60, "start");
  };
  const scrollToRow75Center = () => {
    listRef.current.scrollToItem(75, "center");
  };
  const scrollToRow90End = () => {
    listRef.current.scrollToItem(90, "end");
  };

  return (
    <section style={{ marginLeft: "5rem", marginTop: "3rem" }}>
      <div className="Buttons">
        <button onClick={scrollToRow30Auto}>
          Scroll to row 30 (align: auto)
        </button>
        <button onClick={scrollToRow45Smart}>
          Scroll to row 45 (align: smart)
        </button>
        <button onClick={scrollToRow60Start}>
          Scroll to row 60 (align: start)
        </button>
        <button onClick={scrollToRow75Center}>
          Scroll to row 75 (align: center)
        </button>
        <button onClick={scrollToRow90End}>
          Scroll to row 90 (align: end)
        </button>
      </div>

      <FixedSizeList
        className="List"
        width={600}
        height={300}
        itemCount={100}
        itemSize={30}
        ref={listRef}
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

export default ScrollingToItem;
