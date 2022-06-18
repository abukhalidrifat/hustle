import css from "../assets/styles/SignUpToApply.module.css";

function SignUpToApply() {
  return (
    <div className={css.exploreTalentsBanner}>
      <div className={css.exploreTalentsBannerLeft}>
        <p className={css.exploreTalentsBannerTitle}>
          Sign Up to apply for any job.
        </p>
        <p className={css.exploreTalentsBannerSubTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          veritatis cumque deserunt distinctio ducimus reiciendis, laborum
          exercitationem perferendis sequi, quasi assumenda sint maxime nihil.
          Odit placeat quasi hic quod aliquam?.
        </p>
        <button className={css.exploreTalentsBannerButton}>
          Sign Up
        </button>
      </div>
      <div className={css.exploreTalentsBannerRight}>
        <img src={require("../assets/icons/frame6.png")} alt="frame6" />
      </div>
    </div>
  );
}

export default SignUpToApply;
