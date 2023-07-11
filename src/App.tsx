import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { IReport } from "./Page/PageLotto/Interface/IReport";

function App() {
  const [count, setCount] = useState(0);

  const test: IReport = {
    dateArrest: "100",
    timeArrest: "09.30น.",
    locationArrest: "testlocation",
    suspectorArrest:"Weerapon Tipratmongkhon",
    evidenceArrest: {i:"16 ก.ค.66",n:10,p:50},
    evidence2Arrest: {i:"16 ก.ค.66",n:10,p:50},
    dailyVerseArrest:"ข้อที่ 5 เวลา10.23 น. ลงวันที่ 26 มิ.ย.66",
    dailyBankNumberArrest:["7ค7910884","7ค7910885"]
  };
  
  //console.log(test.dailyBankNumberArrest)

  //var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];
  //console.log(fruits);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
