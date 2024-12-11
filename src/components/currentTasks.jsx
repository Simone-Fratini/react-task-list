import { currentTasks, completedTasks } from '../utils/tasksUtils';

function CurrentTasks() {
  return (
    <div>
      <h2>Current Tasks {currentTasks}</h2>
        <ul>
            {taskUtils.getCurrentTasks()}
        </ul>
    </div>
  );
}

export default CurrentTasks;