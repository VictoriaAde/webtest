import "./Login.css";
import logo from "./../../images/money-app.png";
import monitorImg from "./../../images/monitor.png";
import manageImg from "./../../images/manage.png";
import delegateImg from "./../../images/delegate.png";
// import React, { useContext } from "react";
import useGlobalAuthContext from "./../../auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { username, password, updateUserDetails } = useGlobalAuthContext();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("logged in");

    // Perform login with username and password
    if (!username || !password) return;
    navigate("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    updateUserDetails(target.name, target.value);
  };
  // const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUsername(event.target.value);
  // };
  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  return (
    <main className="login">
      <div className="login_description">
        <img src={logo} alt="Money app logo" />
        <h1 className="login_description-heading">Hi there, see what’s new</h1>
        <p className="login_description-paragraph">
          Here’s how Foodcourt helps you manage your daily operations and ensure
          your riders are efficient
        </p>
        <div>
          <div className="login_description-list">
            <div>
              <img src={monitorImg} alt="Monitor your Earnings" />
            </div>
            <div>
              {" "}
              <h3 className="active_h3">Monitor your Earnings</h3>
              <p className="active_p">
                Easily see how much your busineses are earning on each
                transaction and watch your earnings rise.{" "}
              </p>
            </div>
          </div>
          <div className="login_description-list">
            <div>
              <img src={manageImg} alt="Manage your Businesses" />
            </div>
            <div>
              {" "}
              <h3 className="active_h3">Manage your Businesses</h3>
              <p className="active_p">
                Easily see how much your businesses are earning on each
                transaction and watch your earnings rise.
              </p>
            </div>
          </div>
          <div className="login_description-list">
            <div>
              <img src={delegateImg} alt="Delegate to Staff" />
            </div>
            <div>
              {" "}
              <h3 className="active_h3">Delegate to Staff</h3>
              <p className="active_p">
                Easily see how much your businesses are earning on each
                transaction and watch your earnings rise.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleLogin} className="login_form_container">
        <div className="login_form">
          <h2>Login to your dashboard</h2>
          <p>Provide details to login to your account </p>
          <div className="form_inputs">
            <div className="form_input_container">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="user@gmail.com"
                required
                value={username}
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="form_input_container">
              {" "}
              <label htmlFor="">Password</label>
              <input
                type="password"
                required
                value={password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="login_button_container">
              {" "}
              <button type="submit" className="login_button">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
