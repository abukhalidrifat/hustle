import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Home from "./pages/client/Home";
import Footer from "./components/Footer";
import PostAJob from "./pages/client/PostAJob";
import ClientExploreTalents from "./pages/client/ClientExploreTalents";
import FindFreelancerByMap from "./pages/client/FindFreelancerByMap";
import VisitFreelancerProfile from "./pages/client/VisitFreelancerProfile";
import ClientProfile from "./pages/client/ClientProfile";
import FreelancerExploreJobs from "./pages/freelancer/FreelancerExploreJobs";
import FreelancerJobDetails from "./components/freelancer/FreelancerJobDeatils";
import FreelancerEnterApplication from "./components/freelancer/FreelancerEnterApplication";
import Freelancerjob from "./pages/freelancer/FreelancerJob";
import FreelancerEarning from "./pages/freelancer/FreelancerEarning";
import FreelancerProfile from "./pages/freelancer/FreelancerProfile";
import Homepage from "./pages/Homepage";
import ExploreJobs from "./pages/ExploreJobs";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import AboutUs from "./pages/Aboutus";

function App() {
  const [isAuth, setAuth] = useState(false);
  const [switchProfile, setSwitchProfile] = useState(true); //true for client navs
  const handleSwitchProfile = () => {
    setSwitchProfile((prev) => !prev);
  };
  const handleAuth = () => {
    setAuth((prev) => !prev);
  };

  // const hasWindow = typeof window !== "undefined";

  // function getWindowDimensions() {
  //   const width = hasWindow ? window.innerWidth : null;
  //   const height = hasWindow ? window.innerHeight : null;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // const [windowDimensions, setWindowDimensions] = useState(
  //   getWindowDimensions()
  // );
  // useEffect(() => {
  //   if (hasWindow) {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }
  // }, [hasWindow]);
  return (
    <div className="App">
      <Navbar
        switchProfile={switchProfile}
        handleSwitchProfile={handleSwitchProfile}
        isAuth={isAuth}
        switchAuth={handleAuth}
      />
      <ResponsiveNavbar
        switchProfile={switchProfile}
        handleSwitchProfile={handleSwitchProfile}
        isAuth={isAuth}
        switchAuth={handleAuth}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/explore/jobs" element={<ExploreJobs />} />
        {/* client routes start*/}
        <Route path="/home" element={<Home />} />
        <Route path="/post/job" element={<PostAJob />} />
        <Route path="/explore/talents" element={<ClientExploreTalents />} />
        <Route path="/find/freelancer/map" element={<FindFreelancerByMap />} />
        <Route
          path="/view/freelancer/profile/:id"
          element={<VisitFreelancerProfile />}
        />
        <Route path="/client/profile/:id" element={<ClientProfile />} />
        {/* client routes end && freelancer routes start*/}
        <Route
          path="/freelancer/explore/jobs"
          element={<FreelancerExploreJobs />}
        />
        <Route path="/job/details/:id" element={<FreelancerJobDetails />} />
        <Route path="/job/apply/:id" element={<FreelancerEnterApplication />} />
        <Route path="/freelancer/jobs" element={<Freelancerjob />} />
        <Route path="/freelancer/earnings" element={<FreelancerEarning />} />
        <Route path="/freelancer/profile/:id" element={<FreelancerProfile />} />
      </Routes>
      <Footer switchProfile={switchProfile} isAuth={isAuth} />
    </div>
  );
}

export default App;
