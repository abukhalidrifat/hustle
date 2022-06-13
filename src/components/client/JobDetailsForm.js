import css from "../../assets/styles/client/JobDetailsForm.module.css";

function JobDeatilsForm({ state, dispatch }) {
  let copySkills = [...state.skills];
  let copyCatergories = [...state.categories];
  let copyExperiences = [...state.experiences];
  let copyDurations = [...state.durations];
  let copyBudgets = [...state.budgets];
  let copyEnglishLevels = [...state.englishLevels];
  let copyLanguages = [...state.languages];
  let copyTypes = [...state.types];
  let copyLocations = [...state.locations];

  const stopTyping = (e) => {
    if (state.max - state.keep == 0) {
      e.preventDefault();
    }
  };
  const handleNullAndAddSkill = () => {
    if (state.skill.length == 0) {
      return;
    }
    dispatch({ type: "SetSkillsArray" });
  };

  const handleRemoveSkill = (skill) => {
    const array = [...state.skills];
    const index = array.indexOf(skill);
    if (index !== -1) {
      array.splice(index, 1);
    }
    dispatch({ type: "updatedSkills", payload: array });
  };

  return (
    <div style={{ maxWidth: "800px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div className={css.title}>
          <p className={css.heading}>Job Title</p>
          <input
          className={css.input}
            type="text"
            placeholder="Your Job Title"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "setTitle", payload: e.target.value })
            }
          />
        </div>
        <div className={css.category}>
          <p className={css.heading}>Category</p>
          <select
          className={css.select}
            name="category"
            value={state.category}
            onChange={(e) =>
              dispatch({ type: "setCategory", payload: e.target.value })
            }
          >
            {copyCatergories.map((e) => (
              <option className={css.option} value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={css.information}>
        <p className={css.heading}>Information</p>
        <div style={{ position: "relative" }}>
          <textarea
          className={css.textarea}
            name="informaton"
            value={state.information}
            onChange={(e) =>
              dispatch({ type: "textChange", payload: e.target.value })
            }
            onKeyPress={(e) => stopTyping(e)}
          ></textarea>
          <p className={css.wordCount}>{state.max - state.keep}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div className={css.experience}>
          <p className={css.heading}>Experience</p>
          <select
          className={css.select}
            name="experience"
            value={state.experience}
            onChange={(e) =>
              dispatch({ type: "setExperience", payload: e.target.value })
            }
          >
            {copyExperiences.map((e) => (
              <option className={css.option} value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className={css.duration}>
          <p className={css.heading}>Duration</p>
          <select
          className={css.select}
            name="duration"
            value={state.duration}
            onChange={(e) =>
              dispatch({ type: "setDuration", payload: e.target.value })
            }
          >
            {copyDurations.map((e) => (
              <option className={css.option} value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className={css.budget}>
          <p className={css.heading}>Budget</p>
          <select
          className={css.select}
            name="budget"
            value={state.budget}
            onChange={(e) =>
              dispatch({ type: "setBudget", payload: e.target.value })
            }
          >
            {copyBudgets.map((e) => (
              <option className={css.option} value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <p className={css.heading}>English Level</p>
        <select
        className={css.select}
          name="englishLevel"
          value={state.englishLevel}
          onChange={(e) =>
            dispatch({ type: "setEnglishLevel", payload: e.target.value })
          }
        >
          {copyEnglishLevels.map((e) => (
            <option className={css.option} value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className={css.heading}>Language</p>
        <select
        className={css.select}
          name="language"
          value={state.language}
          onChange={(e) =>
            dispatch({ type: "setLanguage", payload: e.target.value })
          }
        >
          {copyLanguages.map((e) => (
            <option className={css.option} value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={css.type}>
          <p className={css.heading}>Type</p>
          <select
          className={css.select}
            name="budget"
            value={state.type}
            onChange={(e) =>
              dispatch({ type: "setType", payload: e.target.value })
            }
          >
            {copyTypes.map((e) => (
              <option className={css.option} value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className={css.location}>
          <p className={css.heading}>Location</p>
          <select
          className={css.select}
            name="location"
            value={state.location}
            onChange={(e) =>
              dispatch({ type: "setLocation", payload: e.target.value })
            }
          >
            {copyLocations.map((e) => (
              <option className={css.option} value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div className={css.skills}>
          <p className={css.heading}>Skills</p>
          <input
          className={css.input}
            type="text"
            value={state.skill}
            onChange={(e) =>
              dispatch({ type: "setSkill", payload: e.target.value })
            }
            placeholder="Required Skills"
          />
          <button className={css.addSkillBtn} onClick={handleNullAndAddSkill}>
            Add Skill
          </button>
        </div>
        <div className={css.skillset}>
          {copySkills.map((skill) => (
            <p
              onClick={() => handleRemoveSkill(skill)}
              key={Math.random().toString(36).substr(2, 9)}
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className={css.submitButton}
          onClick={() => {
            dispatch({ type: "changePage",payload:'jobConfirmation' });
          }}
        >
          Submit your work
        </button>
      </div>
    </div>
  );
}

export default JobDeatilsForm;
