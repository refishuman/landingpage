import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Shell from './Shell';
import MainPage from './pages/MainPage';
import QuizPage from './pages/QuizPage';
import EducationPage from './pages/EducationPage';
import RefCornerPage from './pages/RefCornerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Shell />}>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/quiz' element={<QuizPage />}></Route>
            <Route path='/education' element={<EducationPage/>}></Route>
            <Route path='/ref-corner' element={<RefCornerPage/>}></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
