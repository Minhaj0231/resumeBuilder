import React from "react";
import "../../resources/templates.css";
function Template3() {
  const user = JSON.parse(localStorage.getItem("resume-user"));
  return (
    <div  style={{backgroundColor:"blue", fontWeight: "bold" }  }  className="template1-parent">
      <div  style={{textAlign:"center"}} className="top d-flex flex-column">
        <h1 >
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p className="whiteText">{user.email}</p>
          <p className="whiteText">{user.address}</p>
          <p className="whiteText">{user.mobileNumber}</p>
        </div>
      </div>

      <div className="divider mt-3"></div>
      <div className="divider mt-1"></div>
      <div className="objective mt-3">
        <h3 style={{backgroundColor:'olive' , padding:10, textAlign:"center"}}>Objective</h3>
        <hr />
        <p className="whiteText" >{user.carrierObjective}</p>
      </div>
      <div className="divider mt-3"></div>

      <div className="education mt-3">
        <h3 style={{backgroundColor:'green' , padding:10, textAlign:"center"}}>Education</h3>
        <hr />
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6  className="whiteText" style={{ width: 120 }}>
                <b>{education.range} : </b>
              </h6>
              <p className="whiteText" >
                <b>{education.qualification}</b> with{" "}
                <b>{education.percentage}%</b> in {education.institution}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-3">
        <h3 style={{backgroundColor:'gray' , padding:10, textAlign:"center"}}>Experience</h3>
        <hr />
        {user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6 className="whiteText" style={{ width: 120 }}>
                <b>{exp.range} : </b>
              </h6>
              <p className="whiteText" >
                <b>{exp.company}</b> in <b>{exp.place}</b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3 style={{backgroundColor:'red' , padding:10, textAlign:"center"}}>Projects</h3>
        <hr />
        {user.projects.map((project) => {
          return (
            <div className="d-flex flex-column">
              <h6 className="whiteText" >
                <b  >
                  {project.title} [{project.range}]{" "}
                </b>
              </h6>
              <p className="whiteText" >{project.rating}</p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
        <h3 style={{backgroundColor:'purple' , padding:10, textAlign:"center"}}>Skills</h3>
        <hr />
        {user.skills.map((skill) => {
          return <p className="whiteText" >{skill.technology}</p>;
        })}
      </div>
    </div>
  );
}

export default Template3;