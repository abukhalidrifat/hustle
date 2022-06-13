import { useReducer } from "react";
import ClientJobCard from "../JobCard";

const initialState = [
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
    timeLeft:'15 hours 20 minutes'
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
    timeLeft:'10 hours 20 minutes'
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
    timeLeft:'1 hours 20 minutes'
  },
];

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error();
  }
}

function ClientRunningJobs() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let copyState = [...state];
  return (
    <div>
      {copyState.map((data) => (
        <ClientJobCard {...data} key={data.id} jobType="runningJobs"/>
      ))}
    </div>
  );
}

export default ClientRunningJobs;
