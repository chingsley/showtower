import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

import NavBar from './components/NavBarResponsive';
// import NavBar from './components/NavBar';
import AppRoutes from './routes';
function App() {
  // const wrapper = React.createRef();
  return (
    <Router>
      <div className="App">
        <ToastContainer
          // ref={wrapper}
          autoClose={8000}
          position="bottom-right"
          className="toast-container"
          toastClassName="dark-toast"
          hideProgressBar
        />
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
