import css from "../assets/styles/RecentAndActiveJobTab.module.css";

function RecentAndActiveJobTab({ onTabChange, activeTab, tab1, tab2 }) {
  const handleActiveTab = (job) => {
    onTabChange(job);
  };
  return (
    <div className={css.jobHeading}>
      <p
        className={css.activeJob}
        onClick={() => handleActiveTab("activeJobs")}
      >
        {tab1 ? tab1 : "Active Jobs"}
        <div
          className={activeTab == "activeJobs" ? css.jobActiveTabActive : ""}
        ></div>
      </p>
      <p
        className={css.runningJob}
        onClick={() => handleActiveTab("runningJobs")}
      >
        {tab2 ? tab2 : "Recent Jobs"}
        <div
          className={activeTab == "runningJobs" ? css.jobRecentTabActive : ""}
        ></div>
      </p>
    </div>
  );
}

export default RecentAndActiveJobTab;
