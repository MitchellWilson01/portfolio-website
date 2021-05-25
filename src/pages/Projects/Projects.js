import React from 'react';
import reddit from '../../images/Reddit-Gallery.JPG';
import atom1 from '../../images/Atom-Notebook-1.jpg';
import atom2 from '../../images/Atom-Notebook-2.jpg';
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project">
                <h2>Reddit Gallery &nbsp;
                    <a className="link" href="https://redditgallery.netlify.app" target="_blank" rel="noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                </h2>
                <p>Reddit Gallery is an application that provides Redditors 
                with the ability to browse their favorite image-focused 
                subreddits in a gallery-style format. It works by retreiving 
                data from Reddit's API and is complete with custom sort options 
                as well as the choice between a light and dark theme.</p>
                <img src={reddit} alt="reddit gallery" className="reddit" />
            </div>

            <div className="project">
                <h2>
                    Atom Notebook &nbsp;
                    <a className="link" href="https://atomnotebook.netlify.app" target="_blank" rel="noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                </h2>
                <p>This is my most recent project that I am still 
                building, however its core functionality is already there. It 
                is a mobile-first productivity application that allows 
                users to create their own accounts and manage their schedule. 
                Feel free to create your own account or to use "guest@email.com" 
                and "123456" to login to the guest account.</p>

                <div className="atom-images">
                    <img src={atom1} alt="atom notebook 1" className="atom" />
                    <img src={atom2} alt="atom notebook 2" className="atom" />
                </div>
            </div>
        </div>
    );
}

export default Projects;