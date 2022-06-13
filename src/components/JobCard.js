import css from "../assets/styles/JobCard.module.css";
import locationImg from "../assets/icons/location.png";
import deleteImg from "../assets/icons/bin.png";

function JobCard({
  jobType,
  id,
  title,
  type,
  location,
  posted,
  category,
  budget,
  experience,
  period,
  applied,
  appliedCandidates,
  timeLeft,
}) {
  let copyAppliedCandidates;
  let ActiveJobsFooter;
  let lowerCaseType = type.toLowerCase();

  if (jobType == "activeJobs") {
    copyAppliedCandidates = [...appliedCandidates];
    ActiveJobsFooter = (
      <div
        className="ActiveFooter"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div className={css.applied}>
          <p>Applications: {applied}</p>
          {copyAppliedCandidates.map((avatar) => (
            <img
              src={avatar}
              key={Math.random().toString(16).slice(2)}
              alt="avatar"
            />
          ))}
        </div>
        <div className={css.view}>
          <p>View Applications</p>
          <p>View Details</p>
        </div>
      </div>
    );
  }
  let DeleteButton = (
    <button className={css.deleteBtn}>
      <img src={deleteImg} alt="delete" />
    </button>
  );
  let RunningJobsFooter;
  if (jobType == "runningJobs") {
    RunningJobsFooter = (
      <div
        className="RunningFooter"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div className={css.timeLeft}>
          <p>Time Left: </p>
          <p>{timeLeft}</p>
        </div>
        <div className={css.downloadBtn}>
          <button>Download File</button>
        </div>
      </div>
    );
  }
  let freelancerActiveJobsFooter;
  if (jobType == "freelancerActiveJobs") {
    freelancerActiveJobsFooter = (
      <div
        className="RunningFooter"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop:'15px'
        }}
      >
        <div className={css.timeLeft}>
          <p>Time Left: </p>
          <p>{timeLeft}</p>
        </div>
        <div className={css.downloadBtn}>
          {lowerCaseType == "remote" && <button>Submit Your Work</button>}
          {lowerCaseType == "local" && <button>Done</button>}
        </div>
      </div>
    );
  }
  let FreelancerInterviewJobFooter;
  if (jobType == "freelancerInterviewJobs") {
    FreelancerInterviewJobFooter = (
      <div className={css.view} style={{ marginLeft:'-24px',marginTop:'10px' }}>
        <p>View Details</p>
      </div>
    );
  }
  let FreelancerSubmittedJobFooter;
  if (jobType == "freelancerSubmittedJobs") {
    FreelancerSubmittedJobFooter = (
      <div className={css.view} style={{ marginLeft:'-24px',marginTop:'10px' }}>
        <p>View Details</p>
      </div>
    );
  }

  return (
    <div>
      <div className={css.card}>
        <div className={css.cardTitle}>
          <p style={{ fontSize: "25px", fontWeight: "600", color: "#003986" }}>
            {title}
          </p>
          <div style={{ display: "flex" }}>
            {jobType == "runningJobs" && DeleteButton}
            <p
              style={{
                color: "#003986",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "4px",
              }}
            >
              {type}
            </p>
          </div>
        </div>
        <div className={css.cardLocation}>
          <div className={css.locationImg}>
            <img src={locationImg} alt="location" />
            <p>{location}</p>
          </div>
          <p style={{ marginLeft: "30px" }}>Posted {posted}</p>
        </div>
        <div className={css.cardDetails}>
          <div>
            <p>Category</p>
            <p>{category}</p>
          </div>
          <div>
            <p>Budget</p>
            <p>${budget}</p>
          </div>
          <div>
            <p>Experience</p>
            <p>{experience}</p>
          </div>
          <div>
            <p>Period</p>
            <p>{period}</p>
          </div>
        </div>
        {jobType == "activeJobs" && ActiveJobsFooter}
        {jobType == "runningJobs" && RunningJobsFooter}
        {jobType == "freelancerActiveJobs" && freelancerActiveJobsFooter}
        {jobType == "freelancerInterviewJobs" && FreelancerInterviewJobFooter}
        {jobType == "freelancerSubmittedJobs" && FreelancerSubmittedJobFooter}
      </div>
    </div>
  );
}

export default JobCard;
