import React, {Component} from 'react';
import {Grid, List, ListItemContent, ListItem } from 'react-mdl';

class Resume extends Component {
	render(){
		return (
			<div>
				<div className="contact-body" style={{overflow:'scroll'}} >
					<Grid className="resume-grid" style={{marginBottom:'20px'}}>
						<h2>Resume</h2>
						<p>Hi, I am Sounak Majumder. I am a 2nd year B.Tech student in Computer Science and Technology
						from Indian Institute of Engineering Science and Technology, Shibpur. I love competitive coding.
						I am also a keen student of Machine Learning. My keen interest lies in full stack web developement 
						and front end android developement.<br/><br/>
						<a href="https://drive.google.com/file/d/1FVMB7nOBe4ro2xj1WgH4ffv3G5a-W9FO/view?usp=sharing" rel="noopener noreferrer" target="_blank"><i className="fa fa-address-card" aria-hidden="true"/> Check my resume</a><br/><br/>
						Below are some of my skills</p>
						<List style={{marginTop:'5px'}}>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> Python
						    </ListItemContent>
						  </ListItem>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> JAVA
						    </ListItemContent>
						  </ListItem>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> C++
						    </ListItemContent>
						  </ListItem>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> HTML, CSS, JavaScript
						    </ListItemContent>
						  </ListItem>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> PHP
						    </ListItemContent>
						  </ListItem>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> ReactJS
						   </ListItemContent>
						  </ListItem>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> nodeJS, express, mongoDB
						    </ListItemContent>
						  </ListItem>
						  <ListItem style={{paddingBottom:'0', paddingTop:'0', minHeight:'25px'}}>
						    <ListItemContent className="resume-list-item">
						    	<i className="fa fa-terminal" aria-hidden="true"/> Tensorflow
						   </ListItemContent>
						  </ListItem>

						</List>
					</Grid>
				</div>
			</div>
		)
	}
}

export default Resume;