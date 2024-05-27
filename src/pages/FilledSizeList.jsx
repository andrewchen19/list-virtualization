import React from "react";
import { FixedSizeList as List } from "react-window";
// related libraries
import AutoSizer from "react-virtualized-auto-sizer";

const Row = ({ index, style }) => (
  <div
    className={index % 2 === 0 ? "ListItemEven" : "ListItemOdd"}
    style={style}
  >
    Row {index}
  </div>
);

const FilledSizeList = () => {
  // The AutoSizer component will fill all of the available space of its parent
  // Remember add height: 100%(vh) to the parent (added in index.css), otherwise it will show nothing
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          width={width}
          height={height}
          itemCount={100}
          itemSize={30}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default FilledSizeList;
