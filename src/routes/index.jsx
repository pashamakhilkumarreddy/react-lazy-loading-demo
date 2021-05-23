import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../components/common/Loader';
import ErrorBoundary from '../components/ErrorBoundary';
import Home from '../pages/Home';

const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const Routes = () => 
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={['/', '/index', '/home']} component={Home} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>

export default Routes;