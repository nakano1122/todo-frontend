const TodoNowCard = () => {
  return (
    <div className="bg-red-300 rounded-xl px-4 py-3 flex flex-col gap-2">
      <div className="font-bold text-xl">プレゼン資料の最終確認</div>
      <div className="flex justify-between">
        <div className="flex">タグゾーン</div>
        <div className="flex">優先度ゾーン</div>
      </div>
    </div>
  );
};

export default TodoNowCard;
