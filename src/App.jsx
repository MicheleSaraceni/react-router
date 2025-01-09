import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import ChiSiamo from './pages/ChiSiamo';
import PostList from './pages/PostList';
import DefaultLayout from './component/DefaultLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/postlist" element={<PostList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
