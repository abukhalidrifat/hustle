import editpostImg from "../../assets/icons/editpost.png";
import css from "../../assets/styles/client/Welcome.module.css";
import { useNavigate } from "react-router-dom";

function WelcomeToHustle() {
  let navigate = useNavigate();
  const navigateMeTo = (link) => {
    navigate(link);
  };
  return (
    <div style={{ marginLeft: "26px" }}>
      <div>
        <p className={css.headingTitle}>Welcome to Hustle!</p>
        <p className={css.headingPara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          eveniet nemo eos voluptatibus exercitationem laudantium delectus
          molestiae, odio, tempore tenetur dolor! Molestiae enim est fugit
          totam, cupiditate voluptatem officiis neque!
        </p>
        <button className={css.postButton} onClick={()=>navigateMeTo("/post/job")}>
          <img src={editpostImg} alt="post a job" />
          <p>Post a job!</p>
        </button>
      </div>
    </div>
  );
}

export default WelcomeToHustle;
