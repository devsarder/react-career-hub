import { useEffect, useState } from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  //   console.log(jobs);
  return (
    <div className="my-10">
      <div className="text-center my-10">
        <h3 className="font-semibold text-5xl">Featured Jobs</h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {jobs.slice(0, dataLength).map((job) => (
          <FeatureJob key={job.id} job={job}></FeatureJob>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="text-center my-4 ">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="bg-blue-500 px-2 py-1 rounded-md font-semibold text-white "
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
