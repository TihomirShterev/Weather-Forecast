import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const Selector = React.lazy(() => import('./components/common/selector'));
const CurrentForecast = React.lazy(() => import('./components/pages/current'));
const DailyForecast = React.lazy(() => import('./components/pages/daily'));

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Route path="/:city?" component={Selector} />
        <Switch>
          <Route path="/:city/current" component={CurrentForecast} />
          <Route path="/:city/daily" component={DailyForecast} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
