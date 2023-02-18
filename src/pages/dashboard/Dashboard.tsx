import "./Dashboard.css";
import logo from "./../../images/money-app.png";
import timer from "./../../images/timer.svg";
import comingsoon from "./../../images/coming-soon.png";

const Dashboard = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Money app logo" />
      </header>
      <main>
        <div className="company_info">
          <h1>
            {" "}
            <span>CN</span> COMPANY NAME
          </h1>
          <div>
            <span>CTO</span>
            <h2>CEO NAME</h2>
          </div>{" "}
          <div>
            <span>cto</span>
            <h2>CTO NAME</h2>
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
