"use client";
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import RightSidebar from '../RightSidebar';




const DashboardLayout: React.FC = () => {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex">
        
          <RightSidebar />
        </div>
      </div>
    );
  };
  
  
  export default DashboardLayout;