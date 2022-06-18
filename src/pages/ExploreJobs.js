import { useState } from "react";
import css from "../assets/styles/ExploreJobs.module.css";
import Card from "../components/Card";
import RecentAndActiveJobTab from "../components/ReacentAndActiveJobTab";
import SearchBar from "../components/SearchBar";
import SignUpToApply from "../components/SignUpToApply";
function ExploreJobs() {
  const [activeTab, setJobTo] = useState("activeJobs");
  const handleActiveJobTab = (job) => {
    setJobTo(job);
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div style={{ width: "60%", margin: "auto" }}>
        <p className={css.headTitle}>
          Became a&nbsp;<span>Hustler&nbsp;</span>and work from your home or
          physically
        </p>
        <p className={css.headSubTitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
          repudiandae voluptate. Eos quo tenetur ex dolorem dignissimos
          perspiciatis eligendi non eveniet omnis porro error, fugit natus
          possimus asperiores nesciunt veritatis.
        </p>
      </div>
      <SearchBar />
      <RecentAndActiveJobTab
        activeTab={activeTab}
        onTabChange={handleActiveJobTab}
        tab1={"Remote jobs"}
        tab2={"Local jobs"}
      />
      <div className="cardsLayout">
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      <Card title={'Design & Creative'} subtitle={'120+ jobs available'}/>
      </div>
      <SignUpToApply/>
    </div>
  );
}

export default ExploreJobs;
