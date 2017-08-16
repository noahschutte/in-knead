import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='creators-container'>
      	<div className='creators'>
	      	<h2 className='text-center'>Who built this</h2>
		      	<div className='staff-container'>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={process.env.PUBLIC_URL + '/images/Noah.jpg'}/>
                </div>
                <b><p>Noah</p></b>
                <p>Software Engineer</p>
                <a href="https://www.linkedin.com/in/noahschutte">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_linkedin@2x.png'}/>
                </a>
                <a href="https://github.com/noahschutte">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_github@2x.png'}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={process.env.PUBLIC_URL + '/images/Jameson.jpg'}/>
                </div>
                <b><p>Jameson</p></b>
                <p>Software Engineer</p>
                <a href="https://www.linkedin.com/in/jamowelling/">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_linkedin@2x.png'}/>
                </a>
                <a href="https://github.com/jamowelling">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_github@2x.png'}/>
                </a>
              </div>
		      		<div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={process.env.PUBLIC_URL + '/images/Koty.jpg'}/>
                </div>
			      		<b><p>Koty</p></b>
			      		<p>Software Engineer</p>
                <a href="https://www.linkedin.com/in/wongkoty/">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_linkedin@2x.png'}/>
                </a>
                <a href="https://github.com/wongkoty">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_github@2x.png'}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={process.env.PUBLIC_URL + '/images/Kristi.jpg'}/>
                </div>
                <b><p>Kristi</p></b>
                <p>Designer</p>
                <a href="https://www.linkedin.com/in/kristi-choi-4ab05091/">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_linkedin@2x.png'}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={process.env.PUBLIC_URL + '/images/Susan.jpg'}/>
                </div>
                <b><p>Susan</p></b>
                <p>Designer</p>
                <a href="https://www.linkedin.com/in/shuyulin105/">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_linkedin@2x.png'}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={process.env.PUBLIC_URL + '/images/Lisi.jpg'}/>
                </div>
                <b><p>Lisi</p></b>
                <p>Investor</p>
                <a href="https://www.linkedin.com/in/lisipeng/">
                  <img alt="" src={process.env.PUBLIC_URL + '/images/icon_linkedin@2x.png'}/>
                </a>
              </div>
	      	</div>
      	</div>
      </div>
    )
  }
}
