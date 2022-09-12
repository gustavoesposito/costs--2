import {BrowserRouter as Router , Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import NewProject from './pages/NewProject'
import Company from './pages/Company'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
     <header className="App-header">
      <Router>
         <div>
           <Link to='/'>Home</Link>
           <Link to='/contact'>Contato</Link>
           <Link to='/company'>Empresa</Link>
           <Link to='/newproject'>NewProject</Link>
           </div>
           <Routes>
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/company' exact='true' element={<Company/>}></Route>
            <Route path='/newproject' exact='true' element={<NewProject/>}></Route>

           </Routes>

      </Router>

     </header>
    </div>
  );
}

export default App;
