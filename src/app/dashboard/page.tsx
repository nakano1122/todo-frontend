import AllTodoList from "./components/task_management/AllTodoList";
import TodoNowList from "./components/todo_now/TodoNowList";

const Dashboard = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col w-5/7 gap-3">
        <TodoNowList />
        <AllTodoList />
      </div>
    </div>
  );
};

export default Dashboard;
