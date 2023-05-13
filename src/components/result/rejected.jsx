//
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./result.css";

function Rejected() {
  return (
    <div id="result-bg">
      <Navbar />
      <div className="result-page rejected">
        <h1>Your solution was Rejected.</h1>
        <Link to={"/problems"}>
          <button>Try another Question</button>
        </Link>
      </div>
    </div>
  );
}

export default Rejected;
