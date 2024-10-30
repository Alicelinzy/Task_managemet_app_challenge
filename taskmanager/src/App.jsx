// App.jsx
import React from 'react';
import Sidebar from './Components/sidebar';
import DashboardHeader from './Pages/DashboardHeader';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <DashboardHeader /> 
    </div>
  );
}

export default App;
