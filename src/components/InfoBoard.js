import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Metric from "./Metric";
import Header from "./Header";

function InfoBoard(props) {
  const { name, metricData, previousQueue, nextQueue } = props;
  useEffect(() => {
    console.log("re-render", metricData);
  });

  if (!metricData) {
    return null;
  }

  return (
    <div>
      <Header
        name={name}
        dateTime={new Date()}
        previousQueue={previousQueue}
        nextQueue={nextQueue}
      />
      <main>
        {metricData.metrics.map((item, index) => (
          <Metric
            key={index}
            label={item.name}
            value={item.value}
            status="OK"
          />
        ))}
      </main>

      <footer>
        <code>{metricData ? JSON.stringify(metricData) : ""}</code>
      </footer>
    </div>
  );
}

export default InfoBoard;
