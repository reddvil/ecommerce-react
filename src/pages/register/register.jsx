import { Link } from 'react-router-dom';

const Register = (props) => {
  return (
    <div className="container">
      <div className="auth-form">
        <label htmlFor="name">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="name" required />

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

        <button type="submit">Register</button>

        <Link className="navlink" to="/login">
          Registered?
        </Link>
      </div>
    </div>
  );
};

export default Register;
