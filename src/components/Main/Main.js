import React, { useState } from "react";
import "./Main.css";
import Classes from "../Classes/Classes";
import UserDetails from "../UserDetails/UserDetails";
import PracticeDetails from "../PracticeDetails/PracticeDetails";

const Main = () => {

  // Learning time update
  const [learningTime, setLearningTime] = useState(0);

  const handleLearningTime = (time) => {
    const newTime = learningTime + time;
    setLearningTime(newTime);
  }


  return (
    <div className="row g-0 p-3 my-5 ">

      {/* Classes Details */}
      <div className="col-12 col-md-9">
        <Classes 
          handleLearningTime={handleLearningTime}
        ></Classes>
      </div>

      {/* User details and Practice Details */}
      <div className="col-12 col-md-3 mt-5 mt-md-0 animate__animated animate__fadeInRight animate__slow">
        <UserDetails></UserDetails>
        <PracticeDetails 
          learningTime={learningTime}
        
        ></PracticeDetails>
      </div>
    </div>
  );
};

export default Main;
