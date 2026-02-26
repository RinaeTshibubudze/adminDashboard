import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [sidebar, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
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
      </div>
      App
    </div>
  );
};

export default App;
