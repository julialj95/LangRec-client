import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { renderer } from "react-test-renderer";
import App from "../App/App";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

// it("renders the UI as expected", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
