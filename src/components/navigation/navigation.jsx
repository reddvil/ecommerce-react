import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <header className="header">
      <div className="inner-header">
        <div className="primary-menu">
          <div className="primary-logo">
            <img src="./img/logo.svg" alt="" />
          </div>
          <div className="search-gap">
            <input type="text" className="search-input" placeholder="Search" />
            <button>
              <i className="fal fa-search"></i>
            </button>
          </div>
          <div className="menu-profile">
            <NavLink
              to="/login"
              className="auth-link"
              activeClassName="active-link">
              ავტორიზაცია
            </NavLink>
            <NavLink
              to="/register"
              className="auth-link"
              activeClassName="active-link">
              რეგისტრაცია
            </NavLink>
            <NavLink
              to="/cart"
              className="auth-link"
              activeClassName="active-link">
              <i className="far fa-shopping-cart"></i> CART
            </NavLink>
          </div>
        </div>
        <div className="navigation">
          <NavLink to="/" className="navlink" activeClassName="active-link">
            Accesories
          </NavLink>
          <NavLink to="/" className="navlink" activeClassName="active-link">
            CPU
          </NavLink>
          <NavLink to="/" className="navlink" activeClassName="active-link">
            MotherBoard
          </NavLink>
          <NavLink to="/" className="navlink" activeClassName="active-link">
            GPU
          </NavLink>
          <NavLink to="/" className="navlink" activeClassName="active-link">
            Case
          </NavLink>
          <NavLink to="/" className="navlink" activeClassName="active-link">
            Operation Memory
          </NavLink>
        </div>
      </div>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func,
  pages: PropTypes.object,
};

export default Navigation;
