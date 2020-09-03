import React from "react";
import FilterComponent from "./FilterComponent";
import ModelsList from "./ModelsList";

const dashboard = () => {
  return (
    <div className="mt-5">
      <FilterComponent></FilterComponent>
      <ModelsList></ModelsList>
    </div>
  );
};

export default dashboard;
