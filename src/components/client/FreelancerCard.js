import avatar from "../../assets/icons/profilepic.jpg";
import css from "../../assets/styles/client/FreelancerCard.module.css";
import { useNavigate, useParams } from "react-router-dom";

function FreelancerCard() {
  let { id } = useParams();
  let navigate = useNavigate();
  const navigateMeTo = (link) => {
    navigate(link);
  };
  return (
    <div
      className={css.card}
      onClick={() => navigateMeTo(`/view/freelancer/profile/${id}`)}
    >
      <div className={css.cardHead}>
        <img src={avatar} className={css.avatar} alt="avatar" />
      </div>
      <div className={css.cardDetails}>
        <p className={css.name}>Clients Name</p>
        <p className={css.jobTitle}>Job title</p>
        <p className={css.location}>
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
          Location
        </p>
      </div>
    </div>
  );
}

export default FreelancerCard;
