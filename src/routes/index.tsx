import { lazy } from 'react';
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { Layout } from '../components';
import type { Lazy } from '../types';

const Home: Lazy = lazy(() => import('../pages/HomePage'));
const Contacts: Lazy = lazy(() => import('../pages/ContactsPage'));
const Profile: Lazy = lazy(() => import('../pages/ProfilePage'));
const SignUp: Lazy = lazy(() => import("../pages/SignUpPage"));
const SignIn: Lazy = lazy(() => import("../pages/SignInPage"));

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
