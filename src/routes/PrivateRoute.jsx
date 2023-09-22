import { Navigate} from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated (you can use your authentication logic here)
  const isAuthenticated = !!localStorage.getItem('token'); // You may have a different authentication method

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/LogIn" />;
  }

  return children; // Render the protected component if authenticated
};

export default PrivateRoute;
