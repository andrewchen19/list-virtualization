import React from "react";
import { Link } from "react-router-dom";
import MemorizedWrapper from "../components/MemorizedWrapper";

const MemorizedContainer = () => {
  return (
    <section style={{ marginLeft: "5rem", marginTop: "5rem" }}>
      <MemorizedWrapper />

      <div style={{ marginTop: "3rem" }}>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
};

export default MemorizedContainer;
