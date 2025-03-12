import { Link } from 'react-router-dom'
import '../style/Header.css'

function Header(){
    return(
        <>
            <nav>

                <span className="NavLogo">
                    PAGE
                </span>
                <ul className='NavList'>
                    <li className='NavListItem'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='NavListItem'>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className='NavListItem'>
                        <Link to="/account">Account</Link>
                    </li>
                    <li className='NavListItem'>
                        <Link to="/setting">Setting</Link>
                    </li>
                    <li className='NavListItem'>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header