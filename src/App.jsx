import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="flex min-h-screen relative z-10">
        {/* Sidebar */}
        <Sidebar />
      </div>
      App
    </div>
  );
};

export default App;
