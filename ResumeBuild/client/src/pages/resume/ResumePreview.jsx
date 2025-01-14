import React from "react";
import "./ResumeBuilder.css";
import ResumeTemplate0 from "../../components/Templates/ResumeTemplate0";
import ResumeTemplate1 from "../../components/Templates/ResumeTemplate1";
import ResumeTemplate2 from "../../components/Templates/ResumeTemplate2";
import ResumeTemplate3 from "../../components/Templates/ResumeTemplate3";
import ResumeTemplate4 from "../../components/Templates/ResumeTemplate4";
import ResumeTemplate5 from "../../components/Templates/ResumeTemplate5";
import ResumeTemplate6 from "../../components/Templates/ResumeTemplate6";

const ResumePreview = (props) => {
  const {
    query,
    titleColor,
    addEducation,
    addWorkExperience,
    addProjectData,
    addSkill,
    selectedTemplate,
    selectedImage,
  } = props;

  function getStringAfterDotCom(url) {
    // Check if the URL contains ".com"
    const indexOfDotCom = url.indexOf(".com");

    if (indexOfDotCom !== -1) {
      // Return the substring that comes after ".com"
      return url.substring(indexOfDotCom + 4);
    } else {
      // If ".com" is not found, return an empty string
      return "Put the full link like https://abc.com/xyz";
    }
  }

  let templateComponent;
  switch (selectedTemplate) {
    case "Template1":
      templateComponent = (
        <ResumeTemplate0
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
          getStringAfterDotCom={getStringAfterDotCom}
        />
      );
      break;
    case "Template2":
      templateComponent = (
        <ResumeTemplate1
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
          getStringAfterDotCom={getStringAfterDotCom}
        />
      );
      break;

    case "Template3":
      templateComponent = (
        <ResumeTemplate2
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
          getStringAfterDotCom={getStringAfterDotCom}
        />
      );
      break;

    case "Template4":
      templateComponent = (
        <ResumeTemplate3
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
          getStringAfterDotCom={getStringAfterDotCom}
          selectedImage={selectedImage}
        />
      );
      break;

    case "Template5":
      templateComponent = (
        <ResumeTemplate4
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
          getStringAfterDotCom={getStringAfterDotCom}
          selectedImage={selectedImage}
        />
      );
      break;

    case "Template6":
      templateComponent = (
        <ResumeTemplate5
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
          getStringAfterDotCom={getStringAfterDotCom}
          selectedImage={selectedImage}
        />
      );
      break;

    case "Template7":
      templateComponent = (
        <ResumeTemplate6
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
          getStringAfterDotCom={getStringAfterDotCom}
          selectedImage={selectedImage}
        />
      );
      break;

    default:
      templateComponent = (
        <ResumeTemplate0
          query={query}
          titleColor={titleColor}
          addEducation={addEducation}
          addWorkExperience={addWorkExperience}
          addProjectData={addProjectData}
          addSkill={addSkill}
        />
      );
  }

  return <>{templateComponent}</>;
};

export default ResumePreview;
