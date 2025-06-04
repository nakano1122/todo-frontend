import Calender from "./components/calendar/Calender";
import Statistics from "./components/statistics/Statistics";
import AllTodoList from "./components/task_management/AllTodoList";
import TodoNowList from "./components/todo_now/TodoNowList";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start w-full justify-between gap-3 py-1">
      <div className="flex flex-col w-3/4 lg:w-4/5 gap-3">
        <TodoNowList />
        <AllTodoList />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/5 gap-3">
        <Calender />
        <Statistics />
      </div>
    </div>
  );
};

export default Dashboard;
