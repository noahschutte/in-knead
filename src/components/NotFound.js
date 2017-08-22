import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <img alt="" src='./images/logo@2x.png' className='logo'/>
      </Link>
    </div>
  )
}

export default NotFound;
