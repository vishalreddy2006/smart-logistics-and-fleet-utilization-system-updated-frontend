import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar.jsx';
import HeaderBar from './components/HeaderBar.jsx';

import LoginPage from './pages/LoginPage.jsx';
import OperationsDashboardPage from './pages/OperationsDashboardPage.jsx';
import FleetManagementPage from './pages/FleetManagementPage.jsx';
import TripManagementPage from './pages/TripManagementPage.jsx';
import RouteOptimizationPage from './pages/RouteOptimizationPage.jsx';
import FleetAnalyticsPage from './pages/FleetAnalyticsPage.jsx';
import CostOptimizationPage from './pages/CostOptimizationPage.jsx';

function ProtectedLayout({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <HeaderBar />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <OperationsDashboardPage />
            </ProtectedLayout>
          }
        />

        <Route
          path="/fleet-management"
          element={
            <ProtectedLayout>
              <FleetManagementPage />
            </ProtectedLayout>
          }
        />

        <Route
          path="/trip-management"
          element={
            <ProtectedLayout>
              <TripManagementPage />
            </ProtectedLayout>
          }
        />

        <Route
          path="/route-optimization"
          element={
            <ProtectedLayout>
              <RouteOptimizationPage />
            </ProtectedLayout>
          }
        />

        <Route
          path="/fleet-analytics"
          element={
            <ProtectedLayout>
              <FleetAnalyticsPage />
            </ProtectedLayout>
          }
        />

        <Route
          path="/cost-optimization"
          element={
            <ProtectedLayout>
              <CostOptimizationPage />
            </ProtectedLayout>
          }
        />

      </Routes>
    </HashRouter>
  );
}