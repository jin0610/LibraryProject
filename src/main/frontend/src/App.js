import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import NoticePage from './pages/NoticePage';
import SamplePage from './pages/SamplePage';
import Library from "./components/sample/Library";
import LibraryPage from "./components/sample/Library";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/notice' element={<NoticePage/>}/>
        <Route path='/sample' element={<SamplePage/>}/>
        <Route path='/Library' element={<LibraryPage />}/>
        <Route path='/books' element={<BookListPage/>}/>
        <Route path='/Library' element={<LibraryPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;