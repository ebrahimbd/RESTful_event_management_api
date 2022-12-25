import logo from './logo.svg';
import './App.css';
import Event from './Components/Event';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
 
function App() {
  return (
    <div className="App color">
      <Event />
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     
    </div>
  );
}

export default App;
