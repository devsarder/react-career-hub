import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const jobInt = parseInt(id);
  const job = jobs.find((job) => job.id === jobInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;
  console.log(job);

  return (
    <div>
      <div className=" flex gap-5">
        {/*left column */}
        <div className="flex flex-col gap-3 text-gray-500">
          <p>
            <span className="font-semibold text-lg">Job Description:</span>
            {job_description}
          </p>
          <p>
            <span className="font-semibold text-lg">Job responsibility:</span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-semibold text-lg">
              Educational Requirements:
            </span>
            {educational_requirements}
          </p>
          <p>
            <span className="font-semibold text-lg">Experiences:</span>
            {experiences}
          </p>
        </div>
        {/* left column */}
        <div className="border border-orange-600 w-80 h-80"></div>
      </div>

      <div className="text-center">
        <Link to="/">
          <button className="bg-blue-500 px-2 py-1 rounded-md font-semibold">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
