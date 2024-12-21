
import NavigationItems from './NavigationItems';
import Logo from '../common/logo';

export default function MobileMenu({ isOpen }) {

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed top-[65px] bg-white md:hidden h-max w-full border-b">

      <div className="flex flex-col">

        <div className="flex-1 flex flex-col overflow-y-auto gap-3 pt-3">

          <div className='px-4'>

            <select name="name" id="name" className='w-full h-10 border-2 outline-none rounded-lg px-2'>

              <option id='name' value="UtkarshDhairyaPanwar" className='text-[16px'>UtkarshDhairyaPanwar</option>

            </select>

          </div>

          <NavigationItems />

        </div>

      </div>

    </div>
  );
}