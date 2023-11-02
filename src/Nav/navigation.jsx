import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import './navstyle.scss';
import {ReactComponent as Logo} from '../Drawable/my-logo.svg';

function Navigation(){
    return (
        <>
            <div className={`${styles} sticky-top h-100`}>
              {navbar}
            </div>
          
        </>
    );
}

export default Navigation;

const routes = [
  { path: '/', text: 'Home' },
  { path: '/profile', text: 'Profile' },
  { path: '/projects', text: 'Projects' },
];
const navbar = (
  <Navbar collapseOnSelect expand="md">
    <div className="container-fluid">
      <Navbar.Brand as={NavLink} to="/">
        <Logo className={styles.logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' className={styles.toggle}>
        <span className={`${styles.hamburger} fa fa-bars`}></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className='me-auto'></div>
        <Nav className={`${styles.nav}`}>
          {routes.map((route, index) => (
              <Nav.Link key={index} as={NavLink} to={route.path} className={`mx-2`}>
              <span> {'> '}</span>
              {route.text}
            </Nav.Link>
          ))}
        </Nav>        
      </Navbar.Collapse>
    </div>
  </Navbar>
);

