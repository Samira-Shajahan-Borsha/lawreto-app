import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App bg-light bg-gradient">
      <RouterProvider router={router}></RouterProvider>
      <Toaster toastOptions={{
        className: 'mt-4',
        style: {
          padding: '16px',
          color: '#713200',
        }
      }}/>
    </div>
  );
}

export default App;