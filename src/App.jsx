import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MetricCard from "./components/MetricCard";
import {
  Activity,
  BarChart3,
  DollarSign,
  Download,
  PieChart,
  Plus,
  Target,
  Users,
  Zap,
} from "lucide-react";
import RevenueAnalytics from "./components/RevenueAnalytics";
import LiveActivityFeed from "./components/LiveActivityFeed";
import TrafficSource from "./components/TrafficSource";
import SystemPerformance from "./components/SystemPerformance";
import { menuItems } from "./data/data";
import React from "react";

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

            {activeTab === "overview" && (
              <>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Traffic Sources */}
                  <TrafficSource />
                  <SystemPerformance />
                </div>
              </>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4">
                    Advanced Analytics Suite
                  </h2>
                  <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg">
                    Unlock deeper insights with our comprehensive analytics
                    tools, including cohort analysis, funnel visualization, and
                    predictive modeling to drive smarter business decisions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <PieChart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">
                        Data Insights
                      </h3>
                      <p className="text-white/60">
                        {""}
                        Gain valuable insights from your data to make informed
                        decisions and optimize your strategies.
                      </p>
                    </div>
                    <div className="gruop p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">
                        Predictive Analytics
                      </h3>
                      <p className="text-white/60">
                        {""}
                        Leverage machine learning algorithms to predict trends,
                        identify patterns, and make data-driven decisions.
                      </p>
                    </div>
                    <div className="gruop p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Activity className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">
                        Real-time Monitoring
                      </h3>
                      <p className="text-white/60">
                        {""}
                        Monitor your systems in real-time to detect anomalies,
                        track performance, and ensure optimal operation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs */}
            {!["overview", "analytics"].includes(activeTab) && (
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  {menuItems.find((item) => item.id === activeTab)?.icon &&
                    React.createElement(
                      menuItems.find((item) => item.id === activeTab).icon,
                      { className: "w-10 h-10 text-white" },
                    )}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4 capitalize">
                  {activeTab} Management
                </h2>
                <p className="text-white/60 max-w-md mx-auto mb-8 text-lg">
                  Advanced {activeTab} management features coming soon with
                  AI-powered automation.
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:shodow-2xl hover:scale-105 transition-all duration-300 flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Create New
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Export Data
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
        {/* Mobile Overlay */}
        {sidebar && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 lg:hidden">
          <Plus className="h-8 w-8 group-hover:totate-90 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default App;
