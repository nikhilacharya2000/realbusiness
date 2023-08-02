import React,{useState} from 'react'

import "./assests/styles.css";
import Navbar from "./components/Navbar";
import CategoriesPage from "./utils/CategoriesPage";
import CelebritiesPage from "./utils/CelebritiesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OldApi from "./components/OldApi";
import LoginPage from "./components/LoginPage";
import DetailsPage from "./components/DetailsPage";
// import Test from './components/Test';
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  return (
    <div>
      <BrowserRouter>
      <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/deta" element={<DetailsPage />}></Route>

          <Route path="/loginsignup" element={<OldApi />}></Route>
          <Route path="/celebrities" element={<CelebritiesPage />}></Route>
          <Route path="/categories" element={   <CategoriesPage searchQuery={searchQuery} />}></Route>

          <Route path="/log" element={<LoginPage />}></Route>

          {/* <Route path="/:id" component={DetailsPage} /> */}
          {/* <Route path="/celebrities/:id" element={<DetailsPage />} /> */}
          <Route path="/celebrities/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
