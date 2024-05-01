import { useState } from "react"
import { useEffect } from "react"

export function ItemList (){

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`https://nc-marketplace-sem-1.onrender.com/api/items`)
        .then((response)=> response.json)
        .then((data)=>{
            console.log(data);
            {data.items.map((item)=>{
            setItems(
                <li key={item.item_id}>
                    <p>{item.item_name}</p>
                </li>
            )
            })}
            console.log(data.items);
        })
    }, [items])
    
   
    return(
        
        <ul>
            <p>"HELLO"</p>
            
        </ul>
        
    )
}