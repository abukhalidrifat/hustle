import loactionImg from "../../assets/icons/location.png";
import css from "../../assets/styles/client/ClientJobConfirmation.module.css";

function ClientJobConfirmation({ state,dispatch }) {
  const copySkills = state.skills;
  return (
    <div style={{ backgroundColor: "#F5F5F5", padding: "10px" }}>
      <div className={css.heading}>
        <p className={css.title}>{state.title}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66667 2C4.98533 2 2 4.95467 2 8.6C2 11.5427 3.16667 18.5267 14.6507 25.5867C14.8564 25.7118 15.0925 25.778 15.3333 25.778C15.5741 25.778 15.8103 25.7118 16.016 25.5867C27.5 18.5267 28.6667 11.5427 28.6667 8.6C28.6667 4.95467 25.6813 2 22 2C18.3187 2 15.3333 6 15.3333 6C15.3333 6 12.348 2 8.66667 2Z"
              stroke="#003986"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={css.type}>{state.type}</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <img src={loactionImg} alt="location" />
        <p className={css.location}>{state.location}</p>
      </div>
      <div className={css.information}>
        <p>{state.information}</p>
      </div>
      <div className={css.details}>
        <div>
          <p>Category</p>
          <p>{state.category}</p>
        </div>
        <div>
          <p>Budget</p>
          <p>${state.budget}</p>
        </div>
        <div>
          <p>Experience</p>
          <p>{state.experience}</p>
        </div>
        <div>
          <p>Period</p>
          <p>{state.duration}</p>
        </div>
      </div>
      <div className={css.skills}>
        <p>Skills:</p>
        <div>
          {copySkills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </div>
      <div className={css.requirements}>
        <p className={css.requirementsHead}>Requirements:</p>
        <div>
          <p>English Level:</p>
          <p>{state.englishLevel}</p>
        </div>
        <div>
          <p>Language:</p>
          <p>{state.language}</p>
        </div>
      </div>
      <div className={css.confirmBtn}>
        <button
          style={{ backgroundColor: "#BB2D38", marginRight: "10px" }}
          onClick={() => {
            dispatch({ type: "changePage", payload: "jobDetails" });
          }}
        >
          Back
        </button>
        <button>Confirm</button>
      </div>
    </div>
  );
}

export default ClientJobConfirmation;
