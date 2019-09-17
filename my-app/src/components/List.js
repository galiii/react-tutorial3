import React from 'react';


export default function List({tasks}){
return(
    <div className="list">
        <ul>
            {
                tasks.map((task,index)=> (
                <li key={index}>
                {task}
                <button>X</button>
                </li>
                ))
            }
        </ul>
    </div>
)
}