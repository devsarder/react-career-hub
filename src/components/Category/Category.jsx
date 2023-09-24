/* eslint-disable react/prop-types */
const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-gray-200 shadow-orange-200 rounded-md p-3 ">
      <img src={logo} alt="" />
      <h3>{category_name}</h3>
      <p>{availability}</p>
    </div>
  );
};

export default Category;
