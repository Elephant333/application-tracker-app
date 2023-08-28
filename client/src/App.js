import React, { Fragment } from "react";
import "./App.css";

//components
import InputApp from "./components/inputApp";
import ListApps from "./components/ListApps";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputApp />
        <ListApps />
      </div>
    </Fragment>
  );
}

export default App;
