import React from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content ">
      <div className="container ma-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost rounded-btn btn-md  mx-2">
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btm-md  rounded-btn mx-2 "
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
