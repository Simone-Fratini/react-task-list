import tasks from "../data/tasks";

function completedTasks() {
  const completedTasks = tasks.filter((task) => task.state === "completed");


  return completedTasks;
}

function currentTasks() {
  const currentTasks = tasks.filter((task) => task.state === "backlog" || task.state === "in_progress");


  return currentTasks; 
}

function renderBadge(state) {
  if (state === 'backlog') {
    return <div className="badge text-bg-warning px-2 mx-2">{state}</div>;
  } else if (state === 'completed') {
    return <div className="badge text-bg-success px-2 mx-2">{state}</div>;
  }else {
    return <div className="badge text-bg-danger px-2 mx-2">{state}</div>;
  }
}


export { completedTasks, currentTasks, renderBadge };