import css from "../../assets/styles/client/ClientProfile.module.css";
import ReviewCard from "../../components/client/ReviewCard";
import profileAvatarImg from "../../assets/icons/profilepic.jpg";
import { useReducer } from "react";

const initialState = {
  isEditing: false,
  word: 0,
  max: 5000,
  keep: 0,
  profileImage: "",
  name: "Client Name",
  title: "Web Dev",
  location: "London, Uk",
  introduction:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, dolor tempora quam amet repellendus suscipit libero illo? Officia quos excepturi enim sapiente quia hic eum modi harum quasi et. Laborum.",
  workHistory: "20",
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
        introduction: action.payload,
        keep: action.payload.length,
        word: wordCount(action.payload),
      };
    case "handleIsEditing":
      return { ...state, isEditing: !action.payload };
    case "handleNameChange":
      return { ...state, name: action.payload };
    case "handleTitleChange":
      return { ...state, title: action.payload };
    case "handleLocationChange":
      return { ...state, location: action.payload };
    default:
      throw new Error();
  }
}

function ClientProfile() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stopTyping = (e) => {
    if (state.max - state.keep == 0) {
      e.preventDefault();
    }
  };
  return (
    <div>
      <div>
        <p className={css.yourProfile}>Your Profile</p>
        <p className={css.clientName}>{state.name}</p>
      </div>
      <div className={css.profileContainer}>
        <div className={css.profileHeader}>
          <div className={css.profile}>
            <img src={profileAvatarImg} alt="profile img" />
            <div className={css.profileDetails}>
              {state.isEditing ? (
                <input
                  className={css.input}
                  type="text"
                  value={state.name}
                  onChange={(e) =>
                    dispatch({
                      type: "handleNameChange",
                      payload: e.target.value,
                    })
                  }
                />
              ) : (
                <p className={css.profileName}>{state.name}</p>
              )}
              <p className={css.profileTitle}>
                {state.isEditing ? (
                  <input
                    className={css.input}
                    type="text"
                    value={state.title}
                    onChange={(e) =>
                      dispatch({
                        type: "handleTitleChange",
                        payload: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className={css.profileTitle}>{state.title}</p>
                )}
              </p>
              {state.isEditing ? (
                <input
                  className={css.input}
                  type="text"
                  value={state.location}
                  onChange={(e) =>
                    dispatch({
                      type: "handleLocationChange",
                      payload: e.target.value,
                    })
                  }
                />
              ) : (
                <p className={css.profileLocation}>
                  <svg
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50001 0.5C6.31276 0.50258 4.21584 1.3726 2.66923 2.91922C1.12261 4.46584 0.252589 6.56276 0.250009 8.75C0.247389 10.5374 0.831244 12.2763 1.91201 13.7C1.91201 13.7 2.13701 13.9963 2.17376 14.039L8.50001 21.5L14.8293 14.0353C14.8623 13.9955 15.088 13.7 15.088 13.7L15.0888 13.6978C16.169 12.2747 16.7526 10.5366 16.75 8.75C16.7474 6.56276 15.8774 4.46584 14.3308 2.91922C12.7842 1.3726 10.6873 0.50258 8.50001 0.5ZM8.50001 11.75C7.90666 11.75 7.32665 11.5741 6.8333 11.2444C6.33995 10.9148 5.95543 10.4462 5.72837 9.89805C5.50131 9.34987 5.4419 8.74667 5.55765 8.16473C5.67341 7.58279 5.95913 7.04824 6.37869 6.62868C6.79825 6.20912 7.33279 5.9234 7.91474 5.80764C8.49668 5.69189 9.09988 5.7513 9.64806 5.97836C10.1962 6.20542 10.6648 6.58994 10.9944 7.08329C11.3241 7.57664 11.5 8.15666 11.5 8.75C11.499 9.54535 11.1826 10.3078 10.6202 10.8702C10.0578 11.4326 9.29535 11.749 8.50001 11.75Z"
                      fill="#003986"
                    />
                  </svg>
                  {state.location}
                </p>
              )}
            </div>
          </div>
          <div>
            {state.isEditing ? (
              <button
                className={css.saveBtn}
                onClick={() =>
                  dispatch({
                    type: "handleIsEditing",
                    payload: state.isEditing,
                  })
                }
              >
                Save
              </button>
            ) : (
              <button
                className={css.editBtn}
                onClick={() =>
                  dispatch({
                    type: "handleIsEditing",
                    payload: state.isEditing,
                  })
                }
              >
                <svg
                  width="22"
                  height="32"
                  viewBox="0 0 37 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6437 21.557L27.6437 19.557C27.9562 19.2445 28.5 19.4633 28.5 19.9133V29.0008C28.5 30.657 27.1562 32.0008 25.5 32.0008H3.5C1.84375 32.0008 0.5 30.657 0.5 29.0008V7.00078C0.5 5.34453 1.84375 4.00078 3.5 4.00078H20.5938C21.0375 4.00078 21.2625 4.53828 20.95 4.85703L18.95 6.85703C18.8563 6.95078 18.7313 7.00078 18.5938 7.00078H3.5V29.0008H25.5V21.907C25.5 21.7758 25.55 21.6508 25.6437 21.557ZM35.4313 8.94453L19.0187 25.357L13.3687 25.982C11.7312 26.1633 10.3375 24.782 10.5188 23.132L11.1438 17.482L27.5562 1.06953C28.9875 -0.361719 31.3 -0.361719 32.725 1.06953L35.425 3.76953C36.8563 5.20078 36.8563 7.51953 35.4313 8.94453ZM29.2563 10.8758L25.625 7.24453L14.0125 18.8633L13.5562 22.9445L17.6375 22.4883L29.2563 10.8758ZM33.3063 5.89453L30.6063 3.19453C30.35 2.93828 29.9312 2.93828 29.6812 3.19453L27.75 5.12578L31.3813 8.75703L33.3125 6.82578C33.5625 6.56328 33.5625 6.15078 33.3063 5.89453Z"
                    fill="#003986"
                  />
                </svg>
                Edit
              </button>
            )}
          </div>
        </div>
        <div className={css.introduction}>
          <p className={css.title}>Introduction</p>
          {state.isEditing ? (
            <div style={{ position: "relative" }}>
              <textarea
                className={css.textarea}
                name="informaton"
                value={state.introduction}
                onChange={(e) =>
                  dispatch({ type: "textChange", payload: e.target.value })
                }
                onKeyPress={(e) => stopTyping(e)}
              ></textarea>
              <p className={css.wordCount}>{state.max - state.keep}</p>
            </div>
          ) : (
            <p>{state.introduction}</p>
          )}
        </div>
        <div className={css.workHistory}>
          <p className={css.title}>Work History</p>
          <p>{state.workHistory} jobs completed</p>
        </div>
        <p className={css.title}>Reviews (20 reviews)</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <ReviewCard image={profileAvatarImg} />
          <ReviewCard image={profileAvatarImg} />
          <ReviewCard image={profileAvatarImg} />
          <ReviewCard image={profileAvatarImg} />
          <ReviewCard image={profileAvatarImg} />
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
