import { Redirect } from "react-router-dom";

const Login = ({ isLoggedIn, onLoggedIn }) => {
  console.log("Login function is rendering!");

  return (
    <div className="login--screen">
      <div className="login--container">
        {!isLoggedIn ? <div>Not Logged In 🙄</div> : <Redirect to="/" />}
        <button onClick={onLoggedIn} className="login--btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
