import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addDays } from "date-fns";
import enUS from "date-fns/locale/en-US";
import useFetch from "../hooks/useFetch";
import apiConfig from "../config/apiConfig"; // Import the configuration
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const MarketCalendar = () => {
  const { data, loading, error } = useFetch(apiConfig.HOLIDAY_CALENDAR);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (data) {
      // console.log("Fetched Data:", data); // Log fetched data

      const uniqueDates = new Set();

      const holidayEvents = data.reduce((acc, holiday) => {
        const date = parse(holiday.tradingDate, "dd-MMM-yyyy", new Date()); // Ensure the date is correctly parsed
        const dateKey = date.toISOString().split("T")[0]; // Use ISO date string without time as unique key

        if (!uniqueDates.has(dateKey)) {
          uniqueDates.add(dateKey);
          acc.push({
            title: holiday.description,
            start: date,
            end: addDays(date, 1), // Set the end date to the next day for all-day events
            allDay: true,
            resource: holiday,
          });
        }

        return acc;
      }, []);

      // console.log("Holiday Events:", holidayEvents); // Log holiday events
      setEvents(holidayEvents);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const eventStyleGetter = (event) => {
    const backgroundColor = "#ff0000"; // Red color for holidays
    const style = {
      backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Market Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        className="bg-white p-4 shadow-lg rounded-lg"
      />
    </div>
  );
};

export default MarketCalendar;
