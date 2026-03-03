import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MetricCard from "./components/MetricCard";
import { DollarSign, Target, Users, Zap } from "lucide-react";
import RevenueAnalytics from "./components/RevenueAnalytics";
import LiveActivityFeed from "./components/LiveActivityFeed";

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

          <main className="flex-1 overflow-hidden p-8 space-y-8">
            {/* Conditional rendering */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <MetricCard
                title="Total Revenue"
                value="$120K"
                change={32.1}
                icon={DollarSign}
                gradient="from-emerald-400 to-cyan-400"
                subtitle="This quarter"
                trend={[45, 52, 48, 61, 55, 67]}
              />

              <MetricCard
                title="Total Users"
                value="1.2M"
                change={25.9}
                icon={Users}
                gradient="from-blue-400 to-purple-400"
                subtitle="Monthly active"
                trend={[23, 74, 65, 55, 89, 34]}
              />

              <MetricCard
                title="Conversion Rate"
                value="12.5%"
                change={19.5}
                icon={Target}
                gradient="from-purple-400 to-pink-400"
                subtitle="Last 30 days"
                trend={[28, 32, 35, 41, 38, 44]}
              />

              <MetricCard
                title="Performance Score"
                value="98.5%"
                change={-5.2}
                icon={Zap}
                gradient="from-orange-400 to-red-400"
                subtitle="System health"
                trend={[28, 32, 35, 41, 38, 44]}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Revenue Analysis */}
              <RevenueAnalytics />

              {/* Live Activity */}
              <LiveActivityFeed />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
