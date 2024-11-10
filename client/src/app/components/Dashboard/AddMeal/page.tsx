"use client";
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import RightSidebar from '../RightSidebar';
import DiningCommons from './DiningCommons';




const AddMenuLayout: React.FC = () => {
    return (

      <div className="flex min-h-screen">
        <Sidebar />
        <DiningCommons />  
        <RightSidebar />
      </div>

    );
  };
  
  
  export default AddMenuLayout;