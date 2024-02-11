import React from 'react'
import { useState } from 'react'

let nextid=0;


const CrudOp = () => {
    const [name,setname]=useState('');
    const [list,setlist]=useState([]);
    const [iname,setiname]=useState('');

    const Insert=()=>{
      const index=3;
      const nextname=[
        ...list.slice(0,index),
        {id:nextid++,name:name},
        ...list.slice(index)
      ];
      setlist(nextname)
      setname('');
    }

  return (
    <div>
      <h1>Add a Location</h1>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>

      <button onClick={()=>{
        setlist([
            ...list,
            {id:nextid++,name:name}  //add new elements at the end
        ]
        )
      }}>Add</button>

      <button onClick={Insert}></button>
      <ol>
        {list.map((item)=>{
            return <li key={item.id}>
                {item.name}{" "}
                <button onClick={()=>{
                    setlist(
                        list.filter((a)=>{
                            return a.id!==item.id  //new array contains only those elements that have passed this condition
                        })
                    )
                }}>Delete</button>

                </li>
        })}
      </ol>
      
    </div>

    
  )
}

export default CrudOp


// to add the elements in the list not prefered way
// ()=>{
//     list.push({
//         id:nextid++,
//         name:name,
//     });
//   }
