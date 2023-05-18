import './App.css';
import { BrowserRouter, Route, Router, Routes,} from 'react-router-dom';
import Login from './Page/Login';
import ProductList from './Page/ProductList';
import Register from './Page/Register.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Login/>     
      <ProductList/>
      <Register/>
         <BrowserRouter>
         <Routes>
          <Route path="/Login" element={Login} />
          <Route path="/ProductList" element={ProductList}/>
          <Route Path="/Register" element = {Register}/>
         </Routes>
         </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
