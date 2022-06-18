import { useState } from "react";
import css from "../../assets/styles/freelancer/FreelancerJob.module.css";
import FreelancerActiveJob from "../../components/freelancer/FreelancerActiveJob";
import FreelancerInterviewJob from "../../components/freelancer/FreelancerInterviewJob";
import FreelancerSubmittedJob from "../../components/freelancer/FreelancerSubmittedJob";


function Freelancerjob() {
  const [activeTab, setJobTo] = useState("activeJobs");
  const handleActiveTab = (job) => {
    setJobTo(job);
  };
  return (
    <div>
      <p className={css.yourJob}>Your Job</p>
      <div className={css.jobHeading}>
        <p
          className={`${css.activeJob} ${
            activeTab == "activeJobs" ? css.jobActiveTabActive : ""
          }`}
          onClick={() => handleActiveTab("activeJobs")}
        >
          Active <br /> Jobs
        </p>
        <p
          className={`${css.interviewJob} ${
            activeTab == "interviewing" ? css.jobInterviewTabActive : ""
          }`}
          onClick={() => handleActiveTab("interviewing")}
        >
          Interviewing
        </p>
        <p
          className={`${css.submittedJob} ${
            activeTab == "submitted" ? css.jobRecentTabActive : ""
          }`}
          onClick={() => handleActiveTab("submitted")}
        >
          Submitted
        </p>
      </div>
      <div
        style={{ paddingLeft: "26px", paddingRight: "26px", marginTop: "16px" }}
      >
        <div>{activeTab == "activeJobs" && <FreelancerActiveJob />}</div>
        <div>{activeTab == "interviewing" && <FreelancerInterviewJob />}</div>
        <div>{activeTab == "submitted" && <FreelancerSubmittedJob />}</div>
      </div>
    </div>
  );
}

export default Freelancerjob;
