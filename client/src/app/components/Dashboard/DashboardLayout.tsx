import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';


const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex">
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};


export default DashboardLayout;