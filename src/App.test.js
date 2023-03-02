import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import BuildTree from "./components/Tree";

describe("App component", () => {
  it("renders the BuildTree component with input and setInput props", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BuildTree).length).toEqual(1);
    expect(wrapper.find(BuildTree).prop("input")).toBeDefined();
    expect(wrapper.find(BuildTree).prop("setInput")).toBeDefined();
  });
});
