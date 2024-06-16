import React from "react";
import { Oval } from "react-loader-spinner";

const LoadingSpinner = ({ height = 80, width = 80, color = "#4fa94d" }) => {
  return (
    <div className="flex items-center justify-center h-96">
      <Oval
        height={height}
        width={width}
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={color}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoadingSpinner;
