import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import ChiSiamo from './pages/ChiSiamo';
import PostList from './pages/PostList';
//import DefaultLayaut from './component/DefaultLayaut';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/postlist" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
