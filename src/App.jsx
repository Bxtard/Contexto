import Candidate1 from "./components/Candidate1";
import Candidate2 from "./components/Candidate2";
import Candidate3 from "./components/Candidate3";
import Candidate4 from "./components/Candidate4";
import Total from "./components/Total";
import Votes from "./components/Votes";
import Aside from "./components/Aside";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="candidates">
        <Candidate1 className="candidate" />
        <Candidate2 className="candidate" />
        <Candidate3 className="candidate" />
        <Candidate4 className="candidate" />
      </div>
      <div className="info">
        <div className="aside">
          <Aside className="aside-items"/>
        </div>
        <div>
          <Total className="total" />
          <Votes className="votes" />
        </div>
      </div>
    </div>
  );
}

export default App;
