import "./Login.css";
import logo from "./../../images/money-app.png";
import monitorImg from "./../../images/monitor.png";
import manageImg from "./../../images/manage.png";
import delegateImg from "./../../images/delegate.png";
import useGlobalAuthContext from "./../../auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
  const { username, password } = useGlobalAuthContext();
  const [formAuth, setFormAuth] = useState({ username: "", password: "" });
  console.log(username, password, formAuth);

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === formAuth.username && password === formAuth.password) {
      navigate("/dashboard");
    } else {
      alert("invalid credentails");
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setFormAuth({ ...formAuth, [target.name]: target.value });
  };

  return (
    <main className="login">
      <div className="login_description">
        <img className="logo" src={logo} alt="Money app logo" />

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
                type="email"
                placeholder="user@gmail.com"
                required
                name="username"
                onChange={handleChange}
              />
            </div>

            <div className="form_input_container">
              <label htmlFor="">Password</label>
              <input
                type="password"
                required
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="login_button_container">
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
