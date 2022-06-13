import { useReducer } from "react";
import JobCard from "../JobCard";

const initialState = {
  jobs: [
    {
      id: 1,
      title: "Title of Job",
      type: "Remote",
      location: "London,Uk",
      posted: "5 mins ago",
      category: "web design",
      budget: 190,
      experience: "experience level",
      period: "4-5 days",
      timeLeft: "15 hours 20 minutes",
    },
    {
      id: 2,
      title: "Title of Job 2",
      type: "Local",
      location: "London,Uk",
      posted: "5 mins ago",
      category: "web design",
      budget: 190,
      experience: "experience level",
      period: "4-5 days",
      timeLeft: "10 hours 20 minutes",
    },
    {
      id: 3,
      title: "Title of Job 3",
      type: "Remote",
      location: "London,Uk",
      posted: "5 mins ago",
      category: "web design",
      budget: 190,
      experience: "experience level",
      period: "4-5 days",
      timeLeft: "1 hours 20 minutes",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error();
  }
}

function FreelancerSubmittedJob() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let copyState = [...state.jobs];
  return (
    <div>
      {copyState.map((data) => (
        <JobCard {...data} key={data.id} jobType="freelancerSubmittedJobs" />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop:'20px',
          marginBottom:'20px'
        }}
      >
        <button
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#003986",
            backgroundColor: "#ffffff",
            border: "3px solid #003986",
            padding: "6px",
            width: "fit-content",
            borderRadius: "10px",
          }}
        >
          Search more jobs
        </button>
      </div>
    </div>
  );
}

export default FreelancerSubmittedJob;
