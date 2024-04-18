import {Navbar} from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemCount } from './components/ItemCount/ItemCount.jsx'
const App = () => {

  
    
    return (
        <>
          <Navbar/>
          <ItemListContainer titulo='The Gaming Store'/>
          <ItemCount/>
          
        </>
    )
}

export default App
