import tasks from "../data/tasks";

function completedTasks() {
  const completedTasks = tasks.filter((task) => task.state === "completed");


  return completedTasks;
}

function currentTasks() {
  const currentTasks = tasks.filter((task) => task.state === "backlog" || task.state === "in_progress");


  return currentTasks; 
}

export { completedTasks, currentTasks };