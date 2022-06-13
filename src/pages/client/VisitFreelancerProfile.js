import css from "../../assets/styles/client/VisitFreelancerProfile.module.css";
import ReviewCard from "../../components/client/ReviewCard";
import profileAvatarImg from "../../assets/icons/profilepic.jpg";
import portfolioImg from "../../assets/icons/portfolio.jpg";
import FreelancerCard from "../../components/client/FreelancerCard";

function VisitFreelancerProfile() {
  return (
    <div>
      <div className={css.breadcrumb}>
        <p>Explore Talents &gt; Design & Creative &gt; Freelancer Profile</p>
      </div>
      <div className={css.profileContainer}>
        <div className={css.profileHeader}>
          <div className={css.profile}>
            <img src={profileAvatarImg} alt="profile img" />
            <div className={css.profileDetails}>
              <p className={css.profileName}>Hustler Name</p>
              <p className={css.profileTitle}>Title</p>
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
                London, UK
              </p>
            </div>
          </div>
          <div className={css.profileButtons}>
            <button className={css.messageBtn}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.8844 8.57503C26.1833 6.90167 25.1633 5.3807 23.8813 4.0969C22.6031 2.81087 21.0848 1.78839 19.4125 1.08753C17.6994 0.366065 15.8588 -0.00375735 14 2.87791e-05H13.9375C12.0469 0.00940378 10.2188 0.384404 8.49691 1.1219C6.839 1.82995 5.33494 2.85424 4.06878 4.13753C2.79919 5.41845 1.79088 6.93409 1.10003 8.60003C0.382892 10.3324 0.0195143 12.1907 0.0312828 14.0657C0.0406578 16.2344 0.559408 18.3875 1.52816 20.3125V25.0625C1.52816 25.8563 2.17191 26.5 2.96253 26.5H7.70628C9.64026 27.4759 11.7744 27.9894 13.9407 28H14.0063C15.875 28 17.6844 27.6375 19.3907 26.9282C21.0544 26.2357 22.5671 25.2251 23.8438 23.9532C25.1313 22.675 26.1438 21.1813 26.8532 19.5157C27.5875 17.7907 27.9625 15.9563 27.9719 14.0625C27.9782 12.1594 27.6094 10.3125 26.8844 8.57503ZM7.76253 15.5C6.93753 15.5 6.26566 14.8282 6.26566 14C6.26566 13.1719 6.93753 12.5 7.76253 12.5C8.58753 12.5 9.25941 13.1719 9.25941 14C9.25941 14.8282 8.59066 15.5 7.76253 15.5ZM14 15.5C13.175 15.5 12.5032 14.8282 12.5032 14C12.5032 13.1719 13.175 12.5 14 12.5C14.825 12.5 15.4969 13.1719 15.4969 14C15.4969 14.8282 14.825 15.5 14 15.5ZM20.2375 15.5C19.4125 15.5 18.7407 14.8282 18.7407 14C18.7407 13.1719 19.4125 12.5 20.2375 12.5C21.0625 12.5 21.7344 13.1719 21.7344 14C21.7344 14.8282 21.0625 15.5 20.2375 15.5Z"
                  fill="#003986"
                />
              </svg>
              Messgage
            </button>
            <button className={css.hireMeBtn}>Hire Me</button>
          </div>
        </div>
        <div className={css.introduction}>
          <p className={css.title}>Introduction</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, dolor tempora quam amet repellendus suscipit libero
            illo? Officia quos excepturi enim sapiente quia hic eum modi harum
            quasi et. Laborum.
          </p>
        </div>
        <div className={css.workHistory}>
          <p className={css.title}>Work History</p>
          <p>20 jobs completed</p>
        </div>
        <div className={css.skills}>
          <p className={css.title}>Skills</p>
          <div className={css.skillDetails}>
            <p>web dev</p>
            <p>graphics</p>
          </div>
        </div>
        <p className={css.title}>Portfolio</p>
        <div className={css.portfolio}>
          <div className={css.portfolioTable}>
            <img src={portfolioImg} alt="portfolio Img" />
            <p className={css.portfolioSubTitle}>Title of portfolio</p>
          </div>
          <div className={css.portfolioTable}>
            <img src={portfolioImg} alt="portfolio Img" />
            <p className={css.portfolioSubTitle}>Title of portfolio</p>
          </div>
          <div className={css.portfolioTable}>
            <img src={portfolioImg} alt="portfolio Img" />
            <p className={css.portfolioSubTitle}>Title of portfolio</p>
          </div>
          <div className={css.portfolioTable}>
            <img src={portfolioImg} alt="portfolio Img" />
            <p className={css.portfolioSubTitle}>Title of portfolio</p>
          </div>
          <div className={css.portfolioTable}>
            <img src={portfolioImg} alt="portfolio Img" />
            <p className={css.portfolioSubTitle}>Title of portfolio</p>
          </div>
          <div className={css.portfolioTable}>
            <img src={portfolioImg} alt="portfolio Img" />
            <p className={css.portfolioSubTitle}>Title of portfolio</p>
          </div>
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
      <p className={css.title}>You may also like&gt;</p>
      <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
          <FreelancerCard />
        </div>
    </div>
  );
}

export default VisitFreelancerProfile;
