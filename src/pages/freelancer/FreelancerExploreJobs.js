import { useState } from "react";
import css from "../../assets/styles/freelancer/FreelancerExploreJobs.module.css";
import RecentAndActiveJobTab from "../../components/ReacentAndActiveJobTab";
import mapImg from "../../assets/icons/map.png";
import SearchBar from "../../components/SearchBar";
import FreelancerJobCard from "../../components/freelancer/FreelancerJobCard";
import FilterJobs from "../../components/freelancer/FilterJobs";

function FreelancerExploreJobs() {
  const [activeTab, setJobTo] = useState("activeJobs");
  const [filterTab, setFilterTabTo] = useState(false);
  const handleActiveJobTab = (job) => {
    setJobTo(job);
  };
  const handleFilterTab = () => {
    setFilterTabTo((prev) => !prev);
  };
  return (
    <div
      style={{ paddingLeft: "26px", paddingRight: "26px", marginTop: "16px" }}
    >
      <p className={css.welcome}>Welcome To hustle</p>
      {activeTab == "runningJobs" && (
        <button className={css.nearbyJobsBtn}>
          <svg
            width="22"
            height="28"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44372 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z"
              fill="white"
            />
          </svg>
          Find Nearby Jobs
        </button>
      )}
      <RecentAndActiveJobTab
        activeTab={activeTab}
        onTabChange={handleActiveJobTab}
      />
      {activeTab == "activeJobs" && (
        <img className={css.mapImg} src={mapImg} alt="map" />
      )}
      <SearchBar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div className={css.availableJobs}>
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.1667 5.83337C26.1667 4.37468 25.5872 2.97574 24.5558 1.94429C23.5243 0.912837 22.1254 0.333374 20.6667 0.333374H13.3333C11.8746 0.333374 10.4757 0.912837 9.44425 1.94429C8.4128 2.97574 7.83333 4.37468 7.83333 5.83337H6C4.54131 5.83337 3.14236 6.41284 2.11091 7.44429C1.07946 8.47574 0.5 9.87468 0.5 11.3334V26C0.5 27.4587 1.07946 28.8577 2.11091 29.8891C3.14236 30.9206 4.54131 31.5 6 31.5H28C29.4587 31.5 30.8576 30.9206 31.8891 29.8891C32.9205 28.8577 33.5 27.4587 33.5 26V11.3334C33.5 9.87468 32.9205 8.47574 31.8891 7.44429C30.8576 6.41284 29.4587 5.83337 28 5.83337H26.1667ZM20.6667 4.00004H13.3333C12.8471 4.00004 12.3808 4.1932 12.037 4.53701C11.6932 4.88083 11.5 5.34714 11.5 5.83337H22.5C22.5 5.34714 22.3068 4.88083 21.963 4.53701C21.6192 4.1932 21.1529 4.00004 20.6667 4.00004Z"
              fill="#00EA17"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.00008 9.5H28.0001C28.4863 9.5 28.9526 9.69315 29.2964 10.037C29.6403 10.3808 29.8334 10.8471 29.8334 11.3333V26C29.8334 26.4862 29.6403 26.9525 29.2964 27.2964C28.9526 27.6402 28.4863 27.8333 28.0001 27.8333H6.00008C5.51385 27.8333 5.04754 27.6402 4.70372 27.2964C4.3599 26.9525 4.16675 26.4862 4.16675 26V11.3333C4.16675 10.8471 4.3599 10.3808 4.70372 10.037C5.04754 9.69315 5.51385 9.5 6.00008 9.5Z"
              fill="#00EA17"
            />
          </svg>
          <p>Available Jobs (2309)</p>
        </div>
        <div className={css.filter}>
          <button onClick={handleFilterTab}>
            <svg
              width="38"
              height="34"
              viewBox="0 0 38 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3593 32.2812C11.3593 33.1109 12.0249 33.7812 12.8499 33.7812H25.1499C25.9749 33.7812 26.6406 33.1109 26.6406 32.2812V23.0938H11.3593V32.2812ZM36.2546 0.21875H1.74525C0.596817 0.21875 -0.12037 1.47031 0.456193 2.46875L10.8296 20.0938H27.1796L37.5531 2.46875C38.1203 1.47031 37.4031 0.21875 36.2546 0.21875Z"
                fill="#003986"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>
      {filterTab && <FilterJobs cancelFilter={handleFilterTab} />}
      <div className="cardsLayout">
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
        <FreelancerJobCard />
      </div>
    </div>
  );
}

export default FreelancerExploreJobs;
