import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Navbar/index'; 
import Footer from './Footer/index';

function App() {
  return (
    <> 
      <Header/> 
      <Outlet /> 
      <Footer/>
    </>
  );
}

export default App;
