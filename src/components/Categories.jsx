import { useState } from "react";
import { useEffect } from "react";

// create button logic
export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // populee rop down menu with catagories from api
    fetch(`https://nc-marketplace-sem-1.onrender.com/api/categories`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  // export the selected selected catogary to item list
  return (
    <div className="dropdown">
      <button className="dropbtn">Categories</button>
      <div className="dropdown-content">
        {categories.map((indexNum) => {
          const categoryName = indexNum.category_name;
          return <a href="#">{categoryName}</a>;
        })}
      </div>
    </div>
  );
}
