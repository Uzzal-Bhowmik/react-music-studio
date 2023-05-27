import React from "react";
import "./Class.css";

const Class = ({classObj, handleLearningTime}) => {

  const {img, name, desc, level, time} = classObj;

  return (
    <div className="col-12 col-md-4">
      <div className="card">

        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text my-3">{desc}</p>
          
          <div className="requirements d-flex justify-content-between align-items-center px-2 mt-2">
            <div>
              <i className="bi bi-clock-fill me-2"></i>
              <span>{time} hours</span>
            </div>
            <div>
              <i className="bi bi-bar-chart-fill me-2"></i>
              <span>{level}</span>
            </div>
          </div>

          <button className="btn btn-primary w-100 fw-bold addBtn" onClick={() => handleLearningTime(parseInt(time))}>Add To List</button>
        </div>

      </div>
    </div>
  );
};

export default Class;
