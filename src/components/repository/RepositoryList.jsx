import RepositoryHeader from './RepositoryHeader';
import RepositorySearch from './RepositorySearch';
import RepositoryCard from './RepositoryCard';

const repositories = [
  {
    name: 'design-system',
    type: 'React',
    size: '7320 KB',
    status: 'Public',
    updatedAt: '1 day ago'
  },
  {
    name: 'codeant-ci-app',
    type: 'Javascript',
    size: '5871 KB',
    status: 'Private',
    updatedAt: '2 days ago'
  },
  {
    name: 'analytics-dashboard',
    type: 'Python',
    size: '4521 KB',
    status: 'Private',
    updatedAt: '5 days ago'
  },
  {
    name: 'mobile-app',
    type: 'Swift',
    size: '3096 KB',
    status: 'Public',
    updatedAt: '3 days ago'
  },
  {
    name: 'e-commerce-platform',
    type: 'Java',
    size: '6210 KB',
    status: 'Private',
    updatedAt: '6 days ago'
  },
  {
    name: 'blog-website',
    type: 'HTML/CSS',
    size: '1876 KB',
    status: 'Public',
    updatedAt: '4 days ago'
  },
  {
    name: 'social network',
    type: 'PHP',
    size: '5432 KB',
    status: 'Private',
    updatedAt: '7 days ago'
  },
];

export default function RepositoryList() {
  return (
    <div className="flex-1 md:p-4 bg-[#fafafa] w-full h-screen">
      <div className='bg-white md:rounded-xl border w-full relative h-full overflow-y-scroll wrapper'>
        <div className='py-4 px-6 border-b sticky top-0 bg-white'>
          <RepositoryHeader />
          <RepositorySearch />
        </div>
        <div className="bg-white rounded-xl">
          {repositories.map((repo, index) => (
            <RepositoryCard key={index} repo={repo} index={index} len={repositories.length} />
          ))}
        </div>
      </div>
    </div>
  );
}