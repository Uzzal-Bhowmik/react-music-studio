import React, { useEffect, useState } from "react";
import "./PracticeDetails.css";
import addToLS from "../../utilities/addToLS";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PracticeDetails = ({learningTime}) => {

  // break times
  const [breakTime, setBreakTime] = useState(0);

  const breakTimes = [10, 20, 30, 40, 50];

  const handleBreak = (time) => {
    setBreakTime(time); // updates break time 

    addToLS(time); // sets break time to local storage
  }

  // updating break time on reload
  useEffect(()=> {
    let breakTime = 0;
    let storedBreakTime = localStorage.getItem("break-time");

    if(storedBreakTime) {
      setBreakTime(storedBreakTime);
    }
    else {
      setBreakTime(breakTime);
    }
  }, [])


  // Toast notification
  const displayToast = () => {
    toast(`Congratulations! You've Completed Your Classes ❤️`);
  }


  return (
    <div className="practice-details">

      {/* Break Time */}
      <div>
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

        
        {/* Learning Time Details */}
        <div className="mt-5">
          <h4 className="fw-bold">Learning Details</h4>

          <div className="total-time d-flex justify-content-between align-items-center px-3 pt-2 pb-1 mt-4">
            <h6 className="fw-bold">Learning Time</h6>
            <h6 className="text-muted">{learningTime} hours</h6>
          </div>

          <div className="total-time d-flex justify-content-between align-items-center px-3 pt-2 pb-1 mt-2">
            <h6 className="fw-bold">Break Time</h6>
            <h6 className="text-muted">{breakTime} minutes</h6>
          </div>
        </div>

        
        {/* Activity Completed Button */}
        <button className="btn btn-primary mt-5 w-100 fw-bold py-2 rounded-3" onClick={displayToast}>Activity Completed</button>
        <ToastContainer></ToastContainer>


    </div>
  );
};

export default PracticeDetails;
