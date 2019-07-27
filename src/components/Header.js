import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function Header(props) {
  const { name, dateTime, previousQueue, nextQueue } = props;

  const formatDate = dateObject => {
    const date = dateObject.getDate();
    const dayIndex = dateObject.getDay();
    const monthIndex = dateObject.getMonth();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return `${dayNames[dayIndex]} ${date} ${
      monthNames[monthIndex]
    } ${hours}:${minutes}`;
  };

  // Need to understand how Functional Components work indepth.

  return (
    <header className="infoboard">
      <button onClick={previousQueue}>&lt;</button>
      <h1>{name}</h1>
      <div>{formatDate(dateTime)}</div>
      <button onClick={nextQueue}>&gt;</button>
    </header>
  );
}

export default Header;
