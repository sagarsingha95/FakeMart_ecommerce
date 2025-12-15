import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { isLoggedIn, loading } = useSelector((state) => state.users);

  // Optional: loading screen while auth state resolves
  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  // Not authenticated → redirect
  if (!isLoggedIn) {
    alert('login first')
    return <Navigate to="/login" replace />
  }

  // Authenticated → render child routes
  return <Outlet />;
};

export default ProtectedRoute;
