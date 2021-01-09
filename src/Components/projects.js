import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';

class Projects extends Component {
	render(){
		return (
			<div className="projects-div">
				<div className="header">P r o j e c t s</div>
				<div className="layoutDiv projects-grid">
					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://knowiiest.netlify.app/static/media/WhatsApp%20Image%202020-07-20%20at%2000.14.14.3198f0d5.jpeg) center / cover'}}>KNOW IIEST</CardTitle>
						<CardText>Know IIEST is a website which contains the top to bottom details of IIESTS.
						It also contains the notes and pdf of books of all years and streams.
						<ul><li>React JS</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://www.knowiiest.netlify.app/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								Website
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://www.logicbig.com/tutorials/java-swing/images/swing.png) center / cover'}}>Notepad</CardTitle>
						<CardText>A notepad created with JAVA swing as a part of 10 days of code of NIT DGP.
						 Contains basic notepad functionalities.
						<ul><li>JAVA Swing</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://github.com/m-sounak/TextEditor" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								Giithub
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: '#fff', height:'176px', background:'url(https://specials-images.forbesimg.com/imageserve/5ee30129d8bc730007cc701c/960x0.jpg?fit=scale) center / cover'}}>Face Detection</CardTitle>
						<CardText>A face detection application created under the supervision of trainers from IIT KGP in jupyter platform.
						<ul><li>openCV</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://github.com/m-sounak/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								Giithub
							</a>
						</CardActions>
					</Card>
				</div>
			</div>
		)
	}
}

export default Projects;