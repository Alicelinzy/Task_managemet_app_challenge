import React, { useState } from "react";
import pic from '../assets/ALICE.jpg';

const Settings = () => {
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("English");
  const [timeFormat, setTimeFormat] = useState("24 Hours");

  return (
    <div className="w-full bg-gray-50 flex justify-center p-10">
      <div className="w-full max-w-3x1 bg-white rounded-lg shadow-md p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={pic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <button className="text-blue-500 px-4 py-2 font-semibold border-b-2 border-blue-500">
            General
          </button>
          <button className="text-gray-500 px-4 py-2 font-semibold">
            Notification
          </button>
        </div>

        {/* Settings Form */}
        <div className="space-y-6">
          {/* Language Setting */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Language</label>
            <select
              className="min-h-full border border-gray-300 rounded-lg p-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English (Default)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          {/* Timezone Setting */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Timezone</label>
            <select
              className="min-h-full border border-gray-300 rounded-lg p-2"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option>GMT</option>
              <option>EST</option>
              <option>PST</option>
            </select>
          </div>

          {/* Time Format */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Time Format</label>
            <div className=" flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="timeFormat"
                  value="24 Hours"
                  checked={timeFormat === "24 Hours"}
                  onChange={() => setTimeFormat("24 Hours")}
                  className="form-radio text-blue-500 "
                />
                <span className="ml-2 text-gray-700">24 Hours</span>
              </label>
              <label className="flex items-center ">
                <input
                  type="radio"
                  name="timeFormat"
                  value="12 Hours"
                  checked={timeFormat === "12 Hours"}
                  onChange={() => setTimeFormat("12 Hours")}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-700">12 Hours</span>
              </label>
            </div>
          </div>

          {/* Save Changes Button */}
          <button className="min-h-2 w-48 bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
