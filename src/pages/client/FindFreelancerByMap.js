import map from "../../assets/icons/map.png";
import css from "../../assets/styles/client/FindFreelancerByMap.module.css";
import FreelancerCard from "../../components/client/FreelancerCard";

function FindFreelancerByMap() {
  return (
    <div>
      <div className={css.breadcrumb}>
        <p>Explore Talents &gt; Find Nearby freelancers &gt; Map</p>
      </div>
      <div className={css.freelancers}>
        <div className={css.allFreelancers}>
          <svg
            width="40"
            height="50"
            viewBox="0 0 40 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0.5C14.8965 0.506021 10.0036 2.53607 6.39486 6.14484C2.78609 9.75362 0.756041 14.6464 0.75002 19.75C0.743908 23.9206 2.10624 27.9781 4.62802 31.3C4.62802 31.3 5.15302 31.9913 5.23877 32.091L20 49.5L34.7683 32.0823C34.8453 31.9895 35.372 31.3 35.372 31.3L35.3738 31.2948C37.8943 27.9743 39.256 23.9187 39.25 19.75C39.244 14.6464 37.2139 9.75362 33.6052 6.14484C29.9964 2.53607 25.1036 0.506021 20 0.5ZM20 26.75C18.6155 26.75 17.2622 26.3395 16.111 25.5703C14.9599 24.8011 14.0627 23.7079 13.5329 22.4288C13.003 21.1497 12.8644 19.7422 13.1345 18.3844C13.4046 17.0265 14.0713 15.7792 15.0503 14.8003C16.0292 13.8213 17.2765 13.1546 18.6344 12.8845C19.9923 12.6144 21.3997 12.753 22.6788 13.2828C23.9579 13.8127 25.0511 14.7099 25.8203 15.861C26.5895 17.0122 27 18.3655 27 19.75C26.9977 21.6058 26.2595 23.3849 24.9472 24.6972C23.635 26.0094 21.8558 26.7477 20 26.75Z"
              fill="#FF1102"
            />
          </svg>
          <p>Freelancers</p>
        </div>
        <div className={css.availableFreelancer}>
          <svg
            width="40"
            height="50"
            viewBox="0 0 40 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0.5C14.8965 0.506021 10.0036 2.53607 6.39486 6.14484C2.78609 9.75362 0.756041 14.6464 0.75002 19.75C0.743908 23.9206 2.10624 27.9781 4.62802 31.3C4.62802 31.3 5.15302 31.9913 5.23877 32.091L20 49.5L34.7683 32.0823C34.8453 31.9895 35.372 31.3 35.372 31.3L35.3738 31.2948C37.8943 27.9743 39.256 23.9187 39.25 19.75C39.244 14.6464 37.2139 9.75362 33.6052 6.14484C29.9964 2.53607 25.1036 0.506021 20 0.5ZM20 26.75C18.6155 26.75 17.2622 26.3395 16.111 25.5703C14.9599 24.8011 14.0627 23.7079 13.5329 22.4288C13.003 21.1497 12.8644 19.7422 13.1345 18.3844C13.4046 17.0265 14.0713 15.7792 15.0503 14.8003C16.0292 13.8213 17.2765 13.1546 18.6344 12.8845C19.9923 12.6144 21.3997 12.753 22.6788 13.2828C23.9579 13.8127 25.0511 14.7099 25.8203 15.861C26.5895 17.0122 27 18.3655 27 19.75C26.9977 21.6058 26.2595 23.3849 24.9472 24.6972C23.635 26.0094 21.8558 26.7477 20 26.75Z"
              fill="#FFE901"
            />
          </svg>
          <p>Available Freelancers</p>
        </div>
      </div>
      <div className={css.map}>
        <img src={map} alt="map" />
      </div>
      <div style={{ padding: "30px" }}>
        <p className={css.question}>
          What type of freelancers you are looking for?
        </p>
        <select className={css.select} name="type">
          <option value="Web dev">Web Dev</option>
          <option value="Web dev">Graphics</option>
        </select>
      </div>
      <div style={{ marginTop: "20px", padding: "30px" }}>
        <p style={{ color: "#003986", fontSize: "20px", fontWeight: "500" }}>
          Available Freelancers &gt;
        </p>
        <div className="cardsLayout">
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
    </div>
  );
}

export default FindFreelancerByMap;
