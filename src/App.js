import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

function App() {
  
    return (
      <div className="demo-big-content">
        <Layout >
            <Header className="header-color" style={{fontFamily: "Oxygen"}} title="Sounak Majumder" scroll>
                <Navigation>
                    <Link to="/resume" style={{color: '#001c82', "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>Resume</Link>
                    <Link to="/education" style={{color: '#001c82', "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>Education</Link>
                    <Link to="/projects" style={{color: '#001c82', "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>Projects</Link>
                    <Link to="/work" style={{color: '#001c82', "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>Experience</Link>
                    <Link to="/contacts" style={{color: '#001c82', "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Options">
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
