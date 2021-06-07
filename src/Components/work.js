import React, {Component} from 'react';
import {Grid} from 'react-mdl';
import './work.css';

class Work extends Component {
	render(){
		return (
			<div>
				
				<div className="work-body" style={{overflow:'scroll'}} >
					<Grid className="work-head">
						<div className="workcell-head">
							Work Experience
						</div> 

					</Grid> <br/><br/>

					<Grid className="work-grid">
						<div className="workcell-body work-banner">
							<img className="work-img"
								src={'https://flookup.com/static/media/logo-01.48679022.png'}
								alt="Finance Lookup Advisors"
							/>
						</div> 
						<div className="workcell-body work-details">
							<h2>Web Development Intern</h2>
							<div className="work-list">
								<div className="work-contact">
										<a href="https://flookup.com/" rel="noopener noreferrer" target="_blank" className="btnw">
										Finance Lookup Advisors
									</a></div>
							</div>
							<div className="work-desc">
								<p><i className="fa fa-calendar" />&ensp;May - 2021 to June - 2021</p>
								<p>
									Worked on a nodeJS based web application. It operates on PDFs and
									converts PDFs to various forms like JPEG, Word, etc and vice versa.

								</p>
							</div>
						</div> 

					</Grid>
					<br /><br />

					<Grid className="work-grid">
						<div className="workcell-body work-banner">
							<img className="work-img"
								src={'https://www.codingninjas.com/assets-landing/images/CNLOGO.svg'}
								alt="Coding Ninjas"
							/>
						</div> 
						<div className="workcell-body work-details">
							<h2>Problem Setter Intern</h2>
							<div className="work-list">
								<div className="work-contact">
										<a href="https://www.codingninjas.com/" rel="noopener noreferrer" target="_blank" className="btnw">
										Coding Ninjas
									</a></div>
							</div>
							<div className="work-desc">
								<p><i className="fa fa-calendar" />&ensp;May - 2021 to present</p>
								<p>
									Working on creating new data structures and algorithms coding problems.
									Also working on creating backend checker and runner files.

								</p>
							</div>
						</div> 

					</Grid>
					<br /><br />
					

					<Grid className="work-footer">
						<div >
							Not visible 
						</div> 

					</Grid> 
					<br /><br />
				</div>
			</div>
		)
	}
}

export default Work; 