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

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
