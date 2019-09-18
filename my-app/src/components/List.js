/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


function List({tasks,deleteItem}){
    const items = tasks;
return(
    <div className="list">
        <ul>
            {
                items.map((task,index)=> (
                <li key={index}>
                {task}
                <a  
                onClick={()=> deleteItem(task,index)}>
                    [X]
                    </a>
                </li>
                ))
            }
        </ul>
    </div>
)
}

export default List;