import image from './todo-app.png';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';

function App() {

  const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <div className="App">
      {
        pathname !== "/" ? <Navbar /> : null
      }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail /> } />
      </Routes>
    </div>
  );
}

export default App;
