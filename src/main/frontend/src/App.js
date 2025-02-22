import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';
import NoticePage from './pages/NoticePage';
import SamplePage from './pages/SamplePage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/notice' element={<NoticePage/>}/>
        <Route path='/sample' element={<SamplePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;