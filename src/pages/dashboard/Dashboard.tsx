import "./Dashboard.css";
import logo from "./../../images/money-app.png";
import timer from "./../../images/timer.svg";
import comingsoon from "./../../images/coming-soon.png";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COMPANY_QUERY = gql`
  query CompanyQuery {
    company {
      name
      ceo
      cto
    }
  }
`;
const Dashboard = () => {
  const { data, loading, error } = useQuery(COMPANY_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    timerId = setTimeout(() => {
      navigate("/");
    }, 120000); // 2 minutes in milliseconds

    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]);

  if (loading) return <p className="loading">Loading... please wait</p>;
  if (error) return <p className="error">Error :(. refresh page</p>;

  return (
    <>
      <header>
        <img src={logo} alt="Money app logo" />
      </header>
      <main>
        <div className="company_info">
          <h1>
            {" "}
            <span>sx</span> {data.company.name}
          </h1>
          <div>
            <span>CEO</span>
            <h2>{data.company.ceo}</h2>
          </div>{" "}
          <div>
            <span>CTO</span>
            <h2>{data.company.cto}</h2>
          </div>
        </div>
        <div className="notification">
          <span className="comingsoon">
            {" "}
            <img src={timer} alt="timer" /> Coming soon
          </span>
          <img className="comingsoon_img" src={comingsoon} alt="" />
          <h1>📫 Notifications</h1>
          <p>
            Receive notifcations about your rider performance, efficiency
            reviews and a lot more
          </p>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
