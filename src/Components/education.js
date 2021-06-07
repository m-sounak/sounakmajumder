import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import './education.css';

class Education extends Component {
	render(){
		return (
			<div className="edu-div">
				<div className="edu-header"><h2><span className="edu-span">Education</span></h2></div>
				
				<div className="edu-layoutDiv edu-grid">
					<Card shadow={5} className="edu-card">
						<CardTitle style={{color: 'black', height:'320px', background:'url(https://www.schoolmykids.com/wp-content/uploads/2019/06/St-Stephens-School-Birati-Kolkata.png) center / cover'}}></CardTitle>
						<CardText>St. Stephens School<br />School Education<br /><ul><li>ICSE (2017) 95%</li><li>ISC (2019) 97.5%</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="edu-wrapper">
									<div className="edu-icon edu-globe">
										<div className="edu-tooltip">Website</div>
										<span><i className="fa fa-globe"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="edu-small-anc" style={{textDecoration: 'none'}}>
								<div className="edu-small-container">
									<div className="edu-small-tag">Website</div>
								</div>
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="edu-card">
						<CardTitle style={{color: 'black', height:'320px', background:'url(https://www.iiests.ac.in/assets/images/achievements/noimage.png) center / cover'}}></CardTitle>
						<CardText>IIEST Shibpur<br />Bachelor of Technology (2019-present)<br/> Computer Science and Technology
						<ul><li>CGPA: 9.29</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://www.iiests.ac.in/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="edu-wrapper">
									<div className="edu-icon edu-globe">
										<div className="edu-tooltip">Website</div>
										<span><i className="fa fa-globe"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.iiests.ac.in/" rel="noopener noreferrer" target="_blank" className="edu-small-anc" style={{textDecoration: 'none'}}>
								<div className="edu-small-container">
									<div className="edu-small-tag">Website</div>
								</div>
							</a>
						</CardActions>
					</Card>
				</div>
			</div>
		)
	}
}

export default Education;