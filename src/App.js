import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

import Search from './Components/Search';
import Detail from './Components/Detail';
import LikedSongs from './Components/LikedSongs';

import Bodyn from './Components/Bodyn';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='body' element={<Bodyn/>}/>
           <Route path='' element={<Navigate to="body"/>}/>
           <Route path='search' element={<Search/>}/>
           <Route path='likes' element={<LikedSongs/>}/>
           <Route path='*' element={<Navigate to="body"/>}/>
           <Route path='/detail/:id' element={<Detail/>}/>
        </Route>
        
        
        <Route path='*' element={<Home/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
