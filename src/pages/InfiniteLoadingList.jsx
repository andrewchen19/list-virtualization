import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FixedSizeList } from "react-window";
// related libraries
import InfiniteLoader from "react-window-infinite-loader";

const LOADING = 1;
const LOADED = 2;

const InfiniteLoadingList = () => {
  // store the loading status of each item
  const itemStatusMap = useRef({});

  // function responsible for tracking the loaded state of each item
  const isItemLoaded = (index) => !!itemStatusMap.current[index];

  // simulates loading more items by setting their status to LOADING, then changing their status to LOADED after a timeout of 1.5 seconds
  // startIndex and stopIndex are the range of items to be loaded
  const loadMoreItems = (startIndex, stopIndex) => {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap.current[index] = LOADING;
    }
    return new Promise((resolve) =>
      setTimeout(() => {
        for (let index = startIndex; index <= stopIndex; index++) {
          itemStatusMap.current[index] = LOADED;
        }
        resolve();
      }, 1500)
    );
  };

  const Row = ({ index, style }) => {
    const label =
      itemStatusMap.current[index] === LOADED ? `Row ${index}` : "Loading...";
    return (
      <div className="ListItem" style={style}>
        {label}
      </div>
    );
  };

  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={100}
        loadMoreItems={loadMoreItems}
      >
        {/* onItemsRendered -> callback, is used to notify InfiniteLoader about which items are currently rendered */}
        {/* ref -> allows InfiniteLoader to control the FixedSizeList instance */}
        {({ onItemsRendered, ref }) => (
          <FixedSizeList
            className="List"
            width={600}
            height={300}
            itemCount={100}
            itemSize={30}
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {Row}
          </FixedSizeList>
        )}
      </InfiniteLoader>

      <div style={{ marginTop: "3rem" }}>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
};

export default InfiniteLoadingList;
