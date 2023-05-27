import React from "react";
import "./PracticeDetails.css";

const PracticeDetails = () => {

  // break times
  const breakTimes = [10, 20, 30, 40, 50];

  const handleBreak = (time) => {console.log(time)}


  return (
    <div className="practice-details">

      {/* Break Time */}
      <h4 className="fw-bold">Add a Break</h4>
      <div className="text-center breaks">
        {
          breakTimes.map(breakTime => {
            return (
              <button key={breakTime} className="break-btn" onClick={()=> handleBreak(breakTime)}>{breakTime}</button>
            
            );
          })
        }
      </div>
    </div>
  );
};

export default PracticeDetails;
