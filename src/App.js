
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import File2 from './File2';

import SideBar from './components/SideBar/SideBar'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<SideBar />}>
    <Route  element={<File2 />} index />
  </Route>
))

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
