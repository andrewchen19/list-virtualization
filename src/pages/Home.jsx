import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontSize: "1.5rem",
        }}
      >
        <li>
          <Link to="/fixedSizeList">Fixed Size List</Link>
        </li>
        <li>
          <Link to="/variableSizeList">Variable Size List</Link>
        </li>
        <li>
          <Link to="/fixedSizeGrid">Fixed Size Grid</Link>
        </li>
        <li>
          <Link to="/variableSizeGrid">Variable Size Grid</Link>
        </li>
        <li>
          <Link to="/scrollingIndicator">Scrolling Indicator</Link>
        </li>
        <li>
          <Link to="/scrollingToItem">Scrolling To Item</Link>
        </li>
        <li>
          <Link to="/memorizedListItems">Memorized List Items</Link>
        </li>
        <li>
          <Link to="/attachEventHandler">Attach Event Handler</Link>
        </li>
        <li>
          <Link to="/filledSizeList">Filled Size List</Link>
        </li>
        <li>
          <Link to="/infiniteLoadingList">Infinite Loading List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
