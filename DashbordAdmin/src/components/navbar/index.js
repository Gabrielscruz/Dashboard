import  avatar  from '../../assets/imgs/logo.jpeg';
import { Link }from  'react-router-dom'
import './styles.css'

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
    <nav className='navbar'>
        <div className='nav_icon' onClick={() => openSidebar()}>
            <i className='fa fa-bars' aria-hidden='true'></i>
        </div>

        <div className='navbar__left'>
        <Link to="/">Usuarios</Link>
        <Link to="/">Relatorios</Link>
        <Link to="/">Relatorios</Link>
        </div>

        <div className='navbar__right'>
            <Link to="/">
                <i className='fa fa-search'></i>
            </Link>
            <Link to="/">
                <i className='fa fa-clock'></i>
            </Link>
            <Link to="/">
                <img width='50' src={avatar} alt='Avatar' />
            </Link>

        </div>
    </nav>
    )
}

export default  Navbar;