import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import NoticePage from './pages/NoticePage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/notice' element={<NoticePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;