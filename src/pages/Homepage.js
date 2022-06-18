import { useState } from "react";
import css from "../assets/styles/Homepage.module.css";
import Card from "../components/Card";
import RecentAndActiveJobTab from "../components/ReacentAndActiveJobTab";
import SignUpToApply from "../components/SignUpToApply";
import SignUpToHire from "../components/SignUpToHire";
import { useNavigate } from "react-router-dom";
import WhyDifferent from "../components/WhyDifferent";

function Homepage() {
  const [activeTab, setJobTo] = useState("activeJobs");
  const handleActiveJobTab = (job) => {
    setJobTo(job);
  };
  let navigate = useNavigate();
  const navigateMeTo = (link) => {
    navigate(link);
  };
  return (
    <div style={{ width: "90%", margin: "auto", marginTop: "10px" }}>
      <div className={css.header}>
        <div className={css.headLeft}>
          <p className={css.headTitle}>
            Enter a new world of &nbsp; <span>Freelancing &nbsp;</span> with
            &nbsp;{"  "}
            <svg
              width="115"
              height="45"
              viewBox="0 0 198 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="29" width="198" height="16" fill="#FFE901" />
              <path
                d="M38.024 2.4H45.8V36H38.024V2.4ZM22.76 36H14.984V2.4H22.76V36ZM38.6 22.224H22.184V15.648H38.6V22.224ZM64.1176 36.384C61.9736 36.384 60.0536 35.968 58.3576 35.136C56.6936 34.304 55.3976 33.04 54.4696 31.344C53.5416 29.616 53.0776 27.424 53.0776 24.768V10.176H60.5656V23.664C60.5656 25.808 61.0136 27.392 61.9096 28.416C62.8376 29.408 64.1336 29.904 65.7976 29.904C66.9496 29.904 67.9736 29.664 68.8696 29.184C69.7656 28.672 70.4696 27.904 70.9816 26.88C71.4936 25.824 71.7496 24.512 71.7496 22.944V10.176H79.2376V36H72.1336V28.896L73.4296 30.96C72.5656 32.752 71.2856 34.112 69.5896 35.04C67.9256 35.936 66.1016 36.384 64.1176 36.384ZM94.8628 36.384C92.6548 36.384 90.5268 36.128 88.4788 35.616C86.4628 35.072 84.8628 34.4 83.6788 33.6L86.1748 28.224C87.3588 28.96 88.7508 29.568 90.3508 30.048C91.9828 30.496 93.5828 30.72 95.1508 30.72C96.8788 30.72 98.0948 30.512 98.7988 30.096C99.5348 29.68 99.9028 29.104 99.9028 28.368C99.9028 27.76 99.6148 27.312 99.0388 27.024C98.4948 26.704 97.7588 26.464 96.8307 26.304C95.9028 26.144 94.8788 25.984 93.7588 25.824C92.6708 25.664 91.5668 25.456 90.4468 25.2C89.3268 24.912 88.3028 24.496 87.3748 23.952C86.4468 23.408 85.6948 22.672 85.1188 21.744C84.5748 20.816 84.3027 19.616 84.3027 18.144C84.3027 16.512 84.7668 15.072 85.6948 13.824C86.6548 12.576 88.0308 11.6 89.8228 10.896C91.6148 10.16 93.7588 9.792 96.2548 9.792C98.0148 9.792 99.8068 9.984 101.631 10.368C103.455 10.752 104.975 11.312 106.191 12.048L103.695 17.376C102.447 16.64 101.183 16.144 99.9028 15.888C98.6548 15.6 97.4388 15.456 96.2548 15.456C94.5908 15.456 93.3748 15.68 92.6068 16.128C91.8388 16.576 91.4548 17.152 91.4548 17.856C91.4548 18.496 91.7268 18.976 92.2708 19.296C92.8468 19.616 93.5988 19.872 94.5268 20.064C95.4548 20.256 96.4628 20.432 97.5508 20.592C98.6708 20.72 99.7908 20.928 100.911 21.216C102.031 21.504 103.039 21.92 103.935 22.464C104.863 22.976 105.615 23.696 106.191 24.624C106.767 25.52 107.055 26.704 107.055 28.176C107.055 29.776 106.575 31.2 105.615 32.448C104.655 33.664 103.263 34.624 101.439 35.328C99.6468 36.032 97.4548 36.384 94.8628 36.384ZM122.235 36.384C119.195 36.384 116.827 35.616 115.131 34.08C113.435 32.512 112.587 30.192 112.587 27.12V4.464H120.075V27.024C120.075 28.112 120.363 28.96 120.939 29.568C121.515 30.144 122.299 30.432 123.291 30.432C124.475 30.432 125.483 30.112 126.315 29.472L128.331 34.752C127.563 35.296 126.635 35.712 125.547 36C124.491 36.256 123.387 36.384 122.235 36.384ZM108.603 16.512V10.752H126.507V16.512H108.603ZM132.534 36V0.383998H140.022V36H132.534ZM159.788 36.384C156.844 36.384 154.252 35.808 152.012 34.656C149.804 33.504 148.092 31.936 146.876 29.952C145.66 27.936 145.052 25.648 145.052 23.088C145.052 20.496 145.644 18.208 146.828 16.224C148.044 14.208 149.692 12.64 151.772 11.52C153.852 10.368 156.204 9.792 158.828 9.792C161.356 9.792 163.628 10.336 165.644 11.424C167.692 12.48 169.308 14.016 170.492 16.032C171.676 18.016 172.268 20.4 172.268 23.184C172.268 23.472 172.252 23.808 172.22 24.192C172.188 24.544 172.156 24.88 172.124 25.2H151.148V20.832H168.188L165.308 22.128C165.308 20.784 165.036 19.616 164.492 18.624C163.948 17.632 163.196 16.864 162.236 16.32C161.276 15.744 160.156 15.456 158.876 15.456C157.596 15.456 156.46 15.744 155.468 16.32C154.508 16.864 153.756 17.648 153.212 18.672C152.668 19.664 152.396 20.848 152.396 22.224V23.376C152.396 24.784 152.7 26.032 153.308 27.12C153.948 28.176 154.828 28.992 155.948 29.568C157.1 30.112 158.444 30.384 159.98 30.384C161.356 30.384 162.556 30.176 163.58 29.76C164.636 29.344 165.596 28.72 166.46 27.888L170.444 32.208C169.26 33.552 167.772 34.592 165.98 35.328C164.188 36.032 162.124 36.384 159.788 36.384ZM180.085 36.384C178.805 36.384 177.701 35.952 176.773 35.088C175.877 34.192 175.429 33.056 175.429 31.68C175.429 30.304 175.877 29.2 176.773 28.368C177.701 27.504 178.805 27.072 180.085 27.072C181.397 27.072 182.501 27.504 183.397 28.368C184.293 29.2 184.741 30.304 184.741 31.68C184.741 33.056 184.293 34.192 183.397 35.088C182.501 35.952 181.397 36.384 180.085 36.384Z"
                fill="#003986"
              />
            </svg>
          </p>
          <p className={css.headSubTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            iste dolores. Aliquam omnis neque esse beatae quibusdam perspiciatis
            nobis numquam repellendus aspernatur repellat, iste dolore minima
            ullam cumque cupiditate fugit.
          </p>
        </div>
        <div className={css.headRight}>
          <img src={require("../assets/icons/frame1.png")} alt="frame1" />
        </div>
      </div>
      <div className={css.exploreButtons}>
        <button className={css.exporeTalents} onClick={()=>navigateMeTo('/explore/talents')}>
          <svg
            width="80"
            height="90"
            viewBox="0 0 94 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 53C60.8071 53 72 41.8071 72 28C72 14.1929 60.8071 3 47 3C33.1929 3 22 14.1929 22 28C22 41.8071 33.1929 53 47 53Z"
              stroke="white"
              stroke-width="6"
            />
            <path
              d="M72.0003 63H73.7603C77.4157 63.001 80.9449 64.3368 83.6849 66.7564C86.4249 69.176 88.187 72.5128 88.6403 76.14L90.5953 91.76C90.7712 93.1671 90.6457 94.5956 90.2273 95.9506C89.8089 97.3055 89.1071 98.556 88.1684 99.619C87.2298 100.682 86.0758 101.533 84.7831 102.116C83.4903 102.699 82.0884 103 80.6703 103H13.3303C11.9122 103 10.5103 102.699 9.21753 102.116C7.92479 101.533 6.77081 100.682 5.83218 99.619C4.89355 98.556 4.19174 97.3055 3.77333 95.9506C3.35491 94.5956 3.22946 93.1671 3.4053 91.76L5.3553 76.14C5.80879 72.5111 7.57238 69.1729 10.3145 66.7531C13.0565 64.3333 16.5882 62.9986 20.2453 63H22.0003"
              stroke="white"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Explore Talents</p>
        </button>
        <button className={css.exploreJobs} onClick={()=>navigateMeTo('/explore/jobs')}>
          <svg
            width="80"
            height="65"
            viewBox="0 0 90 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M70 15C70 11.0218 68.4196 7.20644 65.6066 4.3934C62.7936 1.58035 58.9782 0 55 0H35C31.0218 0 27.2064 1.58035 24.3934 4.3934C21.5804 7.20644 20 11.0218 20 15H15C11.0218 15 7.20644 16.5804 4.3934 19.3934C1.58035 22.2064 0 26.0218 0 30V70C0 73.9782 1.58035 77.7936 4.3934 80.6066C7.20644 83.4196 11.0218 85 15 85H75C78.9782 85 82.7936 83.4196 85.6066 80.6066C88.4196 77.7936 90 73.9782 90 70V30C90 26.0218 88.4196 22.2064 85.6066 19.3934C82.7936 16.5804 78.9782 15 75 15H70ZM55 10H35C33.6739 10 32.4021 10.5268 31.4645 11.4645C30.5268 12.4021 30 13.6739 30 15H60C60 13.6739 59.4732 12.4021 58.5355 11.4645C57.5979 10.5268 56.3261 10 55 10ZM15 25H75C76.3261 25 77.5979 25.5268 78.5355 26.4645C79.4732 27.4021 80 28.6739 80 30V70C80 71.3261 79.4732 72.5979 78.5355 73.5355C77.5979 74.4732 76.3261 75 75 75H15C13.6739 75 12.4021 74.4732 11.4645 73.5355C10.5268 72.5979 10 71.3261 10 70V30C10 28.6739 10.5268 27.4021 11.4645 26.4645C12.4021 25.5268 13.6739 25 15 25Z"
              fill="#003986"
            />
          </svg>

          <p>Explore Jobs</p>
        </button>
      </div>
      <WhyDifferent/>
      <div className={css.footer}>
        <SignUpToHire />
      </div>
      <div className={css.different}>
        <p>
          Explore Jobs by our <br />
          <div>
            <p>
              Category
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
      <RecentAndActiveJobTab
        activeTab={activeTab}
        onTabChange={handleActiveJobTab}
        tab1={"Remote jobs"}
        tab2={"Local jobs"}
      />
      <div className="cardsLayout">
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
        <Card title={"Design & Creative"} subtitle={"120+ jobs available"} />
      </div>
      <SignUpToApply />
    </div>
  );
}

export default Homepage;
