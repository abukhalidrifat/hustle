import css from "../../assets/styles/freelancer/FreelancerJobCard.module.css";
import { useNavigate,useParams } from "react-router-dom";

function FreelancerJobCard() {
  let {id} = useParams()
  let navigate = useNavigate();
  const navigateMeTo = (link) => {
    navigate(link);
  };
  return (
    <div className={css.card}>
      <p className={css.title}>Title</p>
      <p className={css.subTitle}>Sub Title for freelancer job</p>
      <p className={css.location}>
        <svg
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 0C4.04184 0.00172024 2.64389 0.581735 1.61282 1.61281C0.58174 2.64389 0.00172609 4.04184 5.85144e-06 5.5C-0.00174059 6.69161 0.387496 7.85089 1.108 8.8C1.108 8.8 1.258 8.9975 1.2825 9.026L5.5 14L9.7195 9.0235C9.7415 8.997 9.892 8.8 9.892 8.8L9.8925 8.7985C10.6126 7.84981 11.0017 6.69107 11 5.5C10.9983 4.04184 10.4183 2.64389 9.38718 1.61281C8.35611 0.581735 6.95816 0.00172024 5.5 0ZM5.5 7.5C5.10444 7.5 4.71776 7.3827 4.38886 7.16294C4.05996 6.94318 3.80362 6.63082 3.65224 6.26537C3.50087 5.89991 3.46126 5.49778 3.53843 5.10982C3.6156 4.72186 3.80608 4.36549 4.08579 4.08579C4.36549 3.80608 4.72186 3.6156 5.10982 3.53843C5.49778 3.46126 5.89991 3.50087 6.26537 3.65224C6.63082 3.80362 6.94317 4.05996 7.16294 4.38886C7.3827 4.71776 7.5 5.10444 7.5 5.5C7.49934 6.03023 7.28841 6.53855 6.91348 6.91348C6.53855 7.28841 6.03023 7.49934 5.5 7.5Z"
            fill="#FFE901"
          />
        </svg>
        <span> </span>
        Location
      </p>
      <p className={css.cardParagraph}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, ipsam
        minima iure soluta deserunt molestiae possimus perspiciatis commodi
        quibusdam sed quia repellendus iusto voluptates magnam ex cum impedit
        non assumenda.
      </p>
      <div className={css.budgetAndExperience}>
        <div className={css.budget}>
          <p>Budget</p>
          <p>$300</p>
        </div>
        <div className={css.experience}>
          <p>Experience</p>
          <p>Level</p>
        </div>
      </div>
      <div className={css.detailsBtn}>
        <p className={css.viewDetails} onClick={()=>navigateMeTo(`/job/details/${id}`)}>View Details</p>
        <button className={css.applyBtn} onClick={()=>navigateMeTo(`/job/apply/${id}`)}>Apply</button>
      </div>
    </div>
  );
}

export default FreelancerJobCard;
