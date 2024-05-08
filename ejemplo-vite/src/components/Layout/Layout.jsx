// import { Footer} from './Footer/Footer.jsx
import { Navigator } from './Navbar/Navbar.jsx'

export const Layout = ({children}) => {
  return (
    <div>
        <Navigator/>
        <div>
            { children }
        </div>
        
    </div>
  )
}
