import { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Home.module.scss';

function Home() {
  const navigate = useNavigate();

  // Pressing Enter anywhere on the home page goes to the profile page.
  const handleEnterPress = useCallback((event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      navigate('/profile');
    }
  }, [navigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleEnterPress);
    return () => {
      document.removeEventListener('keydown', handleEnterPress);
    };
  }, [handleEnterPress]);

  return (
    <div className={`${styles.typewriter} page-container mt-12 w-3/4!`}>
      {welcome}
      {nextBtn}
    </div>
  );
}

export default Home;

// Phones get smaller headings; md (768px) and up get the big ones.
const welcome = (
  <div>
    <div className="inline-block">
      <h1 className={`${styles.typewriter} display-4 md:display-1`}>{'>'}Hello World!</h1>
      <h2 className={`${styles.typewriter} text-base font-medium md:display-5`}>
        {'>'}I'm <span className={styles.name}>Jadepat Chernsonthi</span>
      </h2>
    </div>
  </div>
);

const nextBtn = (
  <div className="flex justify-end">
    <Link to="/profile" className="mt-12 md:mt-0">
      <p className={`${styles.typewriter} display-6`}>Enter &rarr;</p>
    </Link>
  </div>
);
