import React from 'react'
import PropTypes from 'prop-types';
import './Header.css';

 const Header = ({title}) => {
  return (
    <header className='header'>
      <h2>{title}</h2>
    </header>
  )
}

Header.defaultProps = {
    title: 'Login Page'
}
Header.propTypes = {
    title: PropTypes.string,
}
export default Header;