import React from 'react';
import List from './List'


class Todo extends React.Component{

constructor(props){
 super(props);
 
 this.state = {
 tasks : [], //to store every value witch we passing to our todo list
 term :'' //to store what we passing as a value to our input 
 };

}


//input on value onAddItem method
onAddItem = (e) => {
  /*
  value - target takes what stored in our state as term

  onAddItem is a function witch changes our state depanding on the current input value.
  to change state we need this.setState() witch also triggers our UI updates
  */
  this.setState({term: e.target.value});
}

//Form with onSubmit method 
//Now we need to warp our input field with an add button
onSubmitItem = (e) => {
  //preventDefualt() method stops default action of an element from happing 
  e.preventDefault(); 

  this.setState({
  /*
  cleans the input fields inside a form after a submit action is triggered, 
  by resetting 'term' to the initinal empty string value
  */ 
    term:'',
  //pushes every 'term' to our array of tasks after submit
    tasks: [...this.state.tasks,this.state.term]
  });
}

render(){
  return(
      <div className="App todo">
        <label>Todo List</label>
        <List tasks={this.state.tasks}/>
          <form  onSubmit={this.onSubmitItem}>
             
            <input 
              value={this.state.term} 
              onChange ={this.onAddItem} 
              placeholder="Add Task">
            </input> 
            <button>ADD</button>
          </form>
          
      </div>
  );  
}

};


export default Todo;