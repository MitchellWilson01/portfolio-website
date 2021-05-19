import React from 'react';
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project">
                <h2>Reddit Gallery</h2>
                <p>Reddit Gallery is an application that provides Redditors 
                with the ability to browse their favorite image-focused 
                subreddits in a gallery-style format. It works by retreiving 
                data from Reddit's API and is complete with custom sort options 
                as well as the choice between a light and dark theme.</p>
                <div className="image"></div>
            </div>

            <div className="project">
                <h2>Atom Notebook</h2>
                <p>This is my most recent project that I am still 
                building, however its core functionality is already there. It 
                is a mobile-first productivity application that allows 
                users to create their own accounts and manage their schedule. 
                Feel free to create your own account or to use "guest@email.com" 
                and "123456" to login to the guest account.</p>
                <div className="image-2"></div>
            </div>

            <div className="project">
                <h2>Aspen Inudstrial Machines</h2>
                <p>I was contracted by Aspen Industrial Machines LLC to recreate 
                their outdated website from scratch. It contains many different 
                pages with information about the company and of course is 
                completely responsive.</p>
                <div className="image"></div>
            </div>
        </div>
    );
}

export default Projects;