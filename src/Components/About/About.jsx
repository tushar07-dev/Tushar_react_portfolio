import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";


const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  
 
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/RahulGoyal03/Portfolio/blob/main/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
        Hello! My name is Tushar Shelke,I enjoy creating things that live on the internet. My interest in web development started when I joined Masai School to learn full-stack web-Development — teach me a lot about HTML & CSS! <br />
          <br /> Fast Today, I developed a number of web applications and significant projects. learned a lot about communication, leadership, and teamwork. I've been putting in months of arduous training, and now I'm seeking for a job
          <span style={{ color: `#00a0a0` }}>
            {" "}
            as a full-stack web developer.
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
