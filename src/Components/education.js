import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';

class Education extends Component {
	render(){
		return (
			<div className="projects-div">
				<div className="header">E d u c a t i o n</div>
				<div className="layoutDiv projects-grid">

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'350px', background:'url(https://www.schoolmykids.com/wp-content/uploads/2019/06/St-Stephens-School-Birati-Kolkata.png) center / cover'}}></CardTitle>
						<CardText><ul><li>ICSE (2017) 95%</li><br/><li>ISC (2019) 97.5%</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								Website
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'350px', background:'url(https://www.iiests.ac.in/assets/images/achievements/noimage.png) center / cover'}}></CardTitle>
						<CardText>Bachelor of Technology (2019-present)<br/> Computer Science and Technology
						<ul><li>CGPA: 9.09</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://www.iiests.ac.in/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								Website
							</a>
						</CardActions>
					</Card>
				</div>
			</div>
		)
	}
}

export default Education;