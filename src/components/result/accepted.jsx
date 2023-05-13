//
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./result.css";

function Accepted() {
  return (
    <div id="result-bg">
      <Navbar />
      <div className="result-page accepted">
        <h1>Your solution was Successfully Accepted.</h1>
        <Link to={"/problems"}>
          <button type="submit">Attempt another Question</button>
        </Link>
      </div>
    </div>
  );
}

export default Accepted;
