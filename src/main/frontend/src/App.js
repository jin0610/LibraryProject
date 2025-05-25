import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import SamplePage from './pages/SamplePage';
import Library from "./components/sample/Library";
import LibraryPage from "./components/sample/Library";
import BookListPage from "./pages/BookListPage";
import ChatPage from './pages/ChatPage';
import NoticePage from './pages/NoticePage';
import NoticeListPage from './pages/NoticeListPage';
import NoticeWritePage from './pages/NoticeWritePage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/notice_list' element={<NoticeListPage/>}/>
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