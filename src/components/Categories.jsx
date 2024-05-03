import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "./ItemList";

// create button logic
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [clickedCategoryName, setClickedCategoryName] = useState("");

  useEffect(() => {
    // populate rop down menu with catagories from api
    fetch(`https://nc-marketplace-sem-1.onrender.com/api/categories`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  const clickedCategory = (categoryName) => {
    setClickedCategoryName(categoryName);
  };

  // export the selected selected catogary to item list
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {categories.map((indexNum) => {
            const categoryName = indexNum.category_name;
            return (
              <a
                key={categoryName}
                type="button"
                onClick={() => clickedCategory(categoryName)}
              >
                {categoryName}
              </a>
            );
          })}
        </div>
      </div>
      <ItemList clickedCategoryName={clickedCategoryName} />
    </>
  );
}
