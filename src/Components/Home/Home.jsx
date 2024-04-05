import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/Tushar_profile_photo.jpg"
import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import Experiences from "../Experiences/Experiences";

// import {Calendar} from "../gitHub/Calendar";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

const Home = ({ scrollRef }) => {
  const [projectArray, setProjectArray] = useState(projects.slice(0, 3));
  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  const handleShowMoreBtn = () => {
    if (projects.length === projectArray.length) {
      setProjectArray(projects.slice(0, 4));
      window.scrollTo(0, location);
    } else {
      setProjectArray(projects);
      setLocation(offset);
    }
  };

  return (
    <div ref={scrollRef}>
      <SideIcons />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
            transform: `translateX(-${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
        >
          <h1>
            <span>Hey👋, I'm </span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Tushar Shelke.
            </div>
          </h1>
          <h1>Full Stack Web Developer.</h1>
          <div className={styles.btn}>
            <a
              href="/resume/Tushar_fw14_274.pdf"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text={
                  <span className={styles.resumeBtn}>
                    <span>Resume</span> <i className="fas fa-file-download"></i>
                  </span>
                }
                handleButton={handleButton}
              />
            </a>
          </div>
        </div>

        <div
          style={{
            transform: `translateX(${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
           
          }}
          className={styles.profileImage}
        >
          <img
            src={img1}
            alt="Profile pic"
          />
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experiences}
      >
        <About />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <TechStacks />
      </div>

      {/* <div id="gitHubCalendar" className={styles.projects}> 
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Days I Code
        </h1>
        <div className={styles.borderBottom} />
        <Calendar/>
      </div> */}

      <div id="experiences" className={styles.experiences}>
        <Experiences />
      </div>
      {/* project section from here => */}
      <div id="projects" className={styles.projects}> 
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Few Things I've Build
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <Button
          text={
            projects.length !== projectArray.length ? "Show More" : "Show Less"
          }
          handleButton={handleShowMoreBtn}
        />
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
