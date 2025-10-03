import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Section from './pages/Section';
import Article from './pages/Article';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/section/:category" element={<Section />} />
      <Route path="/article/:slug" element={<Article />} />
    </Routes>
  );
}

export default App;