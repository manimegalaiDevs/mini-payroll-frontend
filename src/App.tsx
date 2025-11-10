import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import LoginPage from "./Auth/Login";
import { useValidUser } from "./Auth/queries";
import { userStore } from "./Auth/Store";
import { Loader2 } from "lucide-react";
import PrivateLayout from "./Auth/PrivateLayout";

const queryClient = new QueryClient();

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading, isError } = useValidUser();

  // Automatically handle redirect logic
  useEffect(() => {
    if (isLoading) return;

    if (data?.loggedIn) {
      userStore.value = data.user || null;
      if (location.pathname === "/") {
        navigate("/dashboard", { replace: true });
      }
    } else if (!isError) {
      // Only redirect to login if not already there
      if (location.pathname !== "/" && location.pathname !== "/login") {
        navigate("/", { replace: true });
      }
    }
  }, [data, isLoading, isError, navigate, location]);

  // Show a loader while checking session
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-[#154579] text-lg">
        <Loader2 className="w-6 h-6 mr-2 animate-spin" />
        Checking session...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* Protected Routes */}
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Route>
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
