import Link from "next/link";

const TodoNowCard = () => {
  return (
    <Link href="/task/1">
      <div className="bg-gradient-to-r from-red-400 to-red-300 border-l-3 rounded-xl px-4 py-3 flex flex-col gap-2">
        <div className="font-bold text-xl text-gray-900">
          プレゼン資料の最終確認
        </div>
        <div className="flex justify-between">
          <div className="flex">明日</div>
          <div className="flex">緊急</div>
        </div>
      </div>
    </Link>
  );
};

export default TodoNowCard;
