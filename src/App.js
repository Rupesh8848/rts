import React from "react";
import Table from "./Components/Table";
import DummyData from "./DummyData.json";

function App() {
  const DummyData2 = converter();
  return (
    <div className="App">
      <Table tableNumber={1} data={DummyData} />
      <Table tableNumber={2} data={DummyData2} />
    </div>
  );
}

export default App;

function converter() {
  const mainKeyList = DummyData["Parameter"][0]["values"].map(
    (element) => element.date
  );
  const result = mainKeyList.map((dataKey) => ({
    date: dataKey,
    values: DummyData["Parameter"].map((object) => {
      return {
        name: object.name,
        value: object.values.filter((obj) => obj.date === dataKey)[0].value,
      };
    }),
  }));

  return { Time: result };
}
