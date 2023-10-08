import React, { useState } from 'react';
import './style.css';

export default function App() {
  const tasks = ['One', 'Two', 'Three'];
  const [toDo, setToDo] = useState(tasks);
  const [done, setDone] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (task) => {
    return (event) => event.dataTransfer.setData('id', task);
  };

  const handleDoneDrop = (event) => {
    const data = event.dataTransfer.getData('id');
    setToDo((previous) => previous.filter((task) => task !== data));
    setDone((previous) => [...previous, data]);
  };

  const handleToDoDrop = (event) => {
    const data = event.dataTransfer.getData('id');
    setDone((previous) => previous.filter((task) => task !== data));
    setToDo((previous) => [...previous, data]);
  };

  const resetState = () => {
    console.log(toDo);
    console.log(tasks);
    console.log(done);
    // Get last element from done

    // Add to toDo
  };
  return (
    <div className="list-card">
      <div
        className="card list-card-todo"
        onDragOver={handleDragOver}
        onDrop={handleToDoDrop}
      >
        <b>Todo</b>
        <div className="task-list">
          {toDo.map((task) => (
            <div className="task" draggable onDragStart={handleDragStart(task)}>
              {task}
            </div>
          ))}
        </div>
      </div>
      <div
        className="card list-card-done"
        onDragOver={handleDragOver}
        onDrop={handleDoneDrop}
      >
        <b>Done</b>
        <div className="task-list">
          {done.map((task) => (
            <div className="task" draggable onDragStart={handleDragStart(task)}>
              {task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={resetState}>Undo</button>
      </div>
    </div>
  );
}



h1,
p {
  font-family: Lato;
}
.list-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  justify-content: space-around;
}
.card {
  height: 50vh;
  text-align: center;
  padding-top: 1em;
}
.card.list-card-todo {
  background-color: aliceblue;
}
.card.list-card-done {
  background-color: rgb(202, 248, 202);
}
.task {
  display: block;
  border: 1px solid red;
  padding: 1em;
  margin: 1em;
  border-radius: 5px;
}
