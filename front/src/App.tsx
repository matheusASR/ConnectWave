import Router from './routes';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './globalStyle';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer/>
    </>
  )
}

export default App
