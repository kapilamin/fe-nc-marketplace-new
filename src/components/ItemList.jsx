import { useState } from "react";
import { useEffect } from "react";
import Categories from "./Categories";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // populate button with catagories

    // if conditions based on selected
    fetch(`https://nc-marketplace-sem-1.onrender.com/api/items`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data && data.items) {
          setItems(data.items);
        }
      });
  }, []);

  return (
    <>
      <Categories />
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
