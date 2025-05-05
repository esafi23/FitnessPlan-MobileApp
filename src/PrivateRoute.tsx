import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import React, { ComponentType } from 'react';

interface PrivateRouteProps extends RouteProps {
  component: ComponentType<object>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
