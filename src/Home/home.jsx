import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import styles from './Home.module.scss';

const mediaQueryValue = 768;

function Home(){
    let navigate = useNavigate();
    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
          // Handle the Enter key press here
          navigateToProfile(); // Replace with your desired action
        }
      };
    
      const navigateToProfile = () => {
        // Replace with the code to navigate to the profile page
        // For example:
        // history.push('/profile');
        navigate('/profile');
      };
    
      // Add an event listener to the document
      React.useEffect(() => {
        document.addEventListener('keydown', handleEnterPress);
        
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleEnterPress);
        };
      }, []);
    return (
        <>
          <div className={`${styles}`}>
          <div className={`${styles.typewriter} container-fluid w-75 mt-5`}>
              {welcome}
              {nextBtn}
            </div>
          </div>
            
        </>
    );
}

export default Home;

const welcome = (
    <div>
        <div className='d-inline-block'>
          <MediaQuery minWidth={mediaQueryValue}>
            <h1 className={`${styles.typewriter} display-1`}>{'>'}Hello World!</h1>
            <h2 className={`${styles.typewriter} display-5`}>{'>'}I'm <span className={styles.name}>Jadepat Chernsonthi</span></h2>
          </MediaQuery>
          <MediaQuery maxWidth={mediaQueryValue}>
            <h1 className={`${styles.typewriter} display-3`}>{'>'}Hello World!</h1>
            <h5 className={`${styles.typewriter}`}>{'>'}I'm <span className={styles.name}>Jadepat Chernsonthi</span></h5>
          </MediaQuery>
        </div>
    </div>
);

const nextBtn = (
  <div>
    <MediaQuery minWidth={mediaQueryValue}>
      <div className='d-flex justify-content-end'>
          <Link to='/profile'>
          <p className={`${styles.typewriter} display-6`}>Enter &rarr;</p>
          </Link>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={mediaQueryValue}>
      <div className='d-flex justify-content-end'>
          <Link to='/profile'>
          <p className={`${styles.typewriter} display-3 mt-5`}>
          Enter &rarr;
          </p>
          </Link>
      </div>
    </MediaQuery>
  </div>
  
);

