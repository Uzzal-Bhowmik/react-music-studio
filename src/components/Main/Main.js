import React from "react";
import "./Main.css";
import Classes from "../Classes/Classes";
import UserDetails from "../UserDetails/UserDetails";
import PracticeDetails from "../PracticeDetails/PracticeDetails";

const Main = () => {
  return (
    <div className="row g-0 p-3 my-5 ">
      {/* Classes Details */}
      <div className="col-12 col-md-9">
        <Classes></Classes>
      </div>

      {/* User details and Practice Details */}
      <div className="col-12 col-md-3">
        <UserDetails></UserDetails>
        <PracticeDetails></PracticeDetails>
      </div>
    </div>
  );
};

export default Main;
