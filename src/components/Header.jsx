import { Link, NavLink } from 'react-router-dom'
import '../style/Header.css'

function Header(){
    return(
        <>
            <nav>
                <span className="NavLogo">
                    <img src="/src/assets/images/logo.png" alt="" />
                </span>
                <ul className='NavList'>
                    <li className='NavListItem'>
                        <NavLink to="/" className={({isActive})=>(isActive?"ActiveLink":"")}>Home</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/dashboard"  className={({isActive})=>(isActive?"ActiveLink":"")}>Dashboard</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/account"  className={({isActive})=>(isActive?"ActiveLink":"")}>Account</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/setting"  className={({isActive})=>(isActive?"ActiveLink":"")}>Setting</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/about"   className={({isActive})=>(isActive?"ActiveLink":"")}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header