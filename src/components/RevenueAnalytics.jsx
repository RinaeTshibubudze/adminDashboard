import React from "react";
import { revenueData } from "../data/data";
import { AreaChart, ResponsiveContainer } from "recharts";
import { Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const RevenueAnalytics = () => {
  return (
    <div className="lg:col-span-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Revenue Flow</h3>
          <p className="text-white/60">Real time financial analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <span className=" text-white/80 text-sm font-medium">Revenue</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            <span className=" text-white/80 text-sm font-medium">Users</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            <span className=" text-white/80 text-sm font-medium">Growth</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.1)"
          />
          <XAxis
            dataKey="month"
            stroke="rgba(255, 255, 255, 0.6)"
            fontSize={12}
          />
          <YAxis stroke="rgba(255, 255, 255, 0.6)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0,0.8 )",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              color: "#fff",
              backdropFilter: "blur(16px)",
            }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#06B6D4"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#8B5CF6"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorUsers)"
          />
          <Area
            type="monotone"
            dataKey="growth"
            stroke="#F59E0B"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorGrowth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueAnalytics;
