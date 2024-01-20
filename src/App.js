import './App.css';
import Home from './views/Home';
import Maps from './views/maps';
import Players from './views/players';
import Tanks from './views/tanks';
import Badges from './views/badges';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tanks' element={<Tanks/>}></Route>
        <Route path='/maps' element={<Maps/>}></Route>
        <Route path='/players' element={<Players/>}></Route>
        <Route path='/Badges' element={<Badges/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
