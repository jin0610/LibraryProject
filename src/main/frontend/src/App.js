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
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 필요 X */}
          <Route path='/auth/login' element={<LoginPage/>}/>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/books' element={<BookListPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/notice' element={<NoticePage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
          <Route path='/sample' element={<SamplePage/>}/>
          <Route path='/Library' element={<LibraryPage />}/>

          {/* 공지사항 */}
          <Route path='/notice' element={<NoticePage/>}/>
          <Route path='/notice/detail/:id' element={<NoticeDetailPage/>}/>
          <Route path='/notice/write' element={<NoticeWritePage/>}/>
          <Route path='/notice/edit/:id' element={<NoticeEditPage/>}/>

          {/* 로그인 필요 O */}
        <Route element={<ProtectedRoute />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;