export default function Logo({ className = '', fontsize='30px' }) {
    return (
      <div className={`flex items-center justify-center gap-3 cursor-pointer ${className}`}>
        <img src="/logo.svg" alt="CodeAnt AI" className={`${fontsize === '30px' ? 'w-[35px]' : 'w-[28.5px]'} h-full md:w-10 md:h-10`} />
        <span className={` md:text-xl flex items-center justify-center xxs:text-lg font-['Satoshi'] ${fontsize}`}>CodeAnt AI</span>
      </div>
    );
  }