import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

export default memo(function App() {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">
        page
        {routes.map((item) => {
          console.log(item.path, item.element);
        })}
        {useRoutes(routes)}
      </div>
      <div className="footer">footer</div>
    </div>
  );
});
