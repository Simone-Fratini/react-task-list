import { currentTasks, renderBadge } from '../utils/tasksUtils';

function CurrentTasks() {
  return (
    <div>
      <h2>Current Tasks ({currentTasks().length})</h2>
        <ul>
        {currentTasks().map((task) => (
          <li className='py-2'>
            <div>
              <strong>{task.title}</strong>
              {renderBadge(task.state)}
            </div>
            <div>Priority: {task.priority}</div>
            <div>Est. time: {task.estimatedTime}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrentTasks;