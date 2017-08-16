import React, { Component } from 'react';
import Platform from './Platform';
import RequestDonate from './RequestDonate';
import HowTo from './HowTo';
import OneStep from './OneStep';
import Creators from './Creators';
// import Subscribe from './Subscribe';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
	      <div className="home-container">
					<div className="home">
						<div className='header-container'>
							<div className='logo-container'>
								<img alt="" src='./images/logo@2x.png' className='logo'/>
							</div>
							{ /*
              <div className='social-container'>
								<img alt="" src={process.env.PUBLIC_URL + '/images/icon_facebook@2x.png'} className='social-icons'/>
								<img alt="" src={process.env.PUBLIC_URL + '/images/icon_twitter@2x.png'} className='social-icons'/>
							</div>
              */ }
						</div>

						<div className="main-text">
							<div className="headline">
								<h1>Pizza on Earth!</h1>
							</div>
							<div className="headline-info-temp">
								<h4>
                  And goodwill to all men.
                  <br/><br />
								  in knead helps you put food on a person’s plate.
                </h4>
                <p>Download the in knead app now!</p>
							</div>
							<div className='download-container'>
                <a href="https://itunes.apple.com/us/app/in-knead/id1213173338" id='apple-download'>
                  <img alt="Download on the App Store" src={process.env.PUBLIC_URL + '/images/download_apple@2x.png'}/>
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.buddyghee.inkneadapp&hl=en' id='google-download'>
                  <img alt='Get it on Google Play' src={process.env.PUBLIC_URL + '/images/download_google@2x.png'} />
                </a>
							</div>
						</div>

						<div className="iphone-container">
							<img alt="" src={process.env.PUBLIC_URL + '/images/iphone_6_1@2x.png'} className='iphone img-responsive'/>
						</div>

					</div>
				</div>
				<Platform />
				<HowTo />
				<RequestDonate />
				<OneStep />
				<Creators />
				<Footer />
			</div>
    )
  }
}
