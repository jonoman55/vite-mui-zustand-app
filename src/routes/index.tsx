import { lazy } from 'react';
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { Layout } from '../components';

const Home = lazy(() => import('../pages/HomePage'));
const Contacts = lazy(() => import('../pages/ContactsPage'));
const Profile = lazy(() => import('../pages/ProfilePage'));

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
