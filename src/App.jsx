import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import './assets/fonts/Montserrat-VariableFont_wght.ttf'

function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
   </>
  )
}

export default App
