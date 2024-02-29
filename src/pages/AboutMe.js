import React, { useState, useEffect, useMemo } from "react";
import Profile from "../logoimage/Rishabh.jpg";
import "../cssfiles/AboutMe.css";
const AboutMe = () => {
  const [occupation, setOccupation] = useState("");

  const occupations = useMemo(() => ["Web Developer", "Data Scientist"], []);

  const delay = 1330; // Adjust the delay as needed

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setOccupation(occupations[currentIndex]);
      currentIndex = (currentIndex + 1) % occupations.length;
    }, delay);

    return () => clearInterval(intervalId);
  }, [occupations, delay]);

  return (
    <div className="main-div">
      <div className="about-owner">
        <div className="owner-title">
          <p className="owner-name">Rishabh Patel</p>
          <p className="owner-detail">I am a {occupation}</p>
        </div>
        <img className="owner-image" src={Profile} alt="Profile Images" />
      </div>
      <div className="owner-data">
      Hello! Welcome to my digital space, I'm Rishabh Patel, a versatile Fullstack Developer and Data Scientist. Embracing the journey of learning, I bring a mix of creativity to front-end development and growing expertise in back-end tasks. Venturing into the world of data science, I explore insights through analytics and machine learning. Come along on this learning adventure at the crossroads of code and data, where ideas spark and possibilities unfold.
      </div>
      <div className="languages">
        <h2>I know how to code !</h2>
      </div>
    </div>
  );
};

export default AboutMe;
