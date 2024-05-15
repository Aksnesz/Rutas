import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../NavBar';
import {
  HomePage,
  DashboardPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  SettingsPage,
  AboutPage,
  ContactPage,
  FaqPage,
} from '../pages'
import { PrivateRoute } from '../router/PrivateRouter'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};