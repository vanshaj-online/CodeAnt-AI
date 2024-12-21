import NavigationItems from './NavigationItems';
import Logo from '../common/logo.jsx'

export default function Sidebar() {
  return (
    <div className="hidden md:flex w-60 h-screen gap-4 bg-sidebar border-r flex-col sticky top-0 left-0 pt-6">

      <div className="flex flex-col gap-5 items-start">

        <Logo className='px-4' fontsize='24px'/>

        <div className='px-4'>

          <select name="name" id="name" className='w-full h-10 border-2 outline-none rounded-lg px-2'>

            <option id='name' value="UtkarshDhairyaPanwar" className='text-[16px'>UtkarshDhairyaPa...</option>

          </select>

        </div>

      </div>

      <NavigationItems />

    </div>
  );
}