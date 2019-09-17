import React from 'react';


function List(props){
    const items = props.tasks;
return(
    <div className="list">
        <ul>
            {
                items.map((task,index)=> (
                <li key={index}>
                {task}
                <a 
                herf="#"
                onClick={()=>props.deleteItem(task,index)}
                >[X]</a>
                </li>
                ))
            }
        </ul>
    </div>
)
}

export default List;