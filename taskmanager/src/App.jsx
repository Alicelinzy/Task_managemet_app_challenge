// App.jsx
import React from 'react';
import Sidebar from './Components/sidebar';
import Settings from './Pages/Settings';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Settings /> 
      
    </div>
  );
}

export default App;
