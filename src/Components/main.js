import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import Projects from './projects';
import Resume from './resume';
import Contacts from './contacts';
import Education from './education';
import Work from './work';


const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/education" component={Education} />
		<Route path="/projects" component={Projects} />
		<Route path="/work" component={Work} />
		<Route path="/resume" component={Resume} />
		<Route path="/contacts" component={Contacts} />
	</Switch>
)

export default Main;