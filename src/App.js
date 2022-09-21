import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Accueil from './components/Accueil';
import Information from './components/Informations';
import Profil from './components/Profil';
import Reglages from './components/Reglages';
import Statistique from './components/Statistique';
import Slidebar from './components/Slidebar';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Routes className="main">
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/informations' element={<Information/>}></Route>
        <Route path='/statistique' element={<Statistique/>}></Route>
        <Route path='/reglages' element={<Reglages/>}></Route>
        <Route path='/profil' element={<Profil/>}></Route>
      </Routes>
      <Slidebar className="slidebar"/>
    </div>
  );
}

export default App;
