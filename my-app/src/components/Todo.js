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


/*
input on value onAddItem method
value - target takes what stored in our state as term
onAddItem is a function witch changes our state depanding on the current input value.
to change state we need this.setState() witch also triggers our UI updates
*/
onAddItem = (e) => {
  this.setState({term: e.target.value});
}

//Form with onSubmit method 
//Now we need to warp our input field with an add button
onSubmitItem = (e) => {
  e.preventDefault(); //method stops default action of an element from happing  

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

/*
taskDelete the value that should be delete
index is the postion 
*/
deleteItem = (taskDelete,index) => {
const {tasks} = this.state; 
 console.log(taskDelete);
 console.log(index);
 
 tasks.splice(index, 1);//Using slice
 this.setState({tasks:tasks});
}

render(){
  return(
      <div className="App todo">
        <span>Todo List</span>
        <List 
            tasks={this.state.tasks}
            deleteItem={this.deleteItem}
            />
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
}};

export default Todo;