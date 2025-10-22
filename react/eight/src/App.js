import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Articles from './Articles';
import Layout from './components/Layout';
import './App.css';
import Aboutinfo from'./Aboutinfo';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:id" element={<Aboutinfo />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles-us" element={<Navigate to="/articles" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;