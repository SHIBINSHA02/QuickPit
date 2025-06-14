import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/pages/Home/Home'
import { Provider } from './Components/pages/ProviderForm/Provider'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<Provider />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
