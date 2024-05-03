import { useState, useEffect } from "react";

export function ItemList(props) {
  const [items, setItems] = useState([]);

  console.log(props.clickedCategoryName, "<<< this is props");
  const currentCategory = props.clickedCategoryName;

  useEffect(() => {
    if (!currentCategory) {
      fetch(`https://nc-marketplace-sem-1.onrender.com/api/items`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setItems(data.items);
        });
    } else {
      // fetch(`https://nc-marketplace-sem-1.onrender.com/api/items?catigory=${currentCategory}`)
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
      //   setItems(data.items);
    }
  }, []);

  return (
    <>
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
