import React, { Component } from 'react';

const linkedinIcon = 'https://d2p3tmtweusf4h.cloudfront.net/icon_linkedin%402x.png'
const githubIcon = 'https://d2p3tmtweusf4h.cloudfront.net/icon_github%402x.png'

export default class Home extends Component {
  render() {
    return (
      <div className='creators-container'>
      	<div className='creators'>
	      	<h2 className='text-center'>Who built this</h2>
		      	<div className='staff-container'>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://d2p3tmtweusf4h.cloudfront.net/Noah.jpg'}/>
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
                  <img alt="" src={'https://d2p3tmtweusf4h.cloudfront.net/Jameson.jpg'}/>
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
                  <img alt="" src={'https://d2p3tmtweusf4h.cloudfront.net/Koty.jpg'}/>
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
                  <img alt="" src={'https://d2p3tmtweusf4h.cloudfront.net/Kristi.jpg'}/>
                </div>
                <b><p>Kristi</p></b>
                <p>Lead Product Designer (UX/UI)</p>
                <a href="https://www.linkedin.com/in/kristi-choi-4ab05091/">
                  <img alt="" src={linkedinIcon}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://d2p3tmtweusf4h.cloudfront.net/Susan.jpg'}/>
                </div>
                <b><p>Susan</p></b>
                <p>Designer</p><br/>
                <a href="https://www.linkedin.com/in/shuyulin105/">
                  <img alt="" src={linkedinIcon}/>
                </a>
              </div>
              <div className='individual'>
                <div className='circle-base'>
                  <img alt="" src={'https://d2p3tmtweusf4h.cloudfront.net/Lisi.jpg'}/>
                </div>
                <b><p>Lisi</p></b>
                <p>Investor</p><br/>
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
