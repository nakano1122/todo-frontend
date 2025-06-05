const TaskMain = ({ task_id }: { task_id: string }) => {
  console.log("Task ID:", task_id);
  const taskDetails = {
    id: task_id,
    title: "プレゼン資料の最終確認",
    urgency: "緊急",
    dueDate: "明日",
    assignee: "田中太郎",
    createdDate: "2024年01月15日",
    updatedDate: "2024年01月20日",
    description:
      "来週の重要なプレゼンテーションに向けて、資料の最終確認を行う必要があります。特に以下の点を重点的にチェックしてください：\n\n• スライドの文字サイズと可読性\n• グラフや図表の正確性\n• 発表時間に合わせた内容調整\n• 質疑応答用の補足資料準備",
  };
  return (
    <div className="bg-white shadow px-6 py-5 rounded-xl">
      <div className="flex justify-between">
        <div className="font-bold text-2xl text-gray-900">
          プレゼン資料の最終確認
        </div>
        <div className="font-bold text-xl text-red-500">緊急</div>
      </div>
      <div className="pt-5">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 font-semibold text-gray-700 text-left">
                期限
              </td>
              <td className="py-3 px-6 text-gray-900 text-right">
                {taskDetails.dueDate}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 font-semibold text-gray-700 text-left">
                担当者
              </td>
              <td className="py-3 px-6 text-gray-900 text-right">
                {taskDetails.assignee}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-6 font-semibold text-gray-700 text-left">
                作成日
              </td>
              <td className="py-3 px-6 text-gray-900 text-right">
                {taskDetails.createdDate}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 font-semibold text-gray-700 text-left">
                更新日
              </td>
              <td className="py-3 px-6 text-gray-900 text-right">
                {taskDetails.updatedDate}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pt-6">
        <h3 className="font-semibold text-xl text-gray-800 border-b-2 border-blue-500 pb-2">
          詳細説明
        </h3>
        <div className="pt-3">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line pl-3">
              {taskDetails.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskMain;
