import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from '../Loader'
export default function LoginOptions({ loginOptions }) {

  const navigate = useNavigate()

  const [nav, setnav] = useState(false)

  function handleLogin() {
    setnav(true)
    setTimeout(() => {
      setnav(false)
      navigate('/home')
    }, 500);
  }

  return (
    <>
      {nav && <Loader />}

      <div className="space-y-4 w-full">

        {loginOptions.map(({ icon: Icon, text }, index) => (

          <button
            onClick={handleLogin}
            key={index}
            className="max-w-[446px] w-[90%] flex items-center justify-center gap-3 px-4 py-2.5 border rounded-lg hover:bg-gray-50 transition-colors h-[58px] mx-auto"
          >

            <img src={Icon} alt="" className='h-6 w-6 object-cover object-center' />

            <span className="text-[16px] leading-6 font-semibold xxs:text-xs">{text}</span>

          </button>
        ))}
      </div>

    </>

  );
}