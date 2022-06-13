import { useReducer } from "react";
import css from "../../assets/styles/freelancer/FilterJobs.module.css";

const initialState = {
  type: "both",
  duration: "0-1 hour",
  experience: "level 1",
  budget: "0-50",
};

function reducer(state, action) {
  switch (action.type) {
    case "setRadio":
      return {
        ...state,
        [action.setState]: action.payload,
      };
    default:
      throw new Error();
  }
}

function FilterJobs({ cancelFilter }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFilter = () => {
    cancelFilter();
  };
  const applyFilter = () => {
    console.log(state);
  };
  return (
    <div>
      <div className={css.container}>
        <button className={css.cross} onClick={handleFilter}>X</button>
        <div className={css.type}>
          <p className={css.title}>Type</p>
          <p>
            Both{" "}
            <input
              type="radio"
              value="both"
              name="type"
              checked={state.type === "both"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "type",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            Remote{" "}
            <input
              type="radio"
              value="remote"
              name="type"
              checked={state.type === "remote"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "type",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            Local{" "}
            <input
              type="radio"
              value="local"
              name="type"
              checked={state.type === "local"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "type",
                  payload: e.target.value,
                })
              }
            />
          </p>
        </div>
        <div className={css.horizontalLine}></div>
        <div className={css.duration}>
          <p className={css.title}>Duration</p>
          <p>
            0-1 hour{" "}
            <input
              type="radio"
              value="0-1"
              name="duration"
              checked={state.duration === "0-1"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "duration",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            1-2 hour{" "}
            <input
              type="radio"
              value="1-2"
              name="duration"
              checked={state.duration === "1-2"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "duration",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            3+{" "}
            <input
              type="radio"
              value="3+"
              name="duration"
              checked={state.duration === "3+"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "duration",
                  payload: e.target.value,
                })
              }
            />
          </p>
        </div>
        <div className={css.horizontalLine}></div>
        <div className={css.experience}>
          <p className={css.title}>Experience</p>
          <p>
            Level 1{" "}
            <input
              type="radio"
              value="level 1"
              name="experience"
              checked={state.experience === "level 1"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "experience",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            Level 2{" "}
            <input
              type="radio"
              value="level 2"
              name="experience"
              checked={state.experience === "level 2"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "experience",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            Level 3{" "}
            <input
              type="radio"
              value="level 3"
              name="experience"
              checked={state.experience === "level 3"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "experience",
                  payload: e.target.value,
                })
              }
            />
          </p>
        </div>
        <div className={css.horizontalLine}></div>
        <div className={css.budget}>
          <p className={css.title}>Budget</p>
          <p>
            $0-$50{" "}
            <input
              type="radio"
              value="0-50"
              name="budget"
              checked={state.budget === "0-50"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "budget",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            $50-$500{" "}
            <input
              type="radio"
              value="50-500"
              name="budget"
              checked={state.budget === "50-500"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "budget",
                  payload: e.target.value,
                })
              }
            />
          </p>
          <p>
            $500+{" "}
            <input
              type="radio"
              value="500+"
              name="budget"
              checked={state.budget === "50-500"}
              onChange={(e) =>
                dispatch({
                  type: "setRadio",
                  setState: "budget",
                  payload: e.target.value,
                })
              }
            />
          </p>
        </div>
        <div className={css.horizontalLine}></div>
        <button className={css.button} onClick={applyFilter}>Apply</button>
      </div>
      <div className={css.wrapper} onClick={handleFilter}></div>
    </div>
  );
}

export default FilterJobs;
