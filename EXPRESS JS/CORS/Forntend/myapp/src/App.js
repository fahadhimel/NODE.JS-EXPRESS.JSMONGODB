import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fatchdata();
  }, []);

  const fatchdata = async () => {
    // async type
    // const ddata = await fetch("http://127.0.0.1:3005/data");
    // const jdata = await ddata.json();
    // setData(jdata.damyData);

    // normal type
    fetch("http://127.0.0.1:3005/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fatch");
        }
        return res.json();
      })
      .then((result) => {
        setData(result.damyData);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Forntend</h1>
      <table border='1'>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                  </tr>
                );
              })
            : console.log("no data")}
        </tbody>
      </table>
    </div>
  );
}

export default App;
