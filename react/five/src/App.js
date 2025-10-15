import './App.css';
import { useState } from 'react';
import Counter from './Counter';
// import Person from './Person';
// import Modal from './Modal';
// import Item from './Item';
import Task from './Task';
import Form from './Form';

function App() {

  // let [tasks, setTasks] = useState([
  //   {
  //     text: "Выучить JavaScript",
  //     done: false
  //   },
  //   {
  //     text: "Познакомиться с React",
  //     done: false
  //   },
  //   {
  //     text: "Устроиться на работу",
  //     done: false
  //   }
  // ])

  // let addTask = text => {
  //   let newTask = [...tasks, { text }];
  //   setTasks(newTask);
  // }

  // let doneTask = index => {
  //   let newTask = [...tasks];
  //   newTask[index].done = !newTask[index].done; 
  //   setTasks(newTask);
  // }

  // let deleteTask = index => {
  //   let newTask = [...tasks];
  //   newTask.splice(index,1);
  //   setTasks(newTask)
  // }

  let [isCounter, setCounter] = useState(true);
  return (
    <div className="App">
      <div className='task-list'>
        <button onClick={() => setCounter(!isCounter)}>Togle Counter</button>
        {/* {
          console.log(tasks)
        } */}
        {isCounter && <Counter />}
  {/* <Person />
      <Modal />
      <Item /> */}
        {/* {
          tasks.map((task, index) =>
            <Task
              key={index}
              task={task}
              doneTask={doneTask}
              index={index}
              deleteTask={deleteTask}
            />
          )
        }
        <Form addTask={addTask} /> */}
      </div>
    </div>
  );
}

export default App;