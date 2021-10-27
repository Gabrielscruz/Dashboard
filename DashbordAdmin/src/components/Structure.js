import Navbar from './navbar'
import Sidebar from './sidebar'
import { useState } from 'react';

const Structure  = ({children}) =>{
    const [ sidebarOpen, setSidebarOpen ] = useState(false);

    const openSidebar = () =>{
      setSidebarOpen(true);
    }
  
    const closesidebar = () =>{
      setSidebarOpen(false);
    }
  
    return (
     <div id='container'>
        <Navbar sidebarOpen={sidebarOpen}  openSidebar={openSidebar}/>
        <main>
            <div className='main__container'>
               {children}
            </div>
        </main>
        <Sidebar sidebarOpen={sidebarOpen} closesidebar={closesidebar}/>
      </div>
    )
}

export default Structure