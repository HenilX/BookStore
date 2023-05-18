import './App.css';
import { BrowserRouter, Route, Router, Routes,} from 'react-router-dom';
import Login from './Page/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Login/>     
         <BrowserRouter>
         <Routes>
          <Route path="/Login" element={Login} />
         </Routes>
         </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
