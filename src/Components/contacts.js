import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from '../images/cv_200kb.jpg';
import './contact.css';

class Contacts extends Component { 
	render(){
		return (
			<div>
				<div className="contact-body" style={{overflow:'scroll'}} >
					<Grid className="contact-grid">
						<Cell className="cell-body">
							<h2>Sounak Majumder</h2>
							<img className="contact-img"
								src={avatar}
								alt="avatar"
							/>
							<p>Please feel free to contact me through the information provided.</p>
						</Cell> 
						<Cell className="cell-body">
							<h2>Contact details</h2>
							<hr/>

							<div className="contact-list">
								<List>
								  <ListItem>
								  	<ListItemContent className="contact-list-item">
								    <div className="container-contact">
										<a href="mailto:sounakmajumder472@gmail.com" rel="noopener noreferrer" target="_blank" className="btnc">
										<i className="fa fa-envelope-square envelope" aria-hidden="true"/>&ensp;sounakmajumder472@gmail.com
									</a></div>
									</ListItemContent>
								  </ListItem>

								  <ListItem>
								  	<ListItemContent className="contact-list-item">
								    <div className="container-contact">
										<a href="https://www.facebook.com/profile.php?id=100008773576079" rel="noopener noreferrer" target="_blank" className="btnc">
										<i className="fa fa-facebook-square facebook" aria-hidden="true"/>&ensp;Sounak Majumder
									</a></div>
									</ListItemContent>
								  </ListItem>

								  <ListItem>
								  	<ListItemContent className="contact-list-item">
								    <div className="container-contact">
										<a href="https://www.instagram.com/meet_sounak/" rel="noopener noreferrer" target="_blank" className="btnc">
										<i className="fa fa-instagram instagram" aria-hidden="true"/>&ensp;meet_sounak
									</a></div>
									</ListItemContent>
								  </ListItem>

								  <ListItem>
									<ListItemContent className="contact-list-item">
									<div className="container-contact">
										<a href="https://codeforces.com/profile/coder_sounak" rel="noopener noreferrer" target="_blank" className="btnc">
										<i className="fa fa-code code" aria-hidden="true"/>&ensp;coder_sounak
									</a></div>
									</ListItemContent>
								  </ListItem>

								  <ListItem>
								    <ListItemContent className="contact-list-item">
								    <div className="container-contact">
										<a href="https://github.com/m-sounak" rel="noopener noreferrer" target="_blank" className="btnc">
										<i className="fa fa-github-square github" aria-hidden="true"/>&ensp;m-sounak
									</a></div>
									</ListItemContent>
								  </ListItem>

								  <ListItem>
								    <ListItemContent className="contact-list-item">
									<div className="container-contact">
										<a href="https://www.linkedin.com/in/sounak-majumder-45b183197/" rel="noopener noreferrer" target="_blank" className="btnc">
										<i className="fa fa-linkedin-square linkedin" aria-hidden="true"/>&ensp;Sounak Majumder
									</a></div>
									</ListItemContent>
								  </ListItem>

								</List>
								
							</div>

						</Cell>
					</Grid>
					
				</div>
			</div>
		)
	}
}

export default Contacts;