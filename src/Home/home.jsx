import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import styles from './Home.module.scss';

const mediaQueryValue = 768;

function Home(){
    let navigate = useNavigate();
    
    const handleEnterPress = useCallback((event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Handle the Enter key press here
        navigate('/profile'); // Replace with your desired action
      }
    }, [navigate]);
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        handleEnterPress(event);
      };
  
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleEnterPress]);
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
  <div className='d-flex justify-content-end'>
    <MediaQuery minWidth={mediaQueryValue}>
      <Link to='/profile'>
        <p className={`${styles.typewriter} display-6`}>Enter &rarr;</p>
      </Link>
    </MediaQuery>
    <MediaQuery maxWidth={mediaQueryValue}>
      <Link to='/profile' className='mt-5'>
        <p className={`${styles.typewriter} display-6`}>Enter &rarr;</p>
      </Link>
    </MediaQuery>
          
      </div>
);

