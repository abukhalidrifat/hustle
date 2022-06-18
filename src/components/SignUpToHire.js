import css from "../assets/styles/SignUpToHire.module.css";
import { useNavigate } from "react-router-dom";

function SignUpToHire() {
  let navigate = useNavigate();
  const navigateMeTo = (link) => {
    navigate(link);
  };

  return (
    <div className={css.exploreTalentsBanner}>
      <div className={css.exploreTalentsBannerLeft}>
        <p className={css.exploreTalentsBannerTitle}>
          Explore talents for your job.
        </p>
        <p className={css.exploreTalentsBannerSubTitle}>
          Work with freelancers who are independent and ready to work for your
          local or remote job.
        </p>
        <ul className={css.exploreTalentsBannerList}>
          <li>Post your job</li>
          <li>Browse and hire talents</li>
          <li>Pay them safely</li>
        </ul>
        <button
          className={css.exploreTalentsBannerButton}
          onClick={() => navigateMeTo("/explore/talents")}
        >
          Explore Talents
        </button>
      </div>
      <div className={css.exploreTalentsBannerRight}>
        <img src={require("../assets/icons/frame5.png")} alt="frame5" />
      </div>
    </div>
  );
}

export default SignUpToHire;
