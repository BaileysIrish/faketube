import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  return (
    <YoutubeApiProvider>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <QueryClientProvider client={queryClient}>
          <div className="flex-1">
            <Outlet />
          </div>
        </QueryClientProvider>
      </div>
    </YoutubeApiProvider>
  );
}

export default App;
