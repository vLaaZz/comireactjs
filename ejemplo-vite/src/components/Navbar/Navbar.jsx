import logonavbar from '../../assets/logonavbar.png'
import './navbar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    
  
    return (
      <header className='header'>
          <img src = {logonavbar} alt="" className='navbar_logo'></img>
          <nav className='navcolor'>
            <ul className='navlist'>
              <li>Section 1</li>
              <li>Section 2</li>
              <li>Section 3</li>
            </ul>
          </nav>
          <CartWidget/> 
      </header>
    )
}

