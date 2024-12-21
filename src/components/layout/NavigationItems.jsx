import { IoCodeSlashOutline, IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { LuBookMinus } from "react-icons/lu";
import { IoMdCloudOutline } from "react-icons/io";
import NavigationItem from './NavigationItem';

export default function NavigationItems() {
  const mainItems = [
    { icon: HiOutlineHome, text: 'Repositories', active: true },
    { icon: IoCodeSlashOutline, text: 'AI Code Review' },
    { icon: IoMdCloudOutline, text: 'Cloud Security' },
    { icon: LuBookMinus, text: 'How to Use' },
    { icon: IoSettingsOutline, text: 'Settings' },
  ];

  const bottomItems = [
    { icon: IoCallOutline, text: 'Support' },
    { icon: MdLogout, text: 'Logout' },
  ];

  return (
    <div className="flex flex-col h-max md:h-full items-center md:py-0 md:px-4 px-2 pt-2 pb-4 w-full">
      <div className="md:flex-1 w-full">
        {mainItems.map((item, index) => (
          <NavigationItem 
            key={index} 
            {...item} 
          />
        ))}
      </div>
      <div className="md:border-t w-full">
        {bottomItems.map((item, index) => (
          <NavigationItem 
            key={index} 
            {...item}
          />
        ))}
      </div>
    </div>
  );
}