import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStud from './components/AddStud';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/addstud' element={<AddStud/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
