import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Navbar/index'; 
import Footer from './Footer/index';

function App() {
  return (
    <> 
      <Header className="fixed top-0 left-0 right-0 z-50"/>   
      <Outlet /> 
      <Footer/>
    </>
  );
}

export default App;
