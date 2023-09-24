import { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCatagories = () => {
  const [jobCategories, setJobCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setJobCategories(data));
  }, []);
  console.log(jobCategories);
  return (
    <div>
      <div className="text-center my-10">
        <h3 className="font-semibold text-5xl">Job Category List</h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {jobCategories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCatagories;
