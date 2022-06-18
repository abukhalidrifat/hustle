import React, { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import css from "../assets/styles/ResponsiveNavbar.module.css";
import bellIcon from "../assets/icons/bell.png";
import avatar from "../assets/icons/profilepic.jpg";

function ResponsiveNavbar({
  isAuth,
  switchProfile,
  switchAuth,
  handleSwitchProfile,
}) {
  let [showNav, setShowNav] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  const handleNavBanner = () => {
    setShowNav((prev) => !prev);
  };
  const navigateMeTo = (link) => {
    navigate(link);
  };
  const [showProfile, handleShowProfile] = useState(false);

  const handleNavigation = () => {
    if (switchProfile) {
      navigateMeTo(`/client/profile/${id}`);
    } else {
      navigateMeTo(`/freelancer/profile/${id}`);
    }
  };

  let myProfile = (
    <div className={css.profile}>
      <div
        className={css.cross}
        onClick={() => handleShowProfile(!showProfile)}
      >
        X
      </div>
      <div style={{ display: "flex" }}>
        <img src={avatar} className={css.avatarImg} alt="avatar" />
        <div style={{ marginTop: "4px" }}>
          <p className={css.profileName}>Your Name</p>
          <p className={css.profileTitle}>Your Title</p>
          {switchProfile ? (
            <button className={css.mode}>Client Mode</button>
          ) : (
            <button className={css.mode}>Freelancer Mode</button>
          )}
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid white",
          margin: "10px 5px 10px 5px",
        }}
      ></div>
      <div>
        <div
          className={css.profileOptions}
          onClick={() => {
            handleNavigation();
            handleSwitchProfile(!showProfile);
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.375 1.75V5.25L9.625 6.125L7 3.5L3.5 7L6.125 9.625L5.25 11.375H1.75V16.625H5.25L6.125 18.375L3.5 21L7 24.5L9.625 21.875L11.375 22.75V26.25H16.625V22.75L18.375 21.875L21 24.5L24.5 21L21.875 18.375L22.75 16.625H26.25V11.375H22.75L21.875 9.625L24.5 7L21 3.5L18.375 6.125L16.625 5.25V1.75H11.375Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Settings</p>
        </div>
        <div className={css.profileOptions}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0001 0.555664C10.5388 0.555664 8.13283 1.28552 6.08635 2.65293C4.03987 4.02034 2.44484 5.9639 1.50295 8.23783C0.561056 10.5118 0.314615 13.0139 0.794786 15.4279C1.27496 17.8419 2.46018 20.0593 4.20056 21.7997C5.94095 23.54 8.15834 24.7253 10.5723 25.2054C12.9863 25.6856 15.4885 25.4392 17.7624 24.4973C20.0363 23.5554 21.9799 21.9604 23.3473 19.9139C24.7147 17.8674 25.4446 15.4614 25.4446 13.0001C25.4446 9.69964 24.1335 6.53434 21.7997 4.20056C19.4659 1.86677 16.3006 0.555664 13.0001 0.555664ZM13.0001 23.889C10.8465 23.889 8.74124 23.2504 6.95057 22.0539C5.1599 20.8574 3.76425 19.1568 2.94009 17.1671C2.11594 15.1774 1.9003 12.988 2.32045 10.8758C2.7406 8.76355 3.77767 6.82334 5.30051 5.3005C6.82335 3.77766 8.76356 2.7406 10.8758 2.32045C12.988 1.9003 15.1774 2.11593 17.1671 2.94009C19.1568 3.76424 20.8574 5.1599 22.0539 6.95057C23.2504 8.74123 23.889 10.8465 23.889 13.0001C23.889 15.888 22.7418 18.6577 20.6997 20.6997C18.6577 22.7418 15.888 23.889 13.0001 23.889Z"
              fill="white"
            />
            <path
              d="M13.2256 5.93731C12.3828 5.92338 11.5472 6.09525 10.7783 6.44073C10.0094 6.7862 9.32601 7.29678 8.77672 7.9362C8.70041 8.00692 8.63906 8.09223 8.59631 8.18708C8.55356 8.28194 8.53027 8.3844 8.52783 8.48842C8.52778 8.58438 8.54703 8.67938 8.58444 8.76775C8.62185 8.85612 8.67666 8.93606 8.74559 9.00282C8.81453 9.06958 8.89619 9.1218 8.98572 9.15635C9.07525 9.19091 9.17081 9.2071 9.26672 9.20397C9.47219 9.19888 9.66866 9.11863 9.81894 8.97842C10.2346 8.49128 10.7509 8.09998 11.3323 7.83145C11.9137 7.56292 12.5463 7.42353 13.1867 7.42286C15.0223 7.42286 16.1656 8.60509 16.1656 10.0751V10.114C16.1656 11.8329 14.7967 12.7895 12.6345 12.9529C12.5469 12.9562 12.4611 12.9781 12.3826 13.0169C12.304 13.0558 12.2346 13.1108 12.1788 13.1783C12.123 13.2459 12.0821 13.3245 12.0587 13.4089C12.0354 13.4934 12.0302 13.5818 12.0434 13.6684C12.0434 13.6684 12.0434 15.4729 12.0434 15.8073C12.0627 15.9998 12.1531 16.1782 12.297 16.3077C12.4408 16.4371 12.6277 16.5083 12.8212 16.5073H12.9067C13.0992 16.488 13.2776 16.3976 13.4071 16.2537C13.5365 16.1099 13.6077 15.923 13.6067 15.7295V14.1273C15.9401 13.8006 17.8301 12.5718 17.8301 10.0206V9.98175C17.8067 7.64842 15.9867 5.93731 13.2256 5.93731Z"
              fill="white"
            />
            <path
              d="M12.8289 20.3497C13.3659 20.3497 13.8011 19.9144 13.8011 19.3775C13.8011 18.8406 13.3659 18.4053 12.8289 18.4053C12.292 18.4053 11.8567 18.8406 11.8567 19.3775C11.8567 19.9144 12.292 20.3497 12.8289 20.3497Z"
              fill="white"
            />
          </svg>

          <p>Help</p>
        </div>
        <div className={css.profileOptions} onClick={switchAuth}>
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.333252 10.9997L6.16659 15.6663V12.1663H16.6666V9.83301H6.16659V6.33301L0.333252 10.9997Z"
              fill="white"
            />
            <path
              d="M13.1678 0.499064C11.7883 0.495238 10.4217 0.765193 9.1472 1.29329C7.87272 1.82138 6.7157 2.59712 5.74316 3.57556L7.39283 5.22523C8.93516 3.6829 10.9862 2.8324 13.1678 2.8324C15.3495 2.8324 17.4005 3.6829 18.9428 5.22523C20.4852 6.76756 21.3357 8.81857 21.3357 11.0002C21.3357 13.1819 20.4852 15.2329 18.9428 16.7752C17.4005 18.3176 15.3495 19.1681 13.1678 19.1681C10.9862 19.1681 8.93516 18.3176 7.39283 16.7752L5.74316 18.4249C7.72533 20.4082 10.362 21.5014 13.1678 21.5014C15.9737 21.5014 18.6103 20.4082 20.5925 18.4249C22.5758 16.4427 23.669 13.8061 23.669 11.0002C23.669 8.1944 22.5758 5.55773 20.5925 3.57556C19.62 2.59712 18.4629 1.82138 17.1885 1.29329C15.914 0.765193 14.5474 0.495238 13.1678 0.499064Z"
              fill="white"
            />
          </svg>
          <p>Log Out</p>
        </div>
      </div>
      <div className={css.switchMode}>
        <button onClick={handleSwitchProfile}>Switch Mode</button>
      </div>
    </div>
  );

  let AuthNavbar = (
    <ul>
      <NavLink
        onClick={handleNavBanner}
        to="/"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.authActive : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/explore/jobs"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.authActive : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Explore Jobs
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/explore/talents"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.authActive : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Explore Talents
      </NavLink>
      <div
        style={{
          display: "flex",
          marginRight: "30px",
          marginTop: "25px",
        }}
      >
        <button
          className={css.loginBtn}
          onClick={() => {
            switchAuth();
            handleNavBanner();
          }}
        >
          Log In
        </button>
        <button className={css.signupBtn}>SignUp</button>
      </div>
    </ul>
  );
  let clientNavbar = (
    <ul>
      <NavLink
        onClick={handleNavBanner}
        to="/"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/explore/talents"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Explore Talents
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/earnings"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Earnings
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/inbox"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Inbox
      </NavLink>
    </ul>
  );
  let freelancerNavbar = (
    <ul>
      <NavLink
        onClick={handleNavBanner}
        to="/freelancer/explore/jobs"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Explore Works
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/freelancer/jobs"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Your Jobs
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/freelancer/earnings"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Earnings
      </NavLink>
      <NavLink
        onClick={handleNavBanner}
        to="/inbox"
        className={({ isActive }) =>
          [css.navlink, isActive ? css.activelink : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Inbox
      </NavLink>
    </ul>
  );
  let NavBanner = (
    <div className={css.navWrapper}>
      <button className={css.cross} onClick={handleNavBanner}>
        X
      </button>
      <div className={css.links}>
        {isAuth
          ? switchProfile
            ? clientNavbar
            : freelancerNavbar
          : AuthNavbar}
      </div>
    </div>
  );
  let profile = (
    <React.Fragment>
      <div className={css.icons}>
        <img src={bellIcon} className={css.bellIcon} alt="notiication" />
        <img
          src={avatar}
          className={css.avatar}
          onClick={() => handleShowProfile(!showProfile)}
          alt="avatar"
        />
      </div>
      {showProfile && myProfile}
    </React.Fragment>
  );
  return (
    <header className="responsiveNav" style={{ padding: "0px 30px 0px 30px" }}>
      {showNav ? NavBanner : null}
      <div className={css.navbar}>
        <div className={css.logo}>
          <h2>
            Hustle<p style={{ display: "inline" }}>.</p>
          </h2>
        </div>
        <div style={{ display: "flex" }}>
          {isAuth ? profile : null}
          <div
            style={{ transform: "rotate(180deg)" }}
            onClick={handleNavBanner}
          >
            <svg viewBox="0 0 100 80" width="40" height="40" fill="#003986">
              <rect y="10" width="60" height="15"></rect>
              <rect y="35" width="80" height="15"></rect>
              <rect y="60" width="100" height="15"></rect>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ResponsiveNavbar;
