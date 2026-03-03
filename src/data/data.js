import {
  BarChart3,
  Cpu,
  Globe,
  Home,
  Package,
  Search,
  Settings,
  Users,
  ShoppingBag,
  Target,
} from "lucide-react";

export const revenueData = [
  { month: "Jan", revenue: 85000, users: 1200, growth: 12.5 },
  { month: "Feb", revenue: 90000, users: 1300, growth: 8.3 },
  { month: "Mar", revenue: 125000, users: 1400, growth: 5.6 },
  { month: "Apr", revenue: 100000, users: 1500, growth: 5.3 },
  { month: "May", revenue: 110000, users: 1600, growth: 10.0 },
  { month: "Jun", revenue: 120000, users: 9700, growth: 9.1 },
  { month: "Jul", revenue: 130000, users: 1800, growth: 8.3 },
  { month: "Aug", revenue: 100000, users: 1900, growth: 7.7 },
  { month: "Sep", revenue: 150000, users: 2000, growth: 7.1 },
  { month: "Oct", revenue: 160000, users: 2100, growth: 6.7 },
  { month: "Nov", revenue: 170000, users: 2200, growth: 6.3 },
  { month: "Dec", revenue: 190000, users: 9000, growth: 5.9 },
];

export const performanceData = [
  { name: "Performance", value: 92, fill: "#8B5CF6" },
  { name: "Security", value: 88, fill: "#06B6D4" },
  { name: "Speed", value: 95, fill: "#10B981" },
  { name: "Reliability", value: 95, fill: "#F59E0B" },
];

export const trafficSources = [
  { name: "Organic Search", value: 45, color: "#8B5CF6", icon: Search },
  { name: "Social Media", value: 28, color: "#EC4899", icon: Users },
  { name: "Direct Traffic", value: 18, color: "#10B981", icon: Globe },
  { name: "Email Campaign", value: 9, color: "#F59E0B", icon: Target },
];

export const liveActivities = [
  {
    user: "John Doe",
    action: "Made a purchase",
    amount: "R120.00",
    time: "2 mins ago",
    type: "purchase",
  },
  {
    user: "Jane Smith",
    action: "Signed up for newsletter",
    amount: "R300.00",
    time: "5 mins ago",
    type: "signup",
  },
  {
    user: "Bob Johnson",
    action: "Added item to cart",
    amount: "R50.00",
    time: "10 mins ago",
    type: "upgrade",
  },
  {
    user: "Alice Brown",
    action: "Completed a survey",
    amount: "R0.00",
    time: "15 mins ago",
    type: "review",
  },
  {
    user: "Charlie Green",
    action: "Left a comment",
    amount: "R0.00",
    time: "20 mins ago",
    type: "comment",
  },
];

export const menuItems = [
  {
    icon: Home,
    label: "Overview",
    id: "overview",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    id: "analytics",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    label: "Users",
    id: "users",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: ShoppingBag,
    label: "Sales",
    id: "sales",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Package,
    label: "Products",
    id: "products",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cpu,
    label: "Performance",
    id: "performance",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Settings,
    label: "Settings",
    id: "settings",
    gradient: "from-gray-500 to-gray-700",
  },
];
