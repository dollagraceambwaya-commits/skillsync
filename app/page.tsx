import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/DashboardContent";

export default function Home() {
  return (
    <main className="flex-1 bg-gray-950 min-h-screen flex">
      <Sidebar />

      <div className="flex-1 flex flex-col p-8">
        <Topbar />
        <DashboardContent />
      </div>
    </main>
  );
}
