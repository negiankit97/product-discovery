import React, { Suspense, lazy } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Loader from "../components/Loader/Loader";
const HomePage = lazy(() => import("./ErrorBoundary/HomePage/HomePage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route path="*" component={<h1>Page Not Found</h1>} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
