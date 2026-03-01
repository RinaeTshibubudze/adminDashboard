import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  const [sidebar, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="flex min-h-screen relative z-10">
        {/* Sidebar */}
        <Sidebar
          sidebar={sidebar}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            activeTab={activeTab}
            setSidebarOpen={setSidebarOpen}
            currentTime={currentTime}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
