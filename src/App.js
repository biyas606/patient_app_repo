import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddPatient from './components/AddPatient';
import ViewPatient from './components/ViewPatient';
import SearchPatient from './components/SearchPatient';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={< Login />}></Route>
    <Route path="/add" exact element={< AddPatient />}></Route>
    <Route path="/view" exact element={< ViewPatient />}></Route>
    <Route path="/search" exact element={< SearchPatient />}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
