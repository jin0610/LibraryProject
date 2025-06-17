import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import SamplePage from './pages/SamplePage';
import Library from "./components/sample/Library";
import LibraryPage from "./components/sample/Library";
import BookListPage from "./pages/BookListPage";
import ChatPage from './pages/ChatPage';
import NoticePage from './pages/NoticePage';
import NoticeDetailPage from './pages/NoticeDetailPage'
import NoticeWritePage from './pages/NoticeWritePage';
import NoticeEditPage from './pages/NoticeEditPage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        {/* 공지사항 */}
        <Route path='/notice' element={<NoticePage/>}/>
        <Route path='/notice/detail/:id' element={<NoticeDetailPage/>}/>
        <Route path='/notice/write' element={<NoticeWritePage/>}/>
        <Route path='/notice/edit/:id' element={<NoticeEditPage/>}/>
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