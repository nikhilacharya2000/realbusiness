import './assests/styles.css';
import DetailPage from './components/DetailPage';

import Navbar from './components/Navbar';
import CategoriesPage from './utils/CategoriesPage';
import CelebritiesPage from './utils/CelebritiesPage';
import HomePage from './utils/HomePage';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
          <Routes>
               <Route path='/' element={<HomePage/>}></Route>
               <Route path='/celebrities' element={<CelebritiesPage/>}></Route>
               <Route path='/categories' element={<CategoriesPage/>}></Route>
               <Route path='/detail' element={<DetailPage/>}></Route>
       




          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
