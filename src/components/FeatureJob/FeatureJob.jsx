/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const FeatureJob = ({ job }) => {
  const { id, logo, job_title, company_name, location, salary } = job;
  // console.log(job);
  return (
    <div className=" border border-blue-400 p-4 rounded-sm shadow-md">
      <img src={logo} alt="" />
      <h3 className="text-2xl font-semibold">{job_title}</h3>
      <p>{company_name}</p>
      <div className="flex gap-2">
        <button className="  border-blue-400 border p-2 rounded-md">
          remote
        </button>
        <button className="border-blue-400 border p-2 rounded-md">
          full time
        </button>
      </div>
      <div className="flex gap-4">
        <h2 className="flex gap-1 my-4">
          <FaMapMarkerAlt className="text-2xl"></FaMapMarkerAlt> {location}
        </h2>
        <h2 className="flex gap-1 my-4">
          <AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}
        </h2>
      </div>
      <Link to={`/job/${id}`}>
        <button className="bg-blue-400 rounded-md px-1 py-2">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeatureJob;
