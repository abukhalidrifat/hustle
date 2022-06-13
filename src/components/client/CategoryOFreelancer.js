import FreelancerCard from "./FreelancerCard";

function CategoryOfFreelancer() {
  return (
    <div>
      <p style={{ color: "#003986", fontSize: "20px", fontWeight: "500" }}>
        Category of Freelancers &gt;
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

export default CategoryOfFreelancer;
