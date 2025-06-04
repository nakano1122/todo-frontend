import TodoNowList from "./components/TodoNowList";

const Dashboard = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex-col w-5/11">
        <TodoNowList />
      </div>
    </div>
  );
};

export default Dashboard;
