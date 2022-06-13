import { useReducer } from "react";

const initialState = {
  page: "jobDetails",
  // input data
  categories: ["web dev", "graphics", "animation"],
  experiences: ["Entry level", "pro level"],
  durations: ["less than 1 month", "more than 1 month"],
  budgets: ["50", "100", "150"],
  englishLevels: ["converstaion", "fluent"],
  languages: ["English", "Urdu", "Bengali"],
  types: ["Remote", "Local"],
  locations: ["Uk", "USA", "Canada", "Bangladesh"],
  // form data
  information:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo aspernatur magni eum nobis placeat odio, consequatur atque ex animi error eaque laboriosam recusandae ipsa, quos porro exercitationem ducimus minus",
  word: 0,
  max: 5000,
  keep: 0,
  title: "job title",
  category: "web dev",
  experience: "pro level",
  duration: "less than 1 month",
  budget: "150",
  englishLevel: "conversation",
  language: "English",
  type: "Remote",
  location: "London, Uk",
  skill: "",
  skills: ["html", "css", "react", "javascript"],
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
// reducer
function reducer(state, action) {
  switch (action.type) {
    case "textChange":
      return {
        ...state,
        information: action.payload,
        keep: action.payload.length,
        word: wordCount(action.payload),
      };
      break;
    case "setTitle":
      return {
        ...state,
        title: action.payload,
      };
      break;
    case "setCategory":
      return {
        ...state,
        category: action.payload,
      };
      break;
    case "setExperience":
      return {
        ...state,
        experience: action.payload,
      };
      break;
    case "setDuration":
      return {
        ...state,
        duration: action.payload,
      };
      break;
    case "setBudget":
      return {
        ...state,
        budget: action.payload,
      };
      break;
    case "setEnglishLevel":
      return {
        ...state,
        englishLevel: action.payload,
      };
      break;
    case "setLanguage":
      return {
        ...state,
        language: action.payload,
      };
      break;
    case "setType":
      return {
        ...state,
        type: action.payload,
      };
      break;
    case "setLocation":
      return {
        ...state,
        location: action.payload,
      };
      break;
    case "setSkill":
      return {
        ...state,
        skill: action.payload,
      };
      break;
    case "SetSkillsArray":
      return {
        ...state,
        skills: [...state.skills, state.skill],
        skill: "",
      };
      break;
    case "updatedSkills":
      return {
          ...state,
        skills: action.payload,
      };
      break;
    case "changePage":
      return {
        ...state,
        page: action.payload,
      };
      break;
    case "sendForm":
      console.log(state);
      // send data to server
      break;
    default:
      throw new Error();
  }
}

function ClientJobForm(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return props.children(state, dispatch);
}

export default ClientJobForm;
