import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '.';

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk
        // ... other middlewares ...
      )
    )
  );

  return store;
}
