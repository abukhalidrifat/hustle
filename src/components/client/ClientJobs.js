import { useState } from "react";
import RecentAndActiveJobTab from "../ReacentAndActiveJobTab";
import ClientActiveJobs from "./ClientActiveJobs";
import ClientRunningJobs from "./ClientRunningJobs";

function ClientJobs() {
  const [activeTab, setJobTo] = useState("activeJobs");
  const handleActiveJobTab = (job) => {
    setJobTo(job);
  };

  return (
    <div
      style={{ paddingLeft: "26px", paddingRight: "26px", marginTop: "16px" }}
    >
      <RecentAndActiveJobTab
        activeTab={activeTab}
        onTabChange={handleActiveJobTab}
      />
      <div>{activeTab == "activeJobs" && <ClientActiveJobs />}</div>
      <div>{activeTab == "runningJobs" && <ClientRunningJobs />}</div>
    </div>
  );
}

export default ClientJobs;
