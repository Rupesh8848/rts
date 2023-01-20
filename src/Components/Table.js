import React from "react";
import "./Tables.styles.css";
export default function Table({ tableNumber, data }) {
  const topLeftData = Object.keys(data)[0];
  const dummyData = data[topLeftData];
  const [topHeader, setTopHeader] = React.useState([]);

  const [metaData, setMetaData] = React.useState({
    firstKey: tableNumber === 1 ? "name" : "date",
    secondKey: tableNumber === 1 ? "date" : "name",
  });
  React.useEffect(() => {
    setTopHeader([]);
    dummyData[0].values.forEach((element) => {
      setTopHeader((oldData) => [...oldData, element[metaData.secondKey]]);
    });
  }, []);
  console.log(topHeader);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{topLeftData}</th>
            {topHeader.map((element) => (
              <TableHeader key={element} header={element} />
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.map((obj) => {
            return (
              <tr>
                <td>{obj[metaData.firstKey]}</td>
                {TableBody(obj["values"])}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function TableHeader({ header }) {
  return <th>{header}</th>;
}

function TableBody(data) {
  return data.map((obj) => <td key={obj["value"]}>{obj["value"]}</td>);
}
