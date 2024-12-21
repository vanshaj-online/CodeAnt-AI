import React from 'react';

const Loader = () => {
  return (
    <div className="w-full gap-x-2 flex justify-center items-center h-screen absolute inset-0 z-[99] bg-black/20">
      <div className="w-5 bg-[#9891d9] animate-pulse h-5 rounded-full" />
      <div className="w-5 animate-pulse h-5 bg-[#5e62bd] rounded-full" />
      <div className="w-5 h-5 animate-pulse bg-[#465dde] rounded-full" />
    </div>
  );
}

export default Loader;
