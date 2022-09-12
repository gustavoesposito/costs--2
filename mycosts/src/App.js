import { BrowserRouter as Router, Routes, Route, Link   } from 'react-router-dom';

import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'

import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
       <Router>

<div>
  <Link to='/'>Home</Link>
  <Link to='/contact'>Contato</Link>
  <Link to='/company'>Empresa</Link>
  <Link to='/newproject'>Novo Projeto</Link>
</div>
<Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/company' element={<Company />} />
  <Route exact path='/contact' element={<Contact />} />
  <Route exact path='/newproject' element={<NewProject />} />
</Routes>
<footer>Footer</footer>
</Router>

     </div>
  );
}

export default App;
