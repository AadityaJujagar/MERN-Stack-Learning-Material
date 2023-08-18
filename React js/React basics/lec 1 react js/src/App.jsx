// only for components to be exported and rendered
import "./App.css";
import AppC1 from "./components/CompApp1";
import TempApp from "./components/component temp/TempApp";
import Card from "./components/component temp/card";

function App() {
  let code = "code word to be passed";
  let arr = [
    {
      date: 12,
      month: "feb",
      year: 2022,
    },
    {
      date: 32,
      month: "jan",
      year: 1029,
    },
  ];
  return (
    // fourth optimization, hw
    <Card>
      <div>
        {/* first optimization */}
        <TempApp date="20" month="02" year="2002">
          third optimisation, props.childern enabled
        </TempApp>
        <AppC1></AppC1>

        {/* second optimization */}
        <TempApp
          date={arr[0].date}
          month={arr[0].month}
          year={arr[0].year}
        ></TempApp>

        <p className="App">{code}</p>
      </div>
    </Card>
  );
}

export default App;
