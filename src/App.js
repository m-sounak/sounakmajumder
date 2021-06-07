import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import { Link, NavLink } from 'react-router-dom';



function App() {
    
    return (
      <div className="demo-big-content">
        <Layout >
            <Header className="header-color" style={{fontFamily: 'Baloo Tammudu 2'}} title="Sounak Majumder" scroll>
                <Navigation>
                    <NavLink activeClassName="active" className="link" to="/resume">
                        Resume
                    </NavLink>
                    <NavLink activeClassName="active" className="link" to="/education">
                        Education
                    </NavLink>
                    <NavLink activeClassName="active" className="link" to="/projects">
                        Projects
                    </NavLink>
                    <NavLink activeClassName="active" className="link" to="/work">
                        Experience
                    </NavLink>
                    <NavLink activeClassName="active" className="link" to="/contacts">
                        Contact Me
                    </NavLink>
                </Navigation>
            </Header>
            <Drawer title="Navigate" className="drawer">
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/work">Experience</Link>
                    <Link to="/contacts">Contact Me</Link>
                    
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    );
    
  
}

export default App;
