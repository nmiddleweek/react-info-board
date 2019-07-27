import React from "react";
import ReactDOM from "react-dom";

function Metric(props) {
  const { label, value, status } = props;
  const object = { backgroundColor: "grey" };

  return (
    <li style={object}>
      <div>Metric {label}</div>
      <div>Value {value}</div>
      <div>Status {status}</div>
    </li>
  );
}

export default Metric;
