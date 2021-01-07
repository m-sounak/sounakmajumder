import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import avatar from '../images/cv_200kb.jpg';

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
								    <ListItemContent className="contact-list-item"><i className="fa fa-envelope-square" aria-hidden="true"/>	sounakmajumder472@gmail.com
								    	<a href="mailto:sounakmajumder472@gmail.com" rel="noopener noreferrer" target="_blank">link</a>
								    </ListItemContent>
								  </ListItem>
								  <ListItem>
								    <ListItemContent className="contact-list-item"><i className="fa fa-facebook-square" aria-hidden="true"/>	Sounak Majumder
								    	<a href="https://www.facebook.com/profile.php?id=100008773576079" rel="noopener noreferrer" target="_blank">	link</a></ListItemContent>
								  </ListItem>
								  <ListItem>
								    <ListItemContent className="contact-list-item"><i className="fa fa-instagram" aria-hidden="true"/>	meet_sounak
								    <a href="https://www.instagram.com/meet_sounak/" rel="noopener noreferrer" target="_blank">	link</a></ListItemContent>
								  </ListItem>
								  <ListItem>
								    <ListItemContent className="contact-list-item"><i className="fa fa-code" aria-hidden="true"/>	coder_sounak
								    <a href="https://codeforces.com/profile/coder_sounak" rel="noopener noreferrer" target="_blank">	link</a></ListItemContent>
								  </ListItem>
								  <ListItem>
								    <ListItemContent className="contact-list-item"><i className="fa fa-github-square" aria-hidden="true"/>	m-sounak
								    <a href="https://github.com/m-sounak" rel="noopener noreferrer" target="_blank">	link</a></ListItemContent>
								  </ListItem>
								  <ListItem>
								    <ListItemContent className="contact-list-item"><i className="fa fa-linkedin-square" aria-hidden="true"/>	Sounak Majumder
								    <a href="https://www.linkedin.com/in/sounak-majumder-45b183197/" rel="noopener noreferrer" target="_blank">		link</a></ListItemContent>
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