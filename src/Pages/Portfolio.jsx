import React, { Component } from "react";
import ProjectCard from "../Components/Card"
import {Container} from "reactstrap"
import projects from "../Projects/projects.js"



class Portfolio extends Component{

    state = {
        projects
    };

    render() {
        return(
            <Container className="text-center" style={{marginBottom: 80}}>

                <h2 style={{marginBottom: 40}}> Projects From Coding Bootcamp  </h2>
                {this.state.projects.map(project =>(
                    <ProjectCard
                        key={project.id}
                        projectname={project.projectName}
                        image={project.image}
                        summary={project.summary}
                        contribution={project.contribution}
                        tech={project.tech}
                        githubLink={project.githubLink}
                        deployedLink={project.deployedLink}
                    />
                ))}
            
            </Container>
        );
    }
}
export default Portfolio;