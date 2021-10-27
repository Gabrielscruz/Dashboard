import './styles.css';
import  logo  from '../../assets/imgs/logo.jpeg';
import {Link} from 'react-router-dom'

const Sidebar = ({sidebarOpen ,closesidebar}) =>{
    return(
        <div  className={sidebarOpen ? 'sidebar-responsive': ''} id='sidebar'>

            <div className='sidebar__title'>

                <div className='sidebar__img'>
                    <img src={logo} alt='logo'   />
                    <h1>Gabriel</h1>
                </div>

                <i 
                onClick={() => { closesidebar()}}
                id='sidebarIcon'
                className='fa fa-times'
                aria-hidden='true'
                ></i>
            </div>

            

            <div className='sidebar__menu'>
                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-minus-square'></i>
                    <Link to="/">Main</Link>
                </div>

                <h2>ADMIN</h2>

                <div className='sidebar__link'>
                    <i className='fa fa-tachometer-alt'></i>
                    <Link to="/">Main</Link>
                </div>

                <div className='sidebar__logout'>
                    <i className='fa fa-power-off'></i>
                    <Link to="/">Main</Link>
                </div>
            </div>
          
        
        </div>
    )
}

export default Sidebar;