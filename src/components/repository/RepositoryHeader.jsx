import { FaSync } from 'react-icons/fa';
import { HiPlus  } from "react-icons/hi2";

export default function RepositoryHeader() {
  return (
    <div className="flex flex-col gap-4 mb-6 lg:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Repositories</h1>
        <p className="text-gray-600 text-sm">33 total repositories</p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <button className="flex items-center border-2 gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <FaSync size='14px' />
          <span className="inline-block text-sm whitespace-nowrap">Refresh All</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg">
          <HiPlus size='14px' />
          <span className="inline-block text-sm whitespace-nowrap">Add Repository</span>
        </button>
      </div>
    </div>
  );
}