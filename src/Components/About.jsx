/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Image2.jpg";

const imageAltText = "Multicolor abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a front-end web development student enrolled in the Software Engineering program at NUST. I find joy in designing distinctive and user-friendly interfaces, constantly exploring creative approaches to deliver visually appealing and intuitive user experiences.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML5 and CSS3",
  "JavaScript and ES6",
  "Responsive Design",
  "Front-End Frameworks",
  "Version Control/Git",
  "Web Performance Optimization",
  "Word Press",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a web developer, I am driven by a passion for crafting seamless digital experiences that not only address user needs but also push the boundaries of creative problem-solving. My aspirations lie in harnessing my technical skills to create innovative, user-centric solutions that enhance accessibility and usability across diverse online platforms.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
