import React from "react";
import Table from "./Components/Table";
import DummyData from "./DummyData.json";
import DummyData2 from "./DummyData2.json";
import { jsonConverter } from "./Components/ConverterFunction";
function App() {
  jsonConverter();
  return (
    <div className="App">
      <Table tableNumber={1} data={DummyData} />
      <Table tableNumber={2} data={DummyData2} />
    </div>
  );
}

export default App;
