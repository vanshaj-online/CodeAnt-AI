import { useState } from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import Logo from '../common/logo'

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="px-4 md:hidden w-full h-[65px] mobile-header">

        <div className="bg-white flex w-full items-center justify-between h-full ">

          <Logo />

          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >

            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}

          </button>

        </div>

      </header>

      {isMenuOpen && <MobileMenu isOpen={isMenuOpen}/>}

    </>
  );
}