import css from "../assets/styles/RecentAndActiveJobTab.module.css";

function RecentAndActiveJobTab({onTabChange,activeTab}) {
  const handleActiveTab = (job) => {
    onTabChange(job)
  };
  return (
    <div className={css.jobHeading}>
      <p
        className={`${css.activeJob} ${
          activeTab == "activeJobs" ? css.jobActiveTabActive : ""
        }`}
        onClick={() => handleActiveTab("activeJobs")}
      >
        Active Jobs (3)
      </p>
      <p
        className={`${css.runningJob} ${
          activeTab == "runningJobs" ? css.jobRecentTabActive : ""
        }`}
        onClick={() => handleActiveTab("runningJobs")}
      >
        Running Jobs
      </p>
    </div>
  );
}

export default RecentAndActiveJobTab;
