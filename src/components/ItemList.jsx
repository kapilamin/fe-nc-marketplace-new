import { useState } from "react"
import { useEffect } from "react"

export function ItemList (){

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`https://nc-marketplace-sem-1.onrender.com/api/items`)
        .then(response => {return response.json()})
        .then((data)=>{
            if (data && data.items) {
                const listItems = data.items.map(item => ( 
                    <li key={item.item_id} className="itemList">
                        <p>{item.item_name}</p>
                        <img src={item.img_url} alt={item.item_name} style={{ width: '150px', height: '150px' }} />
                        <p>Category: {item.category_name}</p>
                        <p>Description: {item.description}</p>
                        <p>Price: £{item.price / 100}</p>
                    </li>
                ));
                setItems(listItems);}
        })    
    }, [])
    
   
    return(
        <ul>
        {items}
        </ul>
        
    )
}