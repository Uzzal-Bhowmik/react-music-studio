import React, { useEffect, useState } from "react";
import "./Classes.css";
import Class from "../Class/Class";

const Classes = ({handleLearningTime}) => {

  // Loading classes data
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("/classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);


  return (
    <div className="classes animate__animated animate__fadeInLeft animate__slow">
      <p>Our Classes</p>
      <h1>Most Popular Classes</h1>

      <div className="class-container row gy-5 ms-2 ms-md-0 me-md-3 my-2">
        {
          classes.map(classObj => <Class
            key={classObj.id}
            classObj={classObj}
            handleLearningTime={handleLearningTime}
          ></Class>)
        }
      </div>
    </div>
  );
};

export default Classes;
