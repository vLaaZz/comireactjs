// import { Footer} from './Footer/Footer.jsx
import { Navbar } from './Navbar/Navbar.jsx'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>
            { children }
        </div>
        
    </div>
  )
}
