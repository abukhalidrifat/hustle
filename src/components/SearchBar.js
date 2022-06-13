import { useReducer } from "react";
import css from "../assets/styles/SearchBar.module.css";

const initialState = {
  type: "",
  location: "",
  category: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setType":
      return {
        ...state,
        type: action.payload,
      };
    case "setLocation":
      return {
        ...state,
        location: action.payload,
      };
    case "setCategory":
      return {
        ...state,
        category: action.payload,
      };
    default:
      throw new Error();
  }
}

function SearchBar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleTypeChange = (e) => {
    dispatch({ type: "setType", payload: e });
  };
  const handleLocationChange = (e) => {
    dispatch({ type: "setLocation", payload: e });
  };
  const handleCategoryChange = (e) => {
    dispatch({ type: "setCategory", payload: e });
  };
  const handleClicked = () => {
    console.log(state.type, state.category, state.location);
  };
  return (
    <div className={css.options}>
      <div>
        <select
          name="type"
          className={css.select}
          value={state.type}
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option value="" disabled>
            Type
          </option>
          <option value="remote">Remote</option>
          <option value="local">Local</option>
        </select>
      </div>
      <span className={css.horizontalLine}></span>
      <div className={css.location}>
        <input
          className={css.input}
          type="text"
          placeholder="Location"
          value={state.location}
          onChange={(e) => handleLocationChange(e.target.value)}
        />
      </div>
      <span className={css.horizontalLine}></span>
      <div className={css.category}>
        <input
          className={css.input}
          type="text"
          placeholder="Software Engineer"
          value={state.category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        />
      </div>
      <span className={css.horizontalLine}></span>
      <div className={css.search}>
        <button className={css.button} onClick={handleClicked}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 27.0003L21.0187 21.0083L27 27.0003ZM24.3333 13.0003C24.3333 16.0061 23.1393 18.8888 21.0139 21.0142C18.8885 23.1396 16.0058 24.3337 13 24.3337C9.9942 24.3337 7.11153 23.1396 4.98611 21.0142C2.8607 18.8888 1.66666 16.0061 1.66666 13.0003C1.66666 9.99454 2.8607 7.11186 4.98611 4.98645C7.11153 2.86104 9.9942 1.66699 13 1.66699C16.0058 1.66699 18.8885 2.86104 21.0139 4.98645C23.1393 7.11186 24.3333 9.99454 24.3333 13.0003V13.0003Z"
              stroke="white"
              strokeWidth="2.66667"
              strokeLinecap="round"
            />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
