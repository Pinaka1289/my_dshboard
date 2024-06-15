import React from "react";

const CustomDateCellWrapper = ({ children, value, events }) => {
  const isHoliday = events.some(
    (event) =>
      event.start.toDateString() === value.toDateString() && event.allDay
  );

  return React.cloneElement(React.Children.only(children), {
    className: isHoliday ? "red-cell" : undefined,
  });
};

export default CustomDateCellWrapper;
