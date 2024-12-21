import { useEffect, useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import MobileHeader from '../components/layout/MobileHeader';
import RepositoryList from '../components/repository/RepositoryList';

function homePage() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {

        const handleResize = () => {

            setIsMobile(window.innerWidth < 768);

        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (

        <div className="flex flex-col h-screen w-full bg-white">

            <div className='flex flex-col md:flex-row'>

                {isMobile ? <MobileHeader /> : <Sidebar />}

                <RepositoryList />

            </div>

        </div>
    )
}

export default homePage