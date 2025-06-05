import AllTodoCard from "./AllTodoCard";
import NaviHeader from "./NaviHeader";

const AllTodoList = () => {
  return (
    <div className="bg-white shadow px-5 py-4 rounded-xl flex flex-col gap-4">
      <div className="text-gray-600 font-bold text-2xl flex gap-1">
        <span>📝</span>
        <span>タスク管理</span>
      </div>
      <NaviHeader />
      <button className="bg-emerald-500 p-3 font-bold text-white rounded-xl w-1/3 lg:w-1/5 hover:bg-green-600 transition-colors">
        ＋新しいタスクを追加
      </button>
      <AllTodoCard />
      <AllTodoCard />
      <AllTodoCard />
    </div>
  );
};

export default AllTodoList;
