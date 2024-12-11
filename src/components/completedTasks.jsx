import {completedTasks, renderBadge} from '../utils/tasksUtils';

function CompletedTasks() {
    return (
    <div>
      <h2>Completed Tasks ({completedTasks().length})</h2>
        <ul>
        {completedTasks().map((task) => (
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

export default CompletedTasks;