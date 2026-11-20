import styles from './Profile.module.scss';
import educationData from '../Data/Education.json';
import experienceData from '../Data/Experience.json';
import linkUrl from '../Data/Link.json';
import skillData from '../Data/Skill.json';
import ScrollSpyModule from 'react-scrollspy';

// react-scrollspy is an old CommonJS package. Vite's production build hands us
// the whole module object, so unwrap `.default` when it is there.
const ScrollSpy = ScrollSpyModule.default ?? ScrollSpyModule;

// Shared look for every card on this page: thin light border, rounded corners.
const cardClass = 'm-4 rounded-md border border-[#d2d2d2]';

function Profile() {
    return (
        <div className={styles.profile}>
            {/* Phones: one column. md (768px) and up: sticky sidebar on the left, content on the right. */}
            <div className='page-container md:flex md:justify-between'>
                <div
                    id='spynav'
                    className={`${styles.start_25} inline-block md:sticky md:top-1/2 md:block md:h-full md:-translate-x-1/2 md:-translate-y-1/2`}
                >
                    {info}
                    {scrollspy}
                </div>
                <div className='md:w-1/2'>
                    {education}
                    {skills}
                    {experience}
                </div>
            </div>
        </div>
    );
}

export default Profile;

// "Jump to section" links; only shown on md screens and up.
const scrollspy = (
    <nav className='hidden py-2 md:block'>
        <ScrollSpy
            items={['education', 'skills', 'experience']}
            currentClassName={styles.active_scrollspy}
            className={`${styles.scrollspy} mt-2 flex flex-col pl-8`}
        >
            <li>
                <a className={`${styles.scroll_list} block px-4 py-2 text-[1.2rem]!`} href='#education'><span>{'> '}</span>Education</a>
            </li>
            <li>
                <a className={`${styles.scroll_list} block px-4 py-2 text-[1.2rem]!`} href='#skills'><span>{'> '}</span>Skills</a>
            </li>
            <li>
                <a className={`${styles.scroll_list} block px-4 py-2 text-[1.2rem]!`} href='#experience'><span>{'> '}</span>Experience</a>
            </li>
        </ScrollSpy>
    </nav>
);

const info = (
    <div>
        <div>
            <h1 className={styles.typewriter}>{'>'} Jadepat Chernsonthi</h1>
        </div>
        <div className='md:ml-12'>
            {linkUrl.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    aria-label={link.name}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`fa fa-${link.name.toLowerCase()} mr-6`}
                />
            ))}
        </div>
    </div>
);

const skills = (
    <section id='skills'>
        <div className='my-12'>
            <h2 className={`${styles.monospace} ${styles.typewriter}`}><span>{'> '}</span>Skills</h2>
            {skillData.map((item, index) => (
                <div className={cardClass} key={index}>
                    <div className='p-4'>
                        <h5>{item.title}</h5>
                        <ul className='mb-4 list-disc pl-8'>
                            {item.description.map((description, descriptionIndex) => (
                                <li key={descriptionIndex}>{description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const education = (
    <section id='education' className='my-12'>
        <h2 className={`${styles.monospace} ${styles.typewriter}`}><span>{'> '}</span>Education</h2>
        {educationData.map((item, index) => (
            <div className={cardClass} key={index}>
                <div className='flex flex-col p-4 md:flex-row'>
                    <small className='mr-4 leading-6 md:w-1/4 md:flex-none md:leading-normal'>{item.duration}</small>
                    <div>
                        <h4>{item.program}</h4>
                        <h5>{item.school}</h5>
                        <p>{item.location}</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
);

const experience = (
    <section id='experience' className='my-12'>
        <h2 className={`${styles.monospace} ${styles.typewriter}`}><span>{'> '}</span>Experience</h2>
        {experienceData.map((item, index) => (
            <div className={cardClass} key={index}>
                <div className='flex flex-col p-4 md:flex-row'>
                    <small className='mr-4 leading-6 md:w-1/4 md:flex-none md:leading-normal'>{item.duration}</small>
                    <div>
                        <h4>{item.title}</h4>
                        <h5>{item.company}</h5>
                        <p>{item.location}</p>
                        <ul className='mb-4 list-disc pl-8'>
                            {item.task.map((task, taskIndex) => (
                                <li key={taskIndex}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))}
    </section>
);
