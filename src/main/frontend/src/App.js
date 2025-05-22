import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import NoticePage from './pages/NoticePage';
import SamplePage from './pages/SamplePage';
import Library from "./components/sample/Library";
import LibraryPage from "./components/sample/Library";
import BookListPage from "./pages/BookListPage";
import ChatPage from './pages/ChatPage';
<<<<<<< HEAD
import NoticeWritePage from './pages/NoticeWritePage';
=======
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
>>>>>>> 80c4e8afe87473e068dec7660b9542db8ab311ff

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/notice' element={<NoticePage/>}/>
        <Route path='/notice_write' element={<NoticeWritePage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
        <Route path='/sample' element={<SamplePage/>}/>
        <Route path='/Library' element={<LibraryPage />}/>
        <Route path='/books' element={<BookListPage/>}/>
        <Route path='/Library' element={<LibraryPage />}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/auth/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;