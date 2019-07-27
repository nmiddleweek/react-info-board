import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import service from "./service";
import InfoBoard from "./components/InfoBoard";

import "./styles.css";

function App(props) {
  const [queueData, setQueueData] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);

  // const [queueName, setQueueName] = useState("");
  // const [sideDrawer, setSideDrawer] = useState(false);

  async function getData() {
    let data = await service.getData();
    if (!data) {
      return;
    }
    //    console.log("getData()", data);
    setQueueData(data);
  }

  const getName = () => {
    let name = "";
    if (queueData && queueData.length && queueIndex !== null) {
      name = queueData[queueIndex].name;
    }
    return name;
  };

  let interval = null;
  useEffect(() => {
    // ComponentDidMount
    console.log("in component will mount");
    getData();

    interval = setInterval(getData, 3000);

    return () => {
      console.log("componentWillUnmount");
      clearInterval(interval);
    };
  }, []);

  let name = getName();

  const previousQueue = () => {
    const newIndex = queueIndex - 1;
    if (newIndex > -1) {
      setQueueIndex(newIndex);
    }
  };
  const nextQueue = () => {
    const newIndex = queueIndex + 1;
    if (newIndex < queueData.length) {
      setQueueIndex(newIndex);
    }
  };

  // setTimeout(() => {
  // setQueueIndex(queueIndex + 1);
  // }, 1000);

  console.log("name", name);

  return (
    <div className="App">
      <InfoBoard
        name={name}
        metricData={queueData[queueIndex]}
        previousQueue={previousQueue}
        nextQueue={nextQueue}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
