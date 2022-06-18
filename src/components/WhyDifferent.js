import css from '../assets/styles/WhyDifferent.module.css'

function WhyDifferent() {
  return (
    <div>
      <div className={css.different}>
        <p>
          Why we are <br />
          <div>
            <p>
              Different
              <span style={{ top: "-8px", left: "-8px" }}></span>
              <span style={{ top: "-8px", right: "-8px" }}></span>
              <span style={{ bottom: "-8px", left: "-8px" }}></span>
              <span style={{ bottom: "-8px", right: "-8px" }}></span>
            </p>
          </div>
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          perspiciatis delectus quisquam, vitae possimus quasi ipsa quia
          recusandae, nisi officia voluptatum nemo fuga pariatur accusamus enim
          expedita odio! A, excepturi.
        </p>
      </div>
      <div className={css.whyDifferentCards}>
        <div className={css.differentCard}>
          <div className={css.differentCardHead}>
            <img src={require("../assets/icons/frame3.png")} alt="frame" />
          </div>
          <div className={css.differentCardTitle}>
            <p>Search from both Local or remote jobs</p>
          </div>
          <div className={css.differentCardSubTitle}>
            <p>Card Sub title</p>
          </div>
        </div>
        <div className={css.differentCard}>
          <div className={css.differentCardHead}>
            <img src={require("../assets/icons/frame2.png")} alt="frame" />
          </div>
          <div className={css.differentCardTitle}>
            <p>Work from your comfortable place</p>
          </div>
          <div className={css.differentCardSubTitle}>
            <p>Card Sub title</p>
          </div>
        </div>
        <div className={css.differentCard}>
          <div className={css.differentCardHead}>
            <img src={require("../assets/icons/frame4.png")} alt="frame" />
          </div>
          <div className={css.differentCardTitle}>
            <p>Or work directly at people's place</p>
          </div>
          <div className={css.differentCardSubTitle}>
            <p>Card Sub title</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyDifferent;
