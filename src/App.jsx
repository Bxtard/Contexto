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
    <main className="container-xl form-control">
      <article className="input-group-text row row-cols-4">
        <Candidate1 />
        <Candidate2 />
        <Candidate3 />
        <Candidate4 />
      </article>
      <div className="input-group-text">
        <Aside />
        <article className="form-control">
          <Total />
          <Votes />
        </article>
      </div>
    </main>
  );
}

export default App;
