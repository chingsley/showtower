import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../../store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

describe('<NavBarResponsive />', () => {
  const renderApp = () =>
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

  afterEach(cleanup);

  it('opens the signup form', () => {
    const { getByTestId, getAllByText } = renderApp();
    fireEvent.click(getAllByText(/sign up/i)[0]);
    const formTitle = getByTestId(/form-title/);
    expect(formTitle.textContent).toBe('Sign up');
  });
  it('opens the login form', () => {
    const { getByTestId, getByText } = renderApp();
    fireEvent.click(getByText(/sign in/i));
    const formTitle = getByTestId(/form-title/);
    expect(formTitle.textContent).toBe('Login');
  });
  it('opens the "forgot password" form', () => {
    const { getByTestId, getByText } = renderApp();
    fireEvent.click(getByTestId(/signin-nav-link/i));
    fireEvent.click(getByText(/forgot password\?/i));
    const formTitle = getByTestId(/form-title/);
    expect(formTitle.textContent).toBe('Password reset');
  });
});
