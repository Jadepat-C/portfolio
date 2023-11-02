import { useState, useEffect } from 'react';
import styles from './Projects.module.scss'
import projectData from '../Data/Projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

function Projects(){
    const [projectData, setProjectData] = useState([]);
    useDataFromJSON(projectData, setProjectData);
    return (
        <>
        <div className={styles}>
            <div className='container'>
                <div className='d-inline-block'>
                    <h1 className={`${styles.monospace} ${styles.typewriter}`}>Projects</h1>
                </div>
                {projectTable}
            </div>
        </div>
        </>
    );
}

export default Projects

function extractDomain(url) {
    try {
        const hostname = new URL(url).hostname;
        return hostname;
    } catch (error) {
        // Handle invalid URL
        console.error(`Invalid URL: ${url}`);
        return url; // Or you can return a default value or an error message
    }
}

const projectTable = (
    <div className='table-responsive-md'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Title</td>
                    <td>Type</td>
                    <td>Built with</td>
                    <td>Link</td>

                </tr>
            </thead>
            <tbody>
                {projectData.map((item,index) => (
                    <tr key={index}>
                        <td className='ps-2'>{item.year}</td>
                        <td>{item.title}</td>
                        <td>{item.type}</td>
                        <td className='col-md-4'>
                        {item.tag.map((tagItem,tagIndex) => (
                            <div key={tagIndex} className={`${styles.tag} me-2 my-2 btn btn-outline-light`}>
                                {tagItem}
                            </div>
                        ))}
                        </td>
                        <td>
                            <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                {extractDomain(item.link)}
                                <i className={`${styles.fa} fa fa-external-link ms-2`}></i>
                            </a>
                        </td>
                        <td className='pe-2'><i className={`${styles.fa} fa fa-chevron-down`}></i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);