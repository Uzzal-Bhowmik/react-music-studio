import React from "react";
import "./UserDetails.css";
import profile from "../../images/profile1.png";

const UserDetails = () => {
  return (
      <div className="user-details">

        <div className="user d-flex align-items-center">
          <img src={profile} alt="profile" className=""/>
          <div className="ps-2 user-name">
            <h5 className="fw-bold mb-0">Uzzal Bhowmik</h5>
            <p className="text-muted">Music Enthusiast</p>
          </div>
        </div>


        <div className="user-level text-center d-flex justify-content-between align-items-center m-2 px-3  rounded-3">
          <div>
            <h5 className="mb-0 fw-bold">Beginner</h5>
            <p className="text-muted fw-bold">Level</p>
          </div>
          <div>
            <h5 className="mb-0 fw-bold">Guitar</h5>
            <p className="text-muted fw-bold">Instrument</p>
          </div>
          <div>
            <h5 className="mb-0 fw-bold">Online</h5>
            <p className="text-muted fw-bold">Preferred</p>
          </div>
        </div>
      </div>
  );
};

export default UserDetails;
