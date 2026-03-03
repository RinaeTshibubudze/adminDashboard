import React from "react";

const LiveActivityItem = () => {
  return (
    <div className="flex item-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div
        className={`p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
      >
        Icon
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate">Activity user</p>
        <p className="text-white/60 text-sm">Activity Action</p>
      </div>
      <div className="text-right">
        <p className="text-white font-medium truncate">Activity Amount</p>
        <p className="text-white/60 text-sm">Activity Time</p>
      </div>
    </div>
  );
};

export default LiveActivityItem;
