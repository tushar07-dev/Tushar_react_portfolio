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
        {/* Hi!  . Since then, I've built numerous web applications, refining my skills in communication, leadership, and teamwork. Now, I'm eager to bring my expertise to a new role as a full-stack web developer. */}

        Hello! Tushar Shelke here, An experienced MERN Stack Developer with 1.5 years of expertise in building scalable web
applications. Proficient in MongoDB, Express.js, React.js, and Node.js, committed to
delivering high-quality solutions through collaborative teamwork.
          <span style={{ color: `#00a0a0` }}>
            {" "}
            Let's connect and discuss how I can contribute to your team!.
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
