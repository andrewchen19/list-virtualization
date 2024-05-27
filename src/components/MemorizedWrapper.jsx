import React, { useState, useCallback } from "react";
import Memorized from "./Memorized";

const generateItems = (numItems) =>
  Array(numItems)
    .fill(true)
    .map(() => ({
      isActive: false,
      // random number -> radix -> new string
      label: Math.random().toString(36).substring(2),
    }));

const MemorizedWrapper = () => {
  const [items, setItems] = useState(generateItems(100));

  // a function that updates an item's state
  // dependency array [] means that toggleItemActive will be memoized and never recreated
  const toggleItemActive = useCallback((index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        isActive: !newItems[index].isActive,
      };
      return newItems;
    });
  }, []);

  return (
    <Memorized
      width={600}
      height={300}
      items={items}
      toggleItemActive={toggleItemActive}
    />
  );
};

export default MemorizedWrapper;
