import styles from './Projects.module.scss';
import projectData from '../Data/Projects.json';

// Outlined "pill" for each technology a project was built with.
const tagClass = `${styles.tag} mr-2 my-2 inline-block select-none rounded-md border border-[#f8f9fa] px-3 py-1.5 text-center align-middle text-[#f8f9fa] transition-colors duration-150 hover:bg-[#f8f9fa]`;

function Projects() {
    return (
        <div className='page-container'>
            <div className='inline-block'>
                <h1 className={`${styles.monospace} ${styles.typewriter}`}>Projects</h1>
            </div>
            {/* md (768px) and up get the table, phones get cards. */}
            <div className='hidden md:block'>
                {projectTable}
            </div>
            <div className='md:hidden'>
                {projectMobile}
            </div>
        </div>
    );
}

export default Projects;


function extractDomain(url) {
    try {
        return new URL(url).hostname;
    } catch {
        return null;
    }
}

const cellClass = 'border-b border-white/15 p-2';

const projectTable = (
    <table className='mb-4 w-full border-collapse'>
        <thead>
            <tr>
                <td className={cellClass}>Year</td>
                <td className={cellClass}>Title</td>
                <td className={cellClass}>Type</td>
                <td className={cellClass}>Built with</td>
                <td className={cellClass}>Link</td>
            </tr>
        </thead>
        <tbody>
            {projectData.map((item, index) => (
                <tr key={index}>
                    <td className={`${cellClass} pl-2!`}>{item.year}</td>
                    <td className={cellClass}>{item.title}</td>
                    <td className={cellClass}>{item.type}</td>
                    <td className={`${cellClass} md:w-1/3`}>
                        {item.tag.map((tagItem, tagIndex) => (
                            <div key={tagIndex} className={tagClass}>
                                {tagItem}
                            </div>
                        ))}
                    </td>
                    <td className={cellClass}>
                        <a href={item.link} target='_blank' rel='noopener noreferrer'>
                            {extractDomain(item.link)}
                            <i className={`${styles.fa} fa fa-external-link ml-2`}></i>
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const projectMobile = (
    <div>
        {projectData.map((item, index) => (
            <div className='m-2 rounded-md border border-[#d2d2d2]' key={index}>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='p-4'>
                        <div className='flex justify-between'>
                            <h5>{item.title}</h5>
                            <i className={`${styles.fa} fa fa-external-link ml-2`}></i>
                        </div>
                        <p>{item.type}, {item.year}</p>
                        {item.tag.map((tagItem, tagIndex) => (
                            <div key={tagIndex} className={tagClass}>
                                {tagItem}
                            </div>
                        ))}
                    </div>
                </a>
            </div>
        ))}
    </div>
);
