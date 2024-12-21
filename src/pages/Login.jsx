import Logo from '../components/common/Logo';
import antImg from '../assets/antmask.svg'
import piechart from '../assets/piechart.svg'
import arrow from '../assets/arrow.svg'
import ant from '../assets/ant.svg'
import Saas from '../components/login/saas';
import SelfHosted from '../components/login/selfHosted';
import PrivacyNotice from '../components/login/PrivacyNotice';
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import bitbucket from '../assets/bitbucket.png'
import azzure from '../assets/azzure.png'
import { useState } from 'react';

export default function LoginPage() {

  const details = [
    {
      num: '30+',
      title: 'language support'
    },
    {
      num: '10K+',
      title: 'developers'
    },
    {
      num: '100K+',
      title: 'hours saved'
    },
  ]

  const loginOptions = [
    { icon: github, text: 'Sign in with Github' },
    { icon: bitbucket, text: 'Sign in with Bitbucket' },
    { icon: azzure, text: 'Sign in with Azure Devops' },
    { icon: gitlab, text: 'Sign in with GitLab' },
  ];

  const [method, setMethod] = useState('saas')

  return (

    <div>


      <div className="h-screen bg-[#fafafa] flex flex-col md:flex-row items-center justify-center">

        <div className='lg:w-1/2 relative h-full bg-white lg:flex hidden items-center justify-center border-r border'>

          <div className='relative w-[500px] flex justify-center rounded-3xl h-[322px]'>

            <div className=' rounded-3xl w-[447px] h-[170px] overflow-hidden bg-white drop-shadow-1'>

              <div className='pl-[22px] pt-[21px] border-b flex items-center gap-2 py-5'>

                <img src={ant} alt="" />

                <h2 className='font-bold leading-[27px] text-[18px]'>AI to Detect & Autofix Bad Code</h2>

              </div>

              <div className='flex pl-5 pr-6 gap-14 py-5'>

                {
                  details.map((det, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                      <span className='font-bold text-[18px] leading-7'>{det.num}</span>
                      <h3 className='text-sm leading-5 capitalize'>{det.title}</h3>
                    </div>
                  ))
                }

              </div>

            </div>

            <div className='rounded-3xl bg-white drop-shadow-1 py-4 px-8 w-[265px] h-[164px] absolute bottom-0 right-0'>

              <div className='h-[134px]'>

                <div className='w-full h-1/2 flex items-center justify-between '>

                  <span className='aspect-square h-14 w-auto bg-[#9D90FA40] rounded-full flex items-center justify-center'>

                    <img src={piechart} alt="" />

                  </span>

                  <div className='items-center flex flex-col '>

                    <span className='flex justify-start items-center w-full '>

                      <img src={arrow} alt="" className='' />

                      <h4 className='font-bold text-sm leading-5 text-[#0049C6] '>14%</h4>

                    </span>


                    <div className='w-full text-center text-[12px] font-normal pl-2'>This week</div>

                  </div>
                </div>

                <div className='h-1/2 w-full flex justify-between items-start py-[2px] flex-col'>

                  <h3 className='text-sm font-bold'>Issues Fixed</h3>

                  <h1 className='text-[32px] leading-8 font-bold'>500K+</h1>

                </div>
              </div>

            </div>

          </div>

          <img src={antImg} className='absolute bottom-0 left-0 h-auto w-[20vw] max-w-[17rem]' alt="" />

        </div>

        <div className='lg:w-1/2 w-full max-h-max flex flex-col items-center justify-center bg-[#FAFAFA] h-[583px] md:h-[602px]'>

          <div className="mb-7 mx-auto w-[90%] bg-white max-w-[672px] border rounded-xl">

            <div className='border-b py-9 px-6'>

              <div className='flex flex-col gap-6 md:gap-9 mb-6 '>

                <Logo className="mx-auto" />

                <h1 className="text-[24px] md:text-[32px] text-center font-semibold xxs:text-base">

                  Welcome to CodeAnt AI

                </h1>

              </div>

              {/* login method */}

              <div className="flex gap-[2px]  bg-gray-100 rounded-lg h-[60px] xxs:h-12">

                <button className={`flex-1 py-2.5 ${method === 'saas' ? 'bg-[#1570EF] hover:bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'} rounded-lg font-semibold text-xl [400]:p-4 transition-colors xxs:text-base`} onClick={() => setMethod('saas')}>

                  SAAS

                </button>

                <button className={`flex-1 py-2.5 ${method === 'self_hosted' ? 'bg-[#1570EF] hover:bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'} font-semibold text-xl transition-colors rounded-lg xxs:text-base`} onClick={() => setMethod('self_hosted')}>

                  Self Hosted

                </button>

              </div>

              {/* login method */}

            </div>

            <div className=" flex justify-center py-6 min-h-[326px]">

              {method === 'saas' ? <Saas loginOptions={loginOptions} /> : <SelfHosted />}

            </div>

          </div>

          <PrivacyNotice />

        </div>

      </div>

    </div>
  );
}