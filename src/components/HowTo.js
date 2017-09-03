import React, { Component } from 'react';

export default class HowTo extends Component {
  render() {
    return (
    	<div className='how-to-container'>
	      <div className='how-to'>
		      <div className='how-to-text-container'>
		        <h2 className='text-center text-uppercase'>Be a donator</h2>
		        <p className='text-center'>
              With the press of just a few buttons,
  		        you can be certain that your pizza ends up in the right stomach.
  		        No private messages, no exchange of personal information, no worries.
  		        Easy, breezy, microphilanthropeezy.
            </p>
		      </div>
		      <div className='steps-container'>
		      	<div className='step-container'>
				      <h2 className='text-uppercase'>Step 1</h2>
				      <p>Click “Donate” next to the video that resonates the most with you</p>
				     </div>
				     <div className='step-container'>
				      <h2 className='text-uppercase'>Step 2</h2>
				      <p>Copy the requester’s email address and paste it into the vendor’s
				      “gift card recipient” field</p>
				    </div>
				    <div className='step-container'>
				      <h2 className='text-uppercase'>Step 3</h2>
				      <p>Complete the purchase, and wait for the thank you video!</p>
				    </div>
		      </div>
		      <img alt="" src={'https://d2p3tmtweusf4h.cloudfront.net/donate.png'} className='img-responsive'/>
	      </div>
      </div>
    )
  }
}
