const CardSkeleton = () => {
  return (
    <div className="border-[3px] border-black border-opacity-85 flex flex-col gap-3 items-center py-2 px-2 rounded-[10px] justify-between bg-white animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="bg-neutral-200 rounded-[10px] h-[250px] w-[250px] border-[1.5px] border-[rgba(108,75,180,0.15)] flex items-center justify-center" />
        <div className="bg-neutral-200 h-7 w-[200px] rounded-[10px]" />
      </div>
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex flex-col gap-2">
          <div className="bg-neutral-300 h-6 w-[80px] rounded-[10px]" />
          <div className="bg-neutral-300 h-6 w-[80px] rounded-[10px]" />
        </div>
        <div className="bg-neutral-200 h-12 w-[100px] rounded-[11px]" />
      </div>
    </div>
  );
};

export default CardSkeleton;
