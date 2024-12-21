import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage';
import Login from './pages/Login'

function App() {


  return (

    <Router>

      <Routes>

        <Route path='/' element={<Login />} />

        <Route path='/home' element={<HomePage />} />

      </Routes>

    </Router>
    
  );
}

export default App;