import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <div className="container">
      <div className="auth-form">
        <label htmlFor="email">
          <b>E-mail</b>
        </label>
        <input type="text" placeholder="Enter E-mail" name="email" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
        <Link className="navlink" to="/register">
          Not Registered?
        </Link>
      </div>
    </div>
  );
};

export default Login;
