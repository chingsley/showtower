import React from 'react';
import AuthPage from '../pages/AuthPage';
// import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes = () => (
  <div className="app-main">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/signup" component={AuthPage} />
      <Route exact path="/password/forgot" component={AuthPage} />
      <Route path="/password/reset/:resetToken" component={AuthPage} />
      <Route exact path="/:username" component={ProfilePage} />
      <Route path="/:username/projects" component={ProjectsPage} />
      <Route exact path="/notfound" component={NotFoundPage} />
      <Route component={NotFoundPage} />
      {/* <Redirect to="/notfound" /> */}
    </Switch>
  </div>
);

export default AppRoutes;
