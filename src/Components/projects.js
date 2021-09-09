import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl';
import './projects.css';  

class Projects extends Component {
	render(){
		return ( 
			<div className="projects-div">
				<div className="pro-header"><h2><span className="pro-span">Projects</span></h2></div>

				<div className="pro-layoutDiv projects-grid"> 

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://img.jagranjosh.com//imported/images/E/Articles/JEE_Main_OMR_tips.jpg) center / cover'}}>OMR Grader</CardTitle>
						<CardText className="card-text">Takes in jpeg or webcam OMR (Optical Mark Recognition) picture and grades it based on predefines results. 
						Displays result and correct choices.
						<ul><li>OpenCV</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://github.com/m-sounak/OMR_checker" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-github">
										<div className="pro-tooltip">Github</div>
										<span><i className="fa fa-github"></i></span>
									</div>
								</div> 
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Github</div>
								</div>
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://www.graphicsprings.com/filestorage/stencils/1cf0e62090ebd950855b702c81587979.png?width=500&height=500) center / cover'}}>TalkAndBuy</CardTitle>
						<CardText className="card-text">A room chat application. It keeps track of recent messages and gives product 
						recommendations based on it.
						Database used is postgreSQL. 
						<ul><li>Django</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://talkandbuy.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-globe">
										<div className="pro-tooltip">Website</div>
										<span><i className="fa fa-globe"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Website</div>
								</div>
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://previews.123rf.com/images/businessvector/businessvector1510/businessvector151000088/45788475-newspaper-icon.jpg) center / cover'}}>News App</CardTitle>
						<CardText className="card-text">Get the daily dose of news anytime in the day. A JAVA based news application similar to Google news. Can see news, search news and also share the news. 
						<ul><li>JAVA</li></ul></CardText>
						<CardActions border style={{"text-align": 'center', padding:"5px"}}>
							<a href="https://github.com/m-sounak/NewsApp" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-github">
										<div className="pro-tooltip">Github</div>
										<span><i className="fa fa-github"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Github</div>
								</div>
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://knowiiest.netlify.app/static/media/WhatsApp%20Image%202020-07-20%20at%2000.14.14.3198f0d5.jpeg) center / cover'}}>KNOW IIEST</CardTitle>
						<CardText className="card-text">Know IIEST is a website which contains the top to bottom details of IIESTS.
						It also contains the notes and pdf of books of all years and streams.
						<ul><li>React JS</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://www.knowiiest.netlify.app/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-globe">
										<div className="pro-tooltip">Website</div>
										<span><i className="fa fa-globe"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Website</div>
								</div>
							</a>
						</CardActions>
					</Card>
					
					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://thumbs.dreamstime.com/b/online-marketing-blogging-icon-element-premium-quality-graphic-design-signs-symbols-collection-websites-web-white-144857396.jpg) center / cover'}}>Sociefy</CardTitle>
						<CardText className="card-text">A twitter styled microblogging website containing groups like Facebook.
						Database used is postgreSQL. Post in groups to communicate with like minded people.
						<ul><li>Django</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://sociefy.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-globe">
										<div className="pro-tooltip">Website</div>
										<span><i className="fa fa-globe"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Website</div>
								</div>
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: '#fff', height:'176px', background:'url(https://www.theladders.com/wp-content/uploads/resume-190916-800x450.jpg) center / cover'}}>Resume Creator</CardTitle>
						<CardText className="card-text">A web application that enables you to create your own reumes.
						Enter your details and the application generates a eye catching resume ready to get shortlisted.
						<ul><li>Django</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://resume-constructor-app.herokuapp.com/" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-globe">
										<div className="pro-tooltip">Website</div>
										<span><i className="fa fa-globe"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Github</div>
								</div>
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: '#fff', height:'176px', background:'url(https://specials-images.forbesimg.com/imageserve/5ee30129d8bc730007cc701c/960x0.jpg?fit=scale) center / cover'}}>Face Detection</CardTitle>
						<CardText className="card-text">A face detection application that traces human faces. Created under the supervision of trainers from IIT KGP in jupyter platform.
						<ul><li>openCV</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://github.com/m-sounak/Face_recognition" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-github">
										<div className="pro-tooltip">Github</div>
										<span><i className="fa fa-github"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Github</div>
								</div>
							</a>
						</CardActions>
					</Card>

					<Card shadow={5} className="card">
						<CardTitle style={{color: 'black', height:'176px', background:'url(https://www.logicbig.com/tutorials/java-swing/images/swing.png) center / cover'}}>Notepad</CardTitle>
						<CardText className="card-text">A notepad created with JAVA swing as a part of 10 days of code of NIT DGP.
						 Contains basic notepad functionalities.
						<ul><li>JAVA Swing</li></ul></CardText>
						<CardActions border style={{"text-align": 'center'}}>
							<a href="https://github.com/m-sounak/TextEditor" rel="noopener noreferrer" target="_blank" style={{color: 'black', margin: 'auto'}}>
								<div className="pro-wrapper">
									<div className="pro-icon pro-github">
										<div className="pro-tooltip">Github</div>
										<span><i className="fa fa-github"></i></span>
									</div>
								</div>
							</a>
							<a href="https://www.ststephensschool.co.in/" rel="noopener noreferrer" target="_blank" className="pro-small-anc" style={{textDecoration: 'none'}}>
								<div className="pro-small-container">
									<div className="pro-small-tag">Github</div>
								</div>
							</a>
						</CardActions>
					</Card>

				</div>
			</div>
		)
	}
}

export default Projects;