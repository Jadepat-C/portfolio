import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import styles from './Navigation.module.scss'
import {ReactComponent as Logo} from '../Drawable/my-logo.svg'

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

const navbar =  <Navbar collapseOnSelect>
  <div className='container-fluid mx-5'>
  <Navbar.Brand href="/">
    <Logo className={styles.logo}/>
    </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse id="basic-navbar-nav">
      
  </Navbar.Collapse>
  <Nav className={`${styles.nav}`}>
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href='/projects'>Projects</Nav.Link>
    </Nav>  
  </div>
  

</Navbar>
