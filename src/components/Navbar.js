import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

export default function Navbar({ title, about }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a className="navbar-brand" href="/">{title}</a>
        <div className="navbar-links">
          <ul className="nav-list">
            <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}> Home </NavLink>
            </li>
            <li>
              <Link className="nav-link" to='/about' href="/about">{about}</Link>
            </li>
          </ul>
          <form className="search-form">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input className="search-input" type="search" placeholder="Search spells..." />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};