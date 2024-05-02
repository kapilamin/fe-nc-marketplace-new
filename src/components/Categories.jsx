import { useState } from "react";
import { useEffect } from "react";

// create button logic
export default function Categories() {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    // populee rop down menu with catagories from api
    fetch(`https://nc-marketplace-sem-1.onrender.com/api/categories`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // loop over the number in the html
        console.log(data.categories[0].category_name, "<<< category data");
        setCategory(data);
      });
  }, []);

  // export the selected selected catogary to item list
  return (
    <div className="dropdown">
      <button className="dropbtn">Categories</button>
      <div className="dropdown-content">
        <a href="#">{Category}</a>
      </div>
    </div>
  );
}
