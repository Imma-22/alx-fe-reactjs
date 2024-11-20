import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired, // Ensure isAuthenticated is a required boolean
    children: PropTypes.node.isRequired, // Validate the presence of child components
  };

export default ProtectedRoute;