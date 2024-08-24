import { useEffect } from "react";
import "./App.css";
import Count from "./redux/Count";
import CountA from "./reduxTK/CountA";
import HackerNews from "./components/HackerNews";

function App() {
  return (
    <div>
      {/* <CountA></CountA> */}
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
