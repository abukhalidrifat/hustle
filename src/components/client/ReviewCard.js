import css from '../../assets/styles/client/ReviewCard.module.css'

function ReviewCard({image}) {
  return (
    <div>
      <div className={css.reviews}>
        <div className={css.reviewCard}>
          <img src={image} alt="profile img" />
          <div className={css.reviewCardDetails}>
            <p className={css.reviewCardQuote}>"</p>
            <p className={css.reviewNote}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              praesentium asperiores aliquam qui harum
            </p>
            <p className={css.reviewCardName}>Name</p>
            <p className={css.reviewCardRatings}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.64179 3.63829L6.6664 3.20586L5.33632 0.509379C5.29999 0.435551 5.24023 0.375786 5.1664 0.339457C4.98124 0.248051 4.75624 0.324223 4.66366 0.509379L3.33358 3.20586L0.358195 3.63829C0.276163 3.65 0.201163 3.68868 0.143741 3.74727C0.0743216 3.81862 0.0360681 3.91461 0.0373865 4.01416C0.0387049 4.1137 0.0794874 4.20864 0.150773 4.27813L2.30351 6.37696L1.79491 9.34063C1.78299 9.40957 1.79062 9.48048 1.81694 9.5453C1.84325 9.61013 1.88721 9.66628 1.94382 9.7074C2.00043 9.74851 2.06743 9.77294 2.13722 9.77792C2.20701 9.7829 2.27679 9.76822 2.33866 9.73555L4.99999 8.33633L7.66132 9.73555C7.73398 9.77422 7.81835 9.78711 7.89921 9.77305C8.10312 9.7379 8.24023 9.54454 8.20507 9.34063L7.69648 6.37696L9.84921 4.27813C9.9078 4.22071 9.94648 4.14571 9.95819 4.06368C9.98983 3.8586 9.84687 3.66875 9.64179 3.63829Z"
                  fill="#F3F737"
                />
              </svg>
              4.2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
