import React from 'react';
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import('../pages/Home'));
const Spinner = React.lazy(() => import('../utils/Spinner'));

const Routing: React.FunctionComponent = () => {
  
  return (
    <React.Suspense fallback={<Spinner />}>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />      
          </Routes>
        </div>
    </React.Suspense>
  )
}
export default Routing;

