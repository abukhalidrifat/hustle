import FreelancerCard from "./FreelancerCard";

function ItAndDevelopmentFreelancer() {
  return (
    <div>
      <p style={{ color: "#003986", fontSize: "20px", fontWeight: "500" }}>
        It and Development &gt;
      </p>
      <div style={{ display: 'flex',flexWrap:'wrap',justifyContent:'space-between' }}>
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
  );
}

export default ItAndDevelopmentFreelancer;
