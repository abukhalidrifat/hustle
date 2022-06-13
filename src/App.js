import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
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
        <Route path="/explore/jobs" element={<FreelancerExploreJobs />} />
        <Route path="/job/details/:id" element={<FreelancerJobDetails />} />
        <Route path="/job/apply/:id" element={<FreelancerEnterApplication />} />
        <Route path="/freelancer/jobs" element={<Freelancerjob />} />
        <Route path="/freelancer/earnings" element={<FreelancerEarning />} />
        <Route path="/freelancer/profile/:id" element={<FreelancerProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
