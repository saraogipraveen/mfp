import React from "react";
import ReactDOM from "react-dom";

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<h1>Hi There</h1>, el);
};

// if we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV == "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) mount(devRoot);
}

// if we are running through container
// we should export mount function
export { mount };
