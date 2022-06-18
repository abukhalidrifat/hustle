import { useReducer } from "react";

import avatar1 from "../../assets/icons/man.png";
import avatar2 from "../../assets/icons/man.png";
import avatar3 from "../../assets/icons/man.png";
import ClientJobCard from "../JobCard";

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
      applied: "15+",
      appliedCandidates: [
        //select maximum 3-5
        avatar1,
        avatar2,
        avatar3,
      ],
    },
    {
      id: 2,
      title: "Title of Job 2",
      type: "Remote",
      location: "London,Uk",
      posted: "5 mins ago",
      category: "web design",
      budget: 190,
      experience: "experience level",
      period: "4-5 days",
      applied: "15+",
      appliedCandidates: [
        //select maximum 3-5
        avatar1,
        avatar2,
        avatar3,
      ],
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
      applied: "15+",
      appliedCandidates: [
        //select maximum 3-5
        avatar1,
        avatar2,
        avatar3,
      ],
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error();
  }
}

function ClientActiveJobs() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let copyState = [...state.jobs];
  return (
    <div>
      {copyState.map((data) => (
        <ClientJobCard {...data} key={data.id} jobType="activeJobs" />
      ))}
    </div>
  );
}

export default ClientActiveJobs;
