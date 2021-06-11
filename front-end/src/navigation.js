import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import ErrorBoundary from './components/common/ErrorBoundary';

const Selector = React.lazy(() => import('./components/common/selector'));
const CurrentForecast = React.lazy(() => import('./components/pages/current'));
const DailyForecast = React.lazy(() => import('./components/pages/daily'));

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Зарежда се...</h1>}>
        <ErrorBoundary>
          <Route path="/:city?" component={Selector} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Switch>
            <Route path="/:city/current" component={CurrentForecast} />
            <Route path="/:city/daily" component={DailyForecast} />
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
