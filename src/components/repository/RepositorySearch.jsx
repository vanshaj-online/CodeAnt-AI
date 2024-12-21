import { FaSearch } from 'react-icons/fa';

export default function RepositorySearch() {
  return (
    <div className="relative mb-6 w-full max-w-[366px] h-[20px]">
      <FaSearch className="absolute left-3 top-full transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search Repositories"
        className="w-full pl-10 pr-4 py-2 border-2 rounded-lg focus:outline-none placeholder:text-[16px] placeholder:text-[#414651]"
      />
    </div>
  );
}