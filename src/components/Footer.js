import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div>
	    		<Link to="/privacypolicy">
            <p className='text-uppercase'>privacy policy</p>
          </Link>
          <Link to="/eula">
	    		  <p className='text-uppercase'>eula</p>
          </Link>
    		</div>
        <br/>
        <p>Designed in New York. Built in React. &copy;2017 in knead.</p>
  		</footer>
    )
  }
}
