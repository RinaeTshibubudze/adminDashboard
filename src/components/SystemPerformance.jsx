import { Shield } from "lucide-react";
import { performanceData } from "../data/data";
import React from "react";

const SystemPerformance = () => {
  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
      <h3 className="text-xl font-bold text-white mb-6">System Performance</h3>
      <div className="space-y-6">
        {/* Performance Metric Map Method */}
        {performanceData.map((metric, index) => {
          return (
            <div className="flex items-center justify-between" key={index}>
              <div>
                <p className="text-white font-semibold">{metric.name}</p>
                <p className="text-white/60 text-sm">{metric.status}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${metric.value}%`,
                      backgroundColor: metric.fill,
                    }}
                  ></div>
                </div>
                <span className="text-white font-bold text-lg w-12">
                  {metric.value}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-400" />
          <span className="text-green-400 font-semibold">
            All System Operational
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemPerformance;
