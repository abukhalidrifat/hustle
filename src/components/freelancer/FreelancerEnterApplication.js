import { useReducer } from "react";
import css from "../../assets/styles/freelancer/FreelancerEnterApplication.module.css";

const initialState = {
  word: 0,
  max: 5000,
  keep: 0,
  coverLetter: "Lorem ispum de sit inor",
  duration:'less than 1 day',
  budget:0,
};
const wordCount = (text) => {
  let arr = text.split(" ");
  return arr.reduce(function (count, item) {
    if (item.length > 0) {
      count++;
    }
    return count;
  }, 0);
};
function reducer(state, action) {
  switch (action.type) {
    case "textChange":
      return {
        ...state,
        coverLetter: action.payload,
        keep: action.payload.length,
        word: wordCount(action.payload),
      };
      break;
    case "changeDuration":
      return {
        ...state,
        duration: action.payload,
      };
      break;
    case "handleBudget":
      return {
        ...state,
        budget: action.payload,
      };
      break;
    default:
      throw new Error();
  }
}

function FreelancerEnterApplication() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stopTyping = (e) => {
    if (state.max - state.keep == 0) {
      e.preventDefault();
    }
  };
  return (
    <div>
      <p className={css.breadcrumb}>
        Explore works &gt; Design & Creative &gt; Job Details
      </p>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          padding: "10px",
          width: "90%",
          margin: "auto",
        }}
      >
        <div className={css.heading}>
          <p className={css.title}>Title</p>
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
            <p className={css.type}>Remote</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p className={css.location}>
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00001 0.5C6.81276 0.50258 4.71584 1.3726 3.16923 2.91922C1.62261 4.46584 0.752589 6.56276 0.750009 8.75C0.747389 10.5374 1.33124 12.2763 2.41201 13.7C2.41201 13.7 2.63701 13.9963 2.67376 14.039L9.00001 21.5L15.3293 14.0353C15.3623 13.9955 15.588 13.7 15.588 13.7L15.5888 13.6978C16.669 12.2747 17.2526 10.5366 17.25 8.75C17.2474 6.56276 16.3774 4.46584 14.8308 2.91922C13.2842 1.3726 11.1873 0.50258 9.00001 0.5ZM9.00001 11.75C8.40666 11.75 7.82665 11.5741 7.3333 11.2444C6.83995 10.9148 6.45543 10.4462 6.22837 9.89805C6.00131 9.34987 5.9419 8.74667 6.05765 8.16473C6.17341 7.58279 6.45913 7.04824 6.87869 6.62868C7.29825 6.20912 7.83279 5.9234 8.41474 5.80764C8.99668 5.69189 9.59988 5.7513 10.1481 5.97836C10.6962 6.20542 11.1648 6.58994 11.4944 7.08329C11.8241 7.57664 12 8.15666 12 8.75C11.999 9.54535 11.6826 10.3078 11.1202 10.8702C10.5578 11.4326 9.79535 11.749 9.00001 11.75Z"
                fill="#FFE901"
              />
            </svg>
            London,Uk
          </p>
          <p className={css.location} style={{ marginLeft: "40px" }}>
            Posted 5 mins ago
          </p>
        </div>
        <div className={css.information}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            veniam accusantium ad dolorum quod est, tempora officiis assumenda
            modi excepturi dolores eaque facere, doloremque odio ipsa, ullam
            beatae? Nihil, dignissimos.
          </p>
        </div>
        <div className={css.details}>
          <div>
            <p>Category</p>
            <p>web dev</p>
          </div>
          <div>
            <p>Budget</p>
            <p>$150</p>
          </div>
          <div>
            <p>Experience</p>
            <p>Level 1</p>
          </div>
          <div>
            <p>Period</p>
            <p>10 days</p>
          </div>
        </div>
        <div className={css.applications}>
          <p>Applications - 20+</p>
          <p>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="13" cy="13" r="13" fill="#003986" />
              <path
                d="M3.8999 12.9998L10.7249 18.5248L21.4499 7.7998"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Payment Verified
          </p>
        </div>
        <div className={css.skills}>
          <p>Skills:</p>
          <div>
            {/* {copySkills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))} */}
            <p>web dev</p>
            <p>web dev</p>
            <p>web dev</p>
          </div>
        </div>
        <div className={css.requirementsAndActivity}>
          <div className={css.requirements}>
            <p className={css.requirementsHead}>Requirements:</p>
            <table>
              <tbody>
                <tr>
                  <td>English Level:</td>
                  <td>Answer</td>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td>Answer</td>
                </tr>
                <tr>
                  <td>Language:</td>
                  <td>Answer</td>
                </tr>
                <tr>
                  <td>Requirement:</td>
                  <td>Answer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={css.activity}>
            <p className={css.requirementsHead}>Activity on the job:</p>
            <table>
              <tbody>
                <tr>
                  <td>Applications:</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Hired:</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Interviewing:</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Invites:</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={css.coverLetter}>
          <p className={css.title}>Cover Letter</p>
          <div style={{ position: "relative" }}>
            <textarea
              className={css.textarea}
              name="coverLetter"
              value={state.coverLetter}
              onChange={(e) =>
                dispatch({ type: "textChange", payload: e.target.value })
              }
              onKeyPress={(e) => stopTyping(e)}
            ></textarea>
            <p className={css.wordCount}>
              {state.max - state.keep + " " + "characters left"}
            </p>
          </div>
        </div>
        <div className={css.yourBid}>
          <p className={css.bidTitle}>Your Bid</p>
          <p className={css.projectBudget}>Project Budget: $250</p>
          <div className={css.bidInputs}>
            <div className={css.formText}>
              <input type="number" 
              value={state.budget}
              onChange={(e) =>
                dispatch({ type: "handleBudget", payload: e.target.value })
              }/>
              <label for="yourbidhere" className={css.staticLabel}>
                Your Bid $
              </label>
            </div>
            <div className={css.serviceFee}>
              <p>Service Fee: $20</p>
            </div>
            <div className={css.serviceFee}>
              <p>You get: $20</p>
            </div>
          </div>
        </div>
        <div className={css.duration}>
          <p className={css.bidTitle}>Duration</p>
          <select
            name="duration"
            className={css.select}
            value={state.duration}
            onChange={(e) =>
              dispatch({ type: "changeDuration", payload: e.target.value })
            }
          >
            <option value="less than 1 day"> Less than 1 day</option>
            <option value="more than 1 week"> More than 1 week</option>
          </select>
        </div>
        <div className={css.confirmBtn}>
          <button onClick={()=>console.log(state)}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default FreelancerEnterApplication;
