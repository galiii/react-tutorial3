import React from 'react';


export default function List({tasks}){
return(
    <div className="App">
        <ul>
            {
                tasks.map((task,index)=><li key={index}>{task}</li>)
            }
        </ul>
    </div>
)
}