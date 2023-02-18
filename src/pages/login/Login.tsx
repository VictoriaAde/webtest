import "./Login.css";
import logo from "./../../images/money-app.png";
import monitorImg from "./../../images/monitor.png";
import manageImg from "./../../images/manage.png";
import delegateImg from "./../../images/delegate.png";
const Login = () => {
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
      <form className="login_form">
        <h2>Login to your dashboard</h2>
        <p>Provide details to login to your account </p>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Cokitchen222@gmail.co" />
        <label htmlFor="">Password</label>
        <button>Login</button>
      </form>
    </main>
  );
};

export default Login;
