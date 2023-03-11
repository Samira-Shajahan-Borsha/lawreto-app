import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Toaster } from 'react-hot-toast';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster toastOptions={{
        className: 'mt-4',
        style: {
          padding: '16px',
          color: '#713200',
        }
      }} />
    </div>
  );
}

export default App;