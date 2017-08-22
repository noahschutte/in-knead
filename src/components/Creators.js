import React, { Component } from 'react';

const linkedinIcon = 'https://s3.amazonaws.com/in-knead/icon_linkedin%402x.png'
const githubIcon = 'https://s3.amazonaws.com/in-knead/icon_github%402x.png'

export default class Home extends Component {
  render() {
    return (
      <div className='creators-container'>
      	<div className='creators'>
	      	<h2 className='text-center'>Who built this</h2>
		      	<div className='staff-container'>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://s3.amazonaws.com/in-knead/Noah.jpg'}/>
                </div>
                <b><p>Noah</p></b>
                <p>Software Engineer</p>
                <a href="https://www.linkedin.com/in/noahschutte">
                  <img alt="" src={linkedinIcon}/>
                </a>
                <a href="https://github.com/noahschutte">
                  <img alt="" src={githubIcon}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://s3.amazonaws.com/in-knead/Jameson.jpg'}/>
                </div>
                <b><p>Jameson</p></b>
                <p>Software Engineer</p>
                <a href="https://www.linkedin.com/in/jamowelling/">
                  <img alt="" src={linkedinIcon}/>
                </a>
                <a href="https://github.com/jamowelling">
                  <img alt="" src={githubIcon}/>
                </a>
              </div>
		      		<div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://s3.amazonaws.com/in-knead/Koty.jpg'}/>
                </div>
			      		<b><p>Koty</p></b>
			      		<p>Software Engineer</p>
                <a href="https://www.linkedin.com/in/wongkoty/">
                  <img alt="" src={linkedinIcon}/>
                </a>
                <a href="https://github.com/wongkoty">
                  <img alt="" src={githubIcon}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://s3.amazonaws.com/in-knead/Kristi.jpg'}/>
                </div>
                <b><p>Kristi</p></b>
                <p>Designer</p>
                <a href="https://www.linkedin.com/in/kristi-choi-4ab05091/">
                  <img alt="" src={linkedinIcon}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://s3.amazonaws.com/in-knead/Susan.jpg'}/>
                </div>
                <b><p>Susan</p></b>
                <p>Designer</p>
                <a href="https://www.linkedin.com/in/shuyulin105/">
                  <img alt="" src={linkedinIcon}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://s3.amazonaws.com/in-knead/Lisi.jpg'}/>
                </div>
                <b><p>Lisi</p></b>
                <p>Investor</p>
                <a href="https://www.linkedin.com/in/lisipeng/">
                  <img alt="" src={linkedinIcon}/>
                </a>
              </div>
	      	</div>
      	</div>
      </div>
    )
  }
}
