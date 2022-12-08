import React from 'react';
import {Outlet, Link} from 'react-router-dom';

const Root = () => {
  return (
    <div className='flex flex-row max-w-screen min-h-screen'>
        <div className="bg-gray-100 flex flex-col p-3 w-fit">
            <Link to={'usestate'}>useState</Link>
            <Link to={'useeffect'}>useEffect</Link>
        </div>
        
        <div className="bg-white p-12 max-w-[90%]"><Outlet /></div>
    </div>
  )
}

export default Root