import './profile';
import styles from './Profile.module.scss';
import educationData from '../Data/Education.json';
import experienceData from '../Data/Experience.json';
import linkUrl from '../Data/Link.json'
import skillData from '../Data/Skill.json'
import MediaQuery from 'react-responsive';
import { useState, useEffect } from 'react';
import ScrollSpy from 'react-scrollspy';

const mediaQueryValue = 768;

function useDataFromJSON(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((retrievedData) => setData(retrievedData));
    }, [url]); 
    return data;
}

function Profile(){
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const [skillData, setSkillData] = useState([]);

    // Fetch and set data for education and experience separately
    useDataFromJSON(educationData, setEducationData);
    useDataFromJSON(experienceData, setExperienceData);
    useDataFromJSON(skillData, setSkillData);
    return (
        <>
            <div className={styles.profile}>
                <MediaQuery minWidth={mediaQueryValue}>
                    <div className='container d-flex justify-content-between'>
                        <div className={`${styles.start_25} h-100 top-50 translate-middle position-sticky`} id='spynav'>
                            {info}
                            {scrollspy}
                        </div>
                        <div className='w-50'>
                            {education}
                            {skills}
                            {experience}
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={mediaQueryValue}>
                    <div className='container'>
                        <div className='d-inline-block'>
                            {info}
                        </div>
                        <div className=''>
                            {education}
                            {skills}
                            {experience}
                        </div>
                    </div>
                    
                </MediaQuery>
            </div>
        </>
    );
}

export default Profile;

const scrollspy = (
    <nav className='navbar navbar-collapse'>
        <ul className={`${styles.scrollspy} nav nav-pills flex-column mt-2`}>
            <ScrollSpy items={['education', 'skills', 'experience']} currentClassName={`${styles.active_scrollspy}`}>
            <li className='nav-item'>
                <a className={`nav-link ${styles.scroll_list}`} href='#education'><span>{'> '}</span>Education</a>
            </li>
            <li className='nav-item'>
                <a className={`nav-link ${styles.scroll_list}`} href='#skills'><span>{'> '}</span>Skills</a>
            </li>
            <li className='nav-item'>
                <a className={`nav-link ${styles.scroll_list}`} href='#experience'><span>{'> '}</span>Experience</a>
            </li>
            </ScrollSpy>
        </ul>
    </nav>
);

const info = (
    <div>
        <div>
            <h1 className={`${styles.typewriter}`}>{'>'} Jadepat Chernsonthi</h1>
        </div>
        <MediaQuery maxWidth={mediaQueryValue}>
        <div className=''>
            {linkUrl.map((link, index) => (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a key={index} href={link.url} target='_blank' rel='noopener noreferrer' className={`fa fa-${link.name.toLowerCase()} me-4`} />
            ))}
        </div>
        </MediaQuery>
        <MediaQuery minWidth={mediaQueryValue}>
            <div className='ms-5'>
                {linkUrl.map((link, index) => (
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    <a key={index} href={link.url} target='_blank' rel='noopener noreferrer' className={`fa fa-${link.name.toLowerCase()} me-4`} />
                ))}
            </div>
        </MediaQuery>
    </div>
    
);

const skills = (
    <section className='d-flex-column align-items-end' id='skills'>
        <div className='my-5'>
            <h2 className={`${styles.monospace} ${styles.typewriter}`}><span>{'> '}</span>Skills</h2>
                {skillData.map((item, index) => (
                    <div className='card col m-3' key={index}>
                        <div className='card-body'>
                            <h5 className={`card-title`}>{item.title}</h5>
                            <p className='card-text'>
                                <ul>
                                    {item.description.map((description, descriptionIndex) => (
                                        <li key={descriptionIndex}>{description}</li>
                                    ))}
                                    
                                </ul>
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    </section>
);

const education = (
    <section id='education' className='my-5'>
        <h2 className={`${styles.monospace} ${styles.typewriter}`}><span>{'> '}</span>Education</h2>
        {educationData.map((item, index) => (
            <div className='card col m-3' key={index}>
            <div className='card-body d-flex'>
                <MediaQuery minWidth={mediaQueryValue}>
                <small className='me-3 col-3'>{item.duration}</small>
                </MediaQuery>
                <div className='card-text'>
                <MediaQuery maxWidth={mediaQueryValue}>
                    <small className='me-3'>{item.duration}</small>
                </MediaQuery>
                <div className='col'>
                    <h4>{item.program}</h4>
                    <h5>{item.school}</h5>
                    <p>{item.location}</p>
                </div>
                </div>
            </div>
            </div>
        ))}
    </section>
);

const experience = (
    <section id='experience' className='my-5'>
        <h2 className={`${styles.monospace} ${styles.typewriter}`}><span>{'> '}</span>Experience</h2>
        {experienceData.map((item, index) => (
            <div className='card col m-3' key ={index}>
            <div className='card-body d-flex'>
            <MediaQuery minWidth={mediaQueryValue}>
                <small className='me-3 col-3'>{item.duration}</small>
                </MediaQuery>
                <div className='card-text'>
                    <MediaQuery maxWidth={mediaQueryValue}>
                        <small className='me-3'>{item.duration}</small>
                    </MediaQuery> 
                    <div className='col'>
                        <h4>{item.title}</h4>
                        <h5>{item.company}</h5>
                        <p>{item.location}</p>
                        <p>
                            <ul>
                                {item.task.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ))}
        
    </section>
);