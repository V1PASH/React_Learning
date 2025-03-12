import { Link, NavLink } from 'react-router-dom'
import '../style/Header.css'

function Header(){
    return(
        <>
            <nav>
                <span className="NavLogo">
                    MyPage
                </span>
                <ul className='NavList'>
                    <li className='NavListItem'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/account">Account</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/setting">Setting</NavLink>
                    </li>
                    <li className='NavListItem'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header