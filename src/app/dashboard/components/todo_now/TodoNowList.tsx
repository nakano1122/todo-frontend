import TodoNowCard from "./TodoNowCard";

const TodoNow = () => {
  return (
    <div className="bg-white shadow px-5 py-4 rounded-xl">
      <div className="text-gray-600 font-bold text-2xl pb-2 flex gap-1">
        <span>⚡️</span>
        <span>今やるべきこと</span>
      </div>
      <div className="flex flex-col gap-2">
        <TodoNowCard />
        <TodoNowCard />
        <TodoNowCard />
      </div>
    </div>
  );
};

export default TodoNow;
