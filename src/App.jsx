import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './components/Layout';
import SinglePost from './pages/SinglePost';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/singlepost/:i' element={<SinglePost />} />
      </Route>
    </Routes>
  )
}

export default App
