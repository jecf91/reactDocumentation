import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
const App = React.lazy(() => import ('./App'));


ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
  </ErrorBoundary>,
  document.getElementById('root')
);
