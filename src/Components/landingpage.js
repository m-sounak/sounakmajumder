import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from '../images/cv_round.jpg';
import './landingpage.css';

class LandingPage extends Component {
	render(){
		return (
			<div style={{width: '100%', margin: 'auto', "height": '100%'}} className="landing-background">
				<ul class="circles">
	                    <li></li>
	                    <li></li>
	                    <li></li> 
	                    <li></li>
	                    <li></li>
	                    <li></li>
	                    <li></li> 
	                    <li></li> 
	                    <li></li>
	                    <li></li>
	            </ul>
				<Grid className='landing-grid landing-background'>
					<Cell col={12}>
						<img 
							src={avatar}
							alt="avatar"
							className="avatar-image" 
						/>
 
						<div className="banner-text">
							<p style={{"padding-bottom": '0', "padding-top":'1em'}}>Hi, I am</p>
							<h1>Sounak Majumder</h1>

							<hr/>

							<p>Full Stack Web Developer | Front end Android Developer | Machine Learning enthusiast | Competitive Coder</p>

							<div className="social-links">
								<a href="https://www.linkedin.com/in/sounak-majumder-45b183197/" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square icons" aria-hidden="true" />
								</a>

								<a href="https://github.com/m-sounak" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square icons" aria-hidden="true" />
								</a>

								<a href="https://codeforces.com/profile/coder_sounak" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-code icons" aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default LandingPage;