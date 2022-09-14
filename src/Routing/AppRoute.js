import React from "react";
import { Route, Routes } from "react-router-dom";
import RoutesList from "./Routes";
const AppRoute = () => {
  return (
    <Routes>
      {RoutesList.Routes.map((x, index) => (
        <Route key={index} path={x.path} element={x.component} />
      ))}
    </Routes>
  );
};

export default AppRoute;
