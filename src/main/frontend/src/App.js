<<<<<<< HEAD
import {useEffect, useState} from "react";
import client from "./client";
import Header from "./component/Header";
=======
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import NoticePage from './pages/NoticePage';
>>>>>>> 3e984e3e9155d970ea187a03d382b1a9a592d826

function App() {
  
  return (
<<<<<<< HEAD
    <div>
      백엔드 데이터 : {hello}
      <Header/>
    </div>
=======
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/notice' element={<NoticePage/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 3e984e3e9155d970ea187a03d382b1a9a592d826
  )
}

export default App;