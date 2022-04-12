import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Shop from './Pages/Home/Shop/Shop';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
