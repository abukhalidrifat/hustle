import css from "../../assets/styles/client/ClientExploreTalentHeader.module.css";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router-dom";

function ClientExploreTalentsHeader() {
  let navigate = useNavigate();
  const navigateMeTo = (link) => {
    navigate(link);
  };
  return (
    <div>
      <div className={css.headings}>
        <p className={css.title}>Find Hustler's for your</p>
        <p className={css.subTitle}>professional or local work</p>
        <p className={css.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum
          perspiciatis quisquam! Excepturi nostrum doloremque amet quod,
          incidunt atque, nesciunt magnam laborum, quas tempora quo beatae? Iste
          fugit exercitationem natus?
        </p>
      </div>
      <div className={css.buttons}>
        <button
          className={[css.jobBtn, css.button].join(" ")}
          onClick={() => navigateMeTo("/post/job")}
        >
          Post a job
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.15689 21C0.997018 20.9997 0.838953 20.9662 0.692747 20.9015C0.54654 20.8368 0.41539 20.7424 0.307637 20.6242C0.197935 20.5071 0.114226 20.3681 0.0619973 20.2163C0.0097691 20.0646 -0.00979778 19.9035 0.0045794 19.7436L0.286895 16.6385L13.3287 3.59767L17.4045 7.67335L4.36607 20.713L1.26175 20.9954C1.22689 20.9986 1.1919 21.0001 1.15689 21ZM18.218 6.85844L14.1434 2.78277L16.5875 0.338049C16.6945 0.230883 16.8216 0.145866 16.9615 0.087861C17.1014 0.029856 17.2513 0 17.4027 0C17.5542 0 17.7041 0.029856 17.844 0.087861C17.9839 0.145866 18.111 0.230883 18.218 0.338049L20.662 2.78277C20.7692 2.88981 20.8542 3.01693 20.9122 3.15686C20.9702 3.29679 21 3.44677 21 3.59825C21 3.74972 20.9702 3.89971 20.9122 4.03963C20.8542 4.17956 20.7692 4.30668 20.662 4.41373L18.2191 6.85729L18.218 6.85844Z"
              fill="white"
            />
          </svg>
        </button>
        <button className={[css.freelancerBtn, css.button].join(" ")}
        onClick={() => navigateMeTo("/find/freelancer/map")}>
          <svg
            width="22"
            height="28"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0C8.08367 0.00344047 5.28778 1.16347 3.22563 3.22563C1.16347 5.28778 0.00344073 8.08367 2.58793e-07 11C-0.00349263 13.3832 0.774981 15.7018 2.216 17.6C2.216 17.6 2.516 17.995 2.565 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43552 14.7654 8.77772 14.3259C8.11992 13.8864 7.60723 13.2616 7.30448 12.5307C7.00173 11.7998 6.92252 10.9956 7.07686 10.2196C7.2312 9.44372 7.61216 8.73098 8.17157 8.17157C8.73098 7.61216 9.44372 7.2312 10.2196 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z"
              fill="white"
            />
          </svg>
          Find nearby Freelancers
        </button>
      </div>
      <SearchBar />
    </div>
  );
}

export default ClientExploreTalentsHeader;
