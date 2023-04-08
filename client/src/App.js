
import { Routes, Route } from 'react-router-dom';
import {Home} from './components/Home'
import {Edit} from './components/Edit'
import {Create} from './components/Create'
import {Detail} from './components/Detail'
import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
