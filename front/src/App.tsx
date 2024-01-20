import Router from './routes';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './globalStyle';

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
