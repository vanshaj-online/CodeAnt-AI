import storage from '../../assets/storageicon.svg'

export default function RepositoryCard({ repo }) {
  const { name, type, size, status, updatedAt } = repo;

  return (
    <div className={`py-6 hover:bg-gray-50 border-b h-[108px]`}>
      <div className="flex items-center justify-between">
        <div className="w-full flex flex-col gap-3 px-6">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="sm:text-[20px] text-base leading-6 font-medium text-[#181D27]">{name}</h3>
            <span className="sm:text-sm text-xs rounded-full border border-[#B2DDFF] text-[#175CD3] py-[2px] pr-[10px] pl-2 bg-[#EFF8FF] ">{status}</span>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:text-sm text-xs text-gray-600 flex-wrap">
            <span className="flex items-center gap-2 sm:text-sm text-xs text-[#181D27]">
              {type}
              <div className="w-2 h-2 rounded-full bg-[#1570EF]"></div>
            </span>
            <div className='flex gap-2 items-center justify-center text-[#181D27]'>
              <img src={storage} alt="" />
              <span className='text-[#181D27] sm:text-sm text-xs'>{size}</span>
            </div>
            <span className='sm:text-sm text-xs text-[#181D27]'>Updated {updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}