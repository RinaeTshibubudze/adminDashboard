import React from "react";
import LiveActivityItem from "./LiveActivityItem";

const LiveActivityFeed = () => {
  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Live Activity</h3>
          <p className="text-white/60 text-sm">Real time user actions</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-white/70 font-medium">Live</span>
        </div>
      </div>
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {/* Map Method */}
        <LiveActivityItem />
      </div>
    </div>
  );
};

export default LiveActivityFeed;
