import React, { memo } from "react";
import { FixedSizeList, areEqual } from "react-window";
import memoize from "memoize-one";

// This helper function memoizes incoming props and return an object
// To avoid causing unnecessary re-renders pure Row components
const createItemData = memoize((items, toggleItemActive) => ({
  items,
  toggleItemActive,
}));

const Row = memo(({ data, index, style }) => {
  const { items, toggleItemActive } = data;
  const item = items[index];

  const textStyle = {
    color: item.isActive ? "green" : "red",
    cursor: "pointer",
  };

  return (
    <div onClick={() => toggleItemActive(index)} style={style}>
      {item.label} is &nbsp;
      <span style={{ ...textStyle }}>
        {item.isActive ? "active" : "inactive"}
      </span>
    </div>
  );

  // Custom comparison function for React.memo
  // origin -> arePropsEqual
}, areEqual);

const Memorized = ({ height, items, toggleItemActive, width }) => {
  // Bundle additional data to list items using the "itemData" prop.
  const itemData = createItemData(items, toggleItemActive);

  return (
    <FixedSizeList
      width={width}
      height={height}
      itemCount={items.length}
      itemData={itemData}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
};

export default Memorized;
