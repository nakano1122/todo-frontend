const Statistics = () => {
  return (
    <div className="bg-white shadow px-5 py-4 rounded-xl flex flex-col gap-4">
      <div className="text-gray-600 font-bold text-2xl flex gap-1">
        <span>📊</span>
        <span>統計情報</span>
      </div>
      <div className="grid grid-cols-2 gap-4 p-3">
        <div className="aspect-square bg-blue-50 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-blue-600">5</div>
          <div className="text-sm text-gray-600 text-center">今日のタスク</div>
        </div>
        <div className="aspect-square bg-green-50 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-green-600">3</div>
          <div className="text-sm text-gray-600 text-center">完了済み</div>
        </div>
        <div className="aspect-square bg-red-50 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-red-600">2</div>
          <div className="text-sm text-gray-600 text-center">緊急</div>
        </div>
        <div className="aspect-square bg-purple-50 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-purple-600">60%</div>
          <div className="text-sm text-gray-600 text-center">完了率</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
