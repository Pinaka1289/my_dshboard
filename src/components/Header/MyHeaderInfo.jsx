import React from "react";
import useFetch from "../../hooks/useFetch";
import apiConfig from "../../config/apiConfig"; // Import the configuration

const MyHeaderInfo = () => {
  const { data, loading, error } = useFetch(apiConfig.MAIN_INDICES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderCard = (title, info, isLastItem) => {
    const change = info.change.toString().replace("+", "");
    const isPositive = !change.includes("-");
    const changePercent = /\(.*%\)/.test(info.change_percent)
      ? info.change_percent.replace("+", "")
      : `(${info.change_percent}%)`;
    const borderClass = isLastItem ? "" : "border-r border-gray-200";
    const changeColor = isPositive ? "text-green-500" : "text-red-500";

    return (
      <div className={`py-2 px-4 ${borderClass}`} key={title}>
        <h2 className="text-sm font-bold text-center">{title}</h2>
        <p style={{ fontSize: "10px", textAlign: "center" }}>{info.value}</p>
        <p
          className={`${changeColor}`}
          style={{ fontSize: "10px", textAlign: "center" }}
        >
          {change} {changePercent}
        </p>
      </div>
    );
  };

  return (
    <div className="flex">
      {Object.keys(data).map((key, index) =>
        renderCard(key, data[key], index === Object.keys(data).length - 1)
      )}
    </div>
  );
};

export default MyHeaderInfo;
