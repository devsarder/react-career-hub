import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomeBanner from "../HomeBanner/HomeBanner";
import JobCatagories from "../JobCatagories/JobCatagories";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <JobCatagories></JobCatagories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
