import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div>
	    		<p className='text-uppercase'>privacy policy</p>
	    		<p className='text-uppercase'>eula</p>
	    		<p className='text-uppercase'>contact us</p>
    		</div>
        <br/>
        <p>Designed in New York. Built in React. &copy;2017 in knead.</p>
  		</footer>
    )
  }
}
