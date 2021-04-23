import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Header from './components/common/header';

const CurrentForecast = React.lazy(() => import('./components/pages/current'));
const DailyForecast = React.lazy(() => import('./components/pages/daily'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Switch>
          <Route path="/" exact component={CurrentForecast} />
          <Route path="/daily" component={DailyForecast} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
