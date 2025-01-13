import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import AddPost from './pages/AddPost';
import DefaultLayout from './component/DefaultLayout';
import AlertContext from './contexts/AlertContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/AddPost" element={<AddPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
