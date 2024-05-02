import { useState } from "react";
import { useEffect } from "react";
import Categories from "./Categories";

export function ItemList() {
  const [items, setItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useEffect("");
  useEffect(() => {
    // populate button with catagories

    // function to deturmin click
    function handleClick() {
      setCurrentCategory("electronics");
    }

    // if conditions based on selected

    fetch(`https://nc-marketplace-sem-1.onrender.com/api/items`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // filters the array based on the category clicked on
        if (currentCategory) {
          data.filter(
            (item) =>
              item.category_name.toLowerCase() === currentCategory.toLowerCase()
          );
        } else {
          setItems(data.items);
        }
      });
  }, []);

  return (
    <>
      <div className="dropdown">
        <button className="dropbtn" onClick={handleClick()}>
          Categories
        </button>
        <Categories />
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.item_id} className="itemList">
            <p>{item.item_name}</p>
            <img
              src={item.img_url}
              alt={item.item_name}
              style={{ width: "150px", height: "150px" }}
            />
            <p>Category: {item.category_name}</p>
            <p>Description: {item.description}</p>
            <p>Price: £{item.price / 100}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
