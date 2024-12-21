import { useNavigate } from "react-router-dom";

export default function NavigationItem({ icon: Icon, text, active }) {

  const navigate = useNavigate()

  function logout() {
    if (text == 'Logout') {
      navigate('/')
    }
  }

  return (
    <button
      onClick={logout}
      className={`
        flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg w-full
        ${active ? 'md:bg-[#1570EF] md:text-white' : 'md:hover:bg-gray-100'}
      `}
    >
      <Icon className="text-lg" />
      <span className={`text-[16px] ${active ? 'md:text-white' : "md:text-[#181d27]"} whitespace-nowrap font-semibold`}>{text}</span>
    </button>
  );
}