import React from "react";
import "../../App.css";

const Projects = () => {
  return (
    <div className="project">
      <h3>EventsForMe</h3>
      <img
        className="project-img"
        src={require("./eventsforme-createevent-img.png")}
        alt="Events For Me platform"
      />

      <p>Technologies: </p>
      <p>
        Node.js, Express.js, React, MongoDB, GraphQL, CSS, JavaScript,
        TypeScript, Material UI, Styled Components, Figma, Trello, LucidChart
      </p>

      <p>
        A full stack application showcasing local events for musicians and
        event-goers.
      </p>
      <p>
        Link to code repository:{" "}
        <a href="https://github.com/ladystephani/eventsForMe">Github icon</a>
      </p>
    </div>
  );
};
export default Projects;
