import React from "react";

const AnalysisFetcher = ({ data }) => {
  if (!data) {
    return <p>No data available</p>;
  }
  console.log("AnalysisFetcher Data: ", data);

  return (
    <div>
      <div>
        <img src={`http://127.0.0.1:8000${data.url}`} alt="Fetched from API" />
        <p>{data.text}</p> {/* Assuming data contains text */}
      </div>
    </div>
  );
};

export default AnalysisFetcher;
