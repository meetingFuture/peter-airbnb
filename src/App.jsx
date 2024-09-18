import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";

export default memo(function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="page">
        {routes.map((item) => {
          console.log(item.path, item.element);
        })}
        {useRoutes(routes)}
      </div>
      <div className="footer">footer</div>
    </div>
  );
});
