import {
  Book,
  Crown,
  DollarSign,
  Download,
  Star,
  UserPlus,
} from "lucide-react";
import React from "react";

const LiveActivityItem = ({ activity }) => {
  const typeStyles = {
    purchase: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      icon: DollarSign,
    },
    signup: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      icon: UserPlus,
    },
    download: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      icon: Download,
    },
    upgrade: {
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      icon: Crown,
    },
    review: {
      bg: "bg-pink-500/20",
      text: "text-pink-400",
      icon: Star,
    },
    comment: {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      icon: Book,
    },
  };

  const style = typeStyles[activity.type];
  const ActivityIcon = style.icon;

  return (
    <div className="flex item-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div
        className={`p-3 rounded-xl ${style.bg} group-hover:scale-110 transition-transform duration-300 `}
      >
        <ActivityIcon className={`${style.text} w-5 h-5`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate">{activity.user}</p>
        <p className="text-white/60 text-sm">{activity.action}</p>
      </div>
      <div className="text-right">
        <p className="text-white font-medium truncate">{activity.amount}</p>
        <p className="text-white/60 text-sm">{activity.time}</p>
      </div>
    </div>
  );
};

export default LiveActivityItem;
