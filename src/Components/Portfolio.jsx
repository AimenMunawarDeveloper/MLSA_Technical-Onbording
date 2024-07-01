/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/workdesk.jpg";

const imageAltText = "laptop  and tablet with glasses and a cup of coffee";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Multi-Tenant File Management System🎉",
    description:
      "A multi-tenant file management system similar to Google Drive, with secure authentication, role-based access, React front-end, Node.js/Express back-end, MongoDB storage, AWS S3 integration, and API documentation using Postman.",
    url: "https://github.com/AimenMunawarDeveloper/File",
  },
  {
    title: "Totoro",
    description: "A simple program to help you stay focused and productive by sequentially scheduling work and rest times. Traditionally, there are four straight 25-minute focus periods, five-minute breaks, and then a lengthier 30-minute rest. This program accurately applies the Pomodoro technique and indicates when to work and when to take a brief break.",
    url: "https://github.com/AimenMunawarDeveloper/Totoro",
  },
  {
    title: "Green Thread Front-End",
    description: "A scalable MERN stack-based sustainable fashion marketplace, with features like product management, user authentication, shopping cart, and inventory tracking, while leading a collaborative team.",
    url: "https://green-thread.netlify.app/",
  },
  {
    title: "Green Thread Admin Panel",
    description: "Provides functionalities such as sales and customer activity metrics, product management including inventory and categories, order handling with status updates and returns management, and user management for accounts and support requests",
    url: "https://github.com/AimenMunawarDeveloper/e-commerce-app-admin-panel",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
