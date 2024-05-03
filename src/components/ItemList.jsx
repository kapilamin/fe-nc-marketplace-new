import { useState, useEffect } from "react";
import Categories from "./Categories";

export function ItemList() {
  const [items, setItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  useEffect(() => {
    fetch(`https://nc-marketplace-sem-1.onrender.com/api/items`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (currentCategory) {
        console.log(data);
        // const filteredItems = data.filter(
        //   (item) =>
        //     item.category_name.toLowerCase() === currentCategory.toLowerCase()
        // );
        // setItems(filteredItems)
      } else {
        setItems(data.items);
      }
    });
  }, []);
  

  return (
    <>
        <Categories/>
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
