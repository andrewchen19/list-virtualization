import React, { forwardRef } from "react";
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

function handleOnWheel({ deltaY }) {
  // Your handler goes here
  // deltaY returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0
  console.log("handleOnWheel()", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const AttachEventHandler = () => {
  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <FixedSizeList
        className="List"
        width={600}
        height={300}
        itemCount={100}
        itemSize={30}
        outerElementType={outerElementType}
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

export default AttachEventHandler;
