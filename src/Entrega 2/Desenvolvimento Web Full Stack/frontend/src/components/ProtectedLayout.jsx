import React from 'react';
import ProtectedRoute from './ProtectedRoute.jsx'; 
import DashboardHeader from './DashboardHeader.jsx';
import Footer from './Footer.jsx';


function ProtectedLayout({ children, allowedRoles }) {
  return (
    
    <ProtectedRoute allowedRoles={allowedRoles}>
      
      <DashboardHeader />
     
      <main>

      </main>
      
      <Footer />
    </ProtectedRoute>
  );
}

export default ProtectedLayout;
